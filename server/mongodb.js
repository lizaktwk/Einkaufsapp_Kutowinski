'use strict';

const mongodb = require('mongodb');

const connectionString = 'mongodb://localhost:27017';

const mongoclient = new mongodb.MongoClient(connectionString);

mongoclient.connect(connectionString, { autoReconnect: true}, (err, database) => {
    if(err) {
        console.log("Failed to connect.", err.message);
        process.exit(1);
    }

    console.log("connected");

    const products = database.collection("allproducts");
});