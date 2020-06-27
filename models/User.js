// importing Model class and DataTypes object from sequelize
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
        id: {
            // DataTypes is a special Sequelize object to provide what type of data it is
            type: DataTypes.INTEGER,
            // equivalent to SQL 'NOT NULL'
            allowNull: false,
            // makes this column the primary key
            primaryKey: true,
            // turns on auto increment
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // enforces that there are no duplicate values in this column
            unique: true,
            // checks to see if the value entered meets the criteria for an email address
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // sets a requirement for length of the value
                len: [4]
            }
        }
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