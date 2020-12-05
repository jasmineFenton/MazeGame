const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  alertcollection: process.env.ALERTCOLLECTION,
  coll: process.env.ALERTCOLLECTION,
  alerturl: process.env.ALERTURL,
  appdb: process.env.DB,
  atlas: process.env.DBURL,
  isourl: process.env.ISOURL,
  port: process.env.PORT,
  graphql: process.env.GRAPHQLURL,
  advisorycollection: process.env.ADVISORYCOLLECTION,
  countrycollection: process.env.COUNTRYCOLLECTION,
};
