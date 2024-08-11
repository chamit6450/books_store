const mongoose = require("mongoose")
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
require('dotenv').config();
const jwt = require('jsonwebtoken')
app.use(express.json())

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('')
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    //create a collection for the documents
    const bookCollections = client.db('Book-Heaven').collection('books');

    //insert a book to the database : post method 
    app.post('/upload-book', async(req,res)=>{
        const data = req.body; 
        const result = await bookCollections.insertOne(data);
        res.send(result);
    });


    //get all the books from the database
    app.get('/all-books',async(req,res)=>{
        const books = bookCollections.find();
        const result= await books.toArray();
        res.send(result);
    })
    
    //update a book data
    app.patch('/book/:id', async(req,res)=>{
        const id = req.params.id;
        // console.log(id);
        const updateBookData = req.body;

        const filter = {_id : new ObjectId(id)};
        const options = {upsert : true };

        const updateDoc = {
            $set : {
                ...updateBookData
            }
        }

        //update
        const result = await bookCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    })


    //delete a book data
    app.delete('/book/:id' , async(req,res)=>{
        const id = req.params.id;
        const filter = {_id : new ObjectId(id)};

        const result = await bookCollections.deleteOne(filter);
        res.send(result);

    })



    //find by category
    app.get('/all-books', async(req,res)=>{
        let query =  {};
        if(req.query?.category){
            query = {category: req.query.category}
        }
        const result = await bookCollections.find(query).toArray();
        res.send(result);
    })


    //get single book data
    app.get('/book/:id' , async(req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await bookCollections.findOne(filter);
        res.send(result);
    })
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Book-store is now connected to database");
  } finally {
   
  }
}
run().catch(console.dir);



app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})
