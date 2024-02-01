const {projects, clients} = require('../sampleData.js')

const Project =require('../models/Project.js')
const Client =require('../models/Client.js')

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList} = require('graphql')


//project type
const ProjectType = new GraphQLObjectType({
    name:'Project',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLID},
        description:{type:GraphQLID},
        status:{type:GraphQLID},
        client:{
            type:ClientType,
            resolve(parent, args){
                return clients.find(client=>client.id===parent.clientId)
            }
        }

    })
})

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


//query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        clients:{
            type: new GraphQLList(ClientType),
            resolve(parent, args){
                return Client.find()
            }
        },
        client:{
            type:ClientType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return Client.findById(parent.clientId)
            }
        },
        projects:{
            type: new GraphQLList(ProjectType),
            resolve(parent, args){
                return Project.find()
            }
        },
        project:{
            type:ProjectType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return Project.findById(args.id)
            }
        }
    }
})





module.exports = new GraphQLSchema({
    query:RootQuery
})