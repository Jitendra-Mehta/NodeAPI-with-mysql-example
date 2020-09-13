const express = require("express");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sampledb",
});
con.connect((err) => {
  if (err) {
    console.log("Mysql not connected.");
  } else {
    console.log("Mysql is connected....");
  }
});
const app = express();

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
