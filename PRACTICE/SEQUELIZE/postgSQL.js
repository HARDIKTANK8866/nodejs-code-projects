import { Sequelize } from "sequelize";
import { userModel } from "./model/user";

export const Connection = async () => {
  const sequelize = new Sequelize("college", "postgres", "1234567890", {
    host: "localhost",
    dialect: "postgres",
  });


let user = null;
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
  user = userModel(sequelize);
  await sequelize.sync()
  console.log("Table create successfully.");

} catch (error) {
  console.error("Unable to connect to the database:", error);
}
}
export{user}