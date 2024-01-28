const express = require('express');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const { graphql } = require('graphql');
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

const app = express()


//Connect to database
connectDB()


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server runnin on port ${port}`)) 