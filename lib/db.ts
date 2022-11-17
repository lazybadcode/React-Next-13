import { DataSource } from "typeorm";
import { Province } from "../models/province.model";
import { User } from "../models/user.model";
const db = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: 5432,
  username: "postgres",
  password: "password",
  database: "test",
  synchronize: process.env.NODE_ENV !== "production", // dev is true
  entities: [Province,User],
});

console.log("HOST " + process.env.ORACLE_HOST)
db.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export const connectDB = (delay = 3000): Promise<DataSource> => {
    if (db.isInitialized) return Promise.resolve(db);
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (db.isInitialized) resolve(db);
        else reject("Failed to create connection with database");
      }, delay);
    });
};
