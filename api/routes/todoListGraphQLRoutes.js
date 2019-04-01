'use strict';

module.exports = function(app) {
    console.log("Registering GraphQL routes")

    var express_graphql = require('express-graphql');
    var { buildSchema } = require('graphql');

    var todoList = require('../controllers/todoListGraphQLController');

    app.use('/graphql', express_graphql({
        schema: todoList.schema,
        rootValue: todoList.root,
        graphiql: true
    }));
}
