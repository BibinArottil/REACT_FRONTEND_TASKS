import mysql from "mysql";
import { configDotenv } from "dotenv";
configDotenv()

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "note",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

export default db;
