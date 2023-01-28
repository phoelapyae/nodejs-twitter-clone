var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = process.env.DB_CONNECTION_URL;
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB, { useNewUrlParser: true });