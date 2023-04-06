const { MongoClient, ServerApiVersion } = require('mongodb');

// .env 파일에서 uri 꺼내오기
const { MONGO_DB_URI } = process.env;

const client = new MongoClient(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
