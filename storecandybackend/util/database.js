const Sequelize=require("sequelize")
const sequelise=new Sequelize("node-complete","root","(@Shivam",{
    dialect:"mysql",
    host:"localhost"
})
module.exports=sequelise