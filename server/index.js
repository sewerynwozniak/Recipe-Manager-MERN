const express = require('express');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const { graphql } = require('graphql');
const schema = require('./schema/schema')
const port = process.env.PORT || 5000;

const app = express()

app.use('/graphql', graphqlHTTP({

}))

app.listen(port, console.log(`Server runnin on port ${port}`)) 