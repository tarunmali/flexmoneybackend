const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const {MongoClient} = require('mongodb');
const URL=process.env.DATABASE;

const uri = URL;
const client = new MongoClient(uri);
const connectDB=async ()=> {
	await client.connect();
    console.log('MongoDB Connected...');
}
// const connectDB = async () => {
//     await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true});
// }


// const MongoClient = require('mongodb').MongoClient;

// // Replace the uri string with your connection string.

// MongoClient.connect(uri, function(err, db) {
//   if (err) throw err;
//   console.log("Connected successfully!");
//   db.close();
// })


module.exports=connectDB;