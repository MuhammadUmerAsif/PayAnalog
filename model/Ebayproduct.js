const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ebayproducts = sequelize.define('ebay_products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},
    {
        schema: 'pay_analog',
    }
);

module.exports = Ebayproducts;