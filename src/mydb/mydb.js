export default class MyDb {
  constructor() {
    this.db = new Map();
  }

  addTable(tableName) {
    //check if table already exists
    if (this.db.has(tableName)) {
      return false;
    }

    db.set(tableName, { id: tableName, headers:{""} });
    this.db.set();
  }

  addEntity(){
    return true
    //addEntity(db, 't', 'i', { attrId: 'attrValue' }); // => db with new entity of id "i" and body {attrId: "attrValue"}
  }
}
