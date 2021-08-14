'use strict';

require('dotenv').config();
//postgresql://snake:snake1337@localhost:5432/discord
const POSTGRES_URI = 'postgres://localhost:5432/orderfood';
const {Sequelize, DataTypes}=require('sequelize');

const Collection=require('./lip/collection');
const customerSchema=require('./customer.schema');




const food=require('./food.model');
// const clothes=require('./clothes.model');
let sequelize= new Sequelize(POSTGRES_URI,{});



const customerModel = customerSchema(sequelize, DataTypes);
const foodModel = food(sequelize, DataTypes);



customerModel.hasMany(foodModel, { foreignKey: 'customerId', sourceKey: 'id'});
foodModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id'});

const customerCollection = new Collection(customerModel);
const foodCollection = new Collection(foodModel);



module.exports={
    customerCollection: customerCollection,
    foodCollection: foodCollection,


    db:sequelize
}


