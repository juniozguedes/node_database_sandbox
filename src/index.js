const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // Create a Map
  const db = new Map();

  // Set Map Values
  db.set("apples", { color: "red", good: "yes" });
  db.set("bananas", 300);
  db.set("oranges", 200);

  console.log(db);
  const obj = db.get("apples");
  console.log(obj);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
