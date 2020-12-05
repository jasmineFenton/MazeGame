const { port, graphql } = require("./config");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const { resolvers } = require("./resolvers");
const { schema } = require("./schema");
const cors = require("cors");
const myroutes = require("./userroutes");
const bodyParser = require("body-parser");
app.use(cors());
app.use(express.static("public"));
// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// routing
app.use("/mazedata", myroutes);
// app.use(
//   graphql,
//   graphqlHTTP({
//     schema,
//     rootValue: resolvers,
//     graphiql: true,
//   })
// );
app.listen(port);
console.log(
  `Server ready on locahost:${port}${graphql} - ${process.env.NODE_ENV}`
);
