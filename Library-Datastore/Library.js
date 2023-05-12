class Library {
    constructor(dbUrl, dbName, collName) {
      this.dbUrl = dbUrl;
      this.dbName = dbName;
      this.collName = collName;
      this.dbClient;
      
    }
}
async client() {

    console.log(`Connecting to ${this.dbUrl}...`)
    this.dbClient = MongoClient.connect(this.dbUrl)
    console.log("Connected to database.");

    return this.dbClient;
  }