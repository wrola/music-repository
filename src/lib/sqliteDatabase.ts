import sqlite3 from 'sqlite3';

class SqliteDatabase {
  private db;
  constructor() {
    this.initDb();
  }
  initDb() {
    const sqlite = sqlite3.verbose();
    this.db = new sqlite.Database('sampleDatabase', err => {
      console.log(err);
    });
  }
  run(query) {
    this.db.run(query);
  }
}
