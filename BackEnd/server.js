// Defining constants
const express = require('express')
const app = express()
const port = 4000 // Port number for backend
const bodyParser = require('body-parser') // Module which parses the JSON

app.use(bodyParser.urlencoded({ extended: false }))

// Connects bodyParser to json
app.use(bodyParser.json())

const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.rcvxh1j.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
    title: String,
    cover:String,
    author:String
  });


const bookModel = mongoose.model('books', bookSchema);

app.post('/api/books',(req, res) => {
    console.log(req.body); 
    bookModel.create({
        title:req.body.title,
        cover:req.body.cover,
        author:req.body.author
    })
    res.send('Data Received')
})

//Output for localhost landing page
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/books', (req, res)=>{
    // const books = [
        // {
        // "title": "Learn Git in a Month of Lunches",
        // "isbn": "1617292419",
        // "pageCount": 0,
        // "thumbnailUrl":
        // "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "authors": ["Rick Umali"],
        // "categories": []
        // },
        // {
        // "title": "MongoDB in Action, Second Edition",
        // "isbn": "1617291609",
        // "pageCount": 0,
        // "thumbnailUrl":
        // "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        // "status": "MEAP",
        // "authors": [
        // "Kyle Banker",
        // "Peter Bakkum",
        // "Tim Hawkins",
        // "Shaun Verch",
        // "Douglas Garrett"
        // ],
        // "categories": []
        // },
        // {
        // "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        // "isbn": "1617292036",
        // "pageCount": 0,
        // "thumbnailUrl":
        // "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        // "status": "MEAP",
        // "authors": ["Simon Holmes"],
        // "categories": []
        // }
        // ]
        // res.status(200).json({
        //     myBooks:books
        // })

    bookModel.find((err,data)=> {
        console.log(data);
        res.json(data);
    })
})

//Defining parameters for JSON data
app.get('/api/book/:id',(req,res)=>{
    console.log(req.params.id);
    bookModel.findById(req.params.id,(err,data)=>{
        res.json(data);
    })
})

//Listen for HTTP request that has HTTP put method
app.put('/api/book/:id',(req,res)=>{
    console.log("Update "+req.params.id);

    bookModel.findByIdAndUpdate(req.params.id,req.body,{new: true},(error, data)=>{
        res.send(data);
    })
})

// Delete
app.delete('/api/book/:id', (req, res)=>{
    console.log("Deleting: "+req.params.id);

    bookModel.deleteOne({_id:req.params.id}, (error,data)=>{
        res.send(data);
    })

})


//Message for running on terminal
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})