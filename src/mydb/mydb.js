export default class MyDb {
  constructor() {
    this.db = new Map();
  }

  addTable(tableName) {
    //check if table already exists
    if (this.db.has(tableName)) {
      return false;
    }

    this.db.set(tableName, new Map());
  }

  addEntity(db, tableId, entityId, data) {
    const table = this.db.get(tableName).set("data", data);
    return true;
    //addEntity(db, 't', 'i', { attrId: 'attrValue' }); // => db with new entity of id "i" and body {attrId: "attrValue"}
  }
}
