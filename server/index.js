const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const{grsphqlHTTP, graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');

const port = process.env.PORT || 5003;
const app = express();
// Connect to DB

connectDB();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))
app.listen(port, console.log(`Server is running on port ${port}`));