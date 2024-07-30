// const mongoose = require('mongoose')
// mongoose.connect("mongodb://127.0.0.1:27017/contact" ,{
//    // useUnifiedTopology:true,
//    // useNewUrlParser:true
// }).then(() => {
//     console.log("connection successfull")
// }).catch((e) => {
//     console.log(e)
// })


require('dotenv').config();
const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
  console.error("Error: MONGODB_URI is not defined in the .env file.");
  process.exit(1);
}

const connectWithRetry = () => {
  console.log('MongoDB connection with retry');
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB is connected');
  }).catch(err => {
    console.error('MongoDB connection unsuccessful, retry after 5 seconds. ', err);
    setTimeout(connectWithRetry, 5000);
  });
};

connectWithRetry();
