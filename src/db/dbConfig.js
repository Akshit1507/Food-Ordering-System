// dbConfig.js

import mysql from "mysql";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "Nobita123!",
  database: "foodOrderingSystem",
};

const connection = mysql.createConnection(dbConfig);

export default connection;
