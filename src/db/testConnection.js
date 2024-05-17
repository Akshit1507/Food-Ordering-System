// testConnection.js

import connection from "./dbConfig.js";

const connectToMySQL = () => {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database:", err);
      return;
    }
    console.log("Connected to MySQL database successfully!");
  });
};
export default connectToMySQL;
