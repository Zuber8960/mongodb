const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://zuberahmad8960:q3HtOI6s98h0Rl1N@cluster0.pe1tzm1.mongodb.net/shop?retryWrites=true&w=majority`
  )
  .then(client => {
    console.log('Connected !');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
}

const getDb = () => {
  if(_db){
    return _db;
  }
  console.log('no database found');
  throw 'No database found !';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
