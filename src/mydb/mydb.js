export default class MyDb {
  constructor() {
    this.db = new Map();
  }

  setTable(name) {
    //check if table already exists
    if (this.db.has("apples")) {
      return false;
    }
    db.set("apples", { color: "red", good: "yes" });
    this.db.set();
  }
}
