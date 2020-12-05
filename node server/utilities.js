const request = require("request");
const getJSONFromWWWPromise = url => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(body);
    });
  });
};
const getJSONFromWWWPromiseObject = url => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        reject(err);
        return;
      }
      body = JSON.parse(body);
      resolve(body.data);
    });
  });
};
module.exports = {
  getJSONFromWWWPromise,
  getJSONFromWWWPromiseObject
};
