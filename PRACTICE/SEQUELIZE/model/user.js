import { name } from "ejs";
import { Sequelize } from "sequelize";

export const userModel=(Sequelize)=>{
    const {dataTypes}=Sequelize
    
    
    return Sequelize.define("user",{
        user:{
            type:dataTypes.TEXT
        },
        name:{
            type:dataTypes.TEXT
        }
    });
}