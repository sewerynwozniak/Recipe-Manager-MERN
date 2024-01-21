const {projects, clients} = require('../sampleData.js')

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema} = require('graphql')

//client type
const ClientType = new GraphQLObjectType({
    name:'Client',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLID},
        email:{type:GraphQLID},
        phone:{type:GraphQLID},

    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        clients:{
            type:ClientType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return clients.find(client=>client.id===args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})