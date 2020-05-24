//init frameworks
const express = require('express');
const app = express();

//integrate GraphQL
const express_graphql = require('express-graphql');

// module to create schemas
const { buildSchema } = require('graphql');

// build schema
const schema = buildSchema(`
type Query{
    message: String
}

`);

//
const root = {
    message: () => "Hello Wold"
}

// create route
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));


//create the server
app.listen(3000, () => console.log('Server on Port 3000'));