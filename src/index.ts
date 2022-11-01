import express = require("express");
const app = express();
const port = 3000;
import { MyDb } from "./mydb/mydb";

const db = new MyDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(db);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
