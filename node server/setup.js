const lib = require("./utilities");
const routines = require("./dbroutines");
const constants = require("./config");

async function loadAlerts() {
  let alertData = await lib.getJSONFromWWWPromiseObject(constants.alerturl);
  //alertData = JSON.parse(alertData);
  return alertData;
}
async function loadCountries() {
  let countryData = await lib.getJSONFromWWWPromise(constants.isourl);
  countryData = JSON.parse(countryData);
  return countryData;
}
async function loadAll(db) {
  let str = "";
  try {
    let deleteResult = await routines.deleteAll(db, constants.alertcollection);
    str += `Deleted ${deleteResult.deletedCount} existing documents from the alerts collection.`;
    let alertData = await loadAlerts();
    str += "Retrieved Alert JSON from remote web site.";
    let countryData = await loadCountries();
    str += "Retrieved Country JSON from remote web site.";
    let alertDocuments = [];
    for (let i = 0; i < countryData.length; i++) {
      let currentItem = {
        country: countryData[i]["alpha-2"],
        name: countryData[i].name,
        text:
          alertData[countryData[i]["alpha-2"]] !== undefined
            ? alertData[countryData[i]["alpha-2"]].eng["advisory-text"]
            : "No alerts for this country",
        date:
          alertData[countryData[i]["alpha-2"]] !== undefined
            ? alertData[countryData[i]["alpha-2"]]["date-published"].date
            : "",
        region: countryData[i].region,
        subregion: countryData[i]["sub-region"]
      };
      alertDocuments.push(currentItem);
    }
    let totalAdditions = 0;
    await Promise.allSettled(
      alertDocuments.map(async alert => {
        await routines.addOne(db, constants.alertcollection, alert);
        totalAdditions++;
      })
    );
    str += `Added approximately ${totalAdditions} new documents to the alerts collection.`;
  } catch (err) {
    str = err;
  } finally {
    return str;
  }
}
module.exports = { loadAll };
//loadAll();
