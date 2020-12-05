const { buildSchema } = require("graphql");
const schema = buildSchema(`
type Query {
 setupalerts: String,
 alerts:[Alert],
 alertsforregion(region:String):[Alert],
 alertsforsubregion(subregion:String):[Alert],
 alertregions:[String],
 alertsubregions:[String],
 travellers:[String],
 advisoriesfortraveller(name:String):[Advisory],
 countries:[Country]
}
type Mutation{
    postadvisory(name:String,country:String,alert:String,time:String):Advisory
}
type Alert{
    country:String
    name:String
    text:String
    date:String
    region:String
    subregion:String
},
type Advisory{
    name:String
    country:String
    alert:String
    time:String
},
type Country{
    Name:String
    Code:String
}
`);
module.exports = { schema };
