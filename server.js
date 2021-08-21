console.log('Server-side code running');

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const server = express();

// serve files from the public directory
server.use(express.static('public'));

// connect to the db and start the express server


// ***Replace the URL below with the URL for your database***
const url =  'mongodb+srv://srinivas:srinivas123@cluster0.2dvnh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// E.g. for option 2) above this will be:
// const url =  'mongodb://localhost:21017/databaseName';

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = process.env.PORT || 4000;

// << db setup >>
const db = require("./db.js");
const dbName = "Nutrition";
const collectionName = "ProductDesc";



server.get("/productInfo2", (request, response) => {
   
        response.json({

            "name": "Srinivas"

        }
            );
   
});

server.get("/productInfo2", (request, response) => {
   
    response.json({

        "name": "Srinivas"

    }
        );

});

db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
// get all items
dbCollection.find().toArray(function(err, result) {
    if (err) throw err;
     
});

server.get("/productInfo", (request, response) => {
    const productName = request.query.name;
    
    console.log(productName)
    console.log(dbCollection)

    dbCollection.find().toArray((error, result) => {
        if (error) throw error;
        // return item
        response.json(result);
    });
});

server.get("/productData", (request, response) => {
   
  


    dbCollection.findOne({name:"Sorghum"}, (error, result) => {
        if (error) throw error;
        // return item

        console.log(result)
        response.json(result);
    });
       
    });


server.get("/productDatas", (request, response) => {
   
    

    var productName= request.query.productName;
    console.log(productName);

    var query ={
        name: productName
    }

    console.log(query)
    dbCollection.findOne(query, (error, result) => {
        if (error) throw error;
        // return item

        console.log(result)
        response.json(result);
    });
       
   
});

});
server.listen(port, () => {
console.log(`Server listening at ${port}`);
});