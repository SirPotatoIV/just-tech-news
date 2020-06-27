// importing Modle and DataTypes classes from sequelize
const { Model, DataTypes } = require('sequelize');
// importing our instance of sequelize
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table coulmns and configuration
// -- passing in two objects as arguments
User.init(
    {
        //Table column definitions go here
    },
    {
        // Table configuration options go here
        // (https://sequelize.org/v5/manual/models-definition.html#configuration)
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't auto create createdAt/updatedAt timestap fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'        
    }
);

module.exports = User;