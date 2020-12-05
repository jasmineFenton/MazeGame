const dbRtns = require("./dbroutines");
const {
  alertcollection,
  advisorycollection,
  countrycollection
} = require("./config");
const setup = require("./setup");
const resolvers = {
  setupalerts: async () => {
    let db = await dbRtns.loadDB();
    return await setup.loadAll(db);
  },
  alerts: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, alertcollection, {}, {});
  },
  alertsforregion: async args => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, alertcollection, {
      region: args.region
    });
  },
  alertsforsubregion: async args => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, alertcollection, {
      subregion: args.subregion
    });
  },
  alertregions: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findUniqueValues(db, alertcollection, "region");
  },
  alertsubregions: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findUniqueValues(db, alertcollection, "subregion");
  },
  travellers: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findUniqueValues(db, advisorycollection, "name");
  },
  countries: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, countrycollection, {}, {});
  },
  advisoriesfortraveller: async args => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, advisorycollection, { name: args.name });
  },
  postadvisory: async args => {
    let db = await dbRtns.loadDB();
    let advisory = {
      name: args.name,
      country: args.country,
      alert: args.alert,
      time: args.time
    };
    return await dbRtns.addOne(db, advisorycollection, advisory);
  }
};
module.exports = { resolvers };
