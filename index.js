//init frameworks
const express = require('express');
const app = express();

//integrate GraphQL
const express_graphql = require('express-graphql');

// module to create schemas
const { buildSchema } = require('graphql');

//create the server
app.listen(3000, () => console.log('Server on Port 3000'));