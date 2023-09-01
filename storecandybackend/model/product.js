const Sequelize=require("sequelize");
const sequelize=require("../util/database")

const Product=sequelize.define("product",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    choclate:{
type:Sequelize.TEXT,
allowNull:false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    quantity:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});
module.exports=Product