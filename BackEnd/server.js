// Defining constants
const express = require('express')
const app = express()
const port = 4000 // Port number for backend
const bodyParser = require('body-parser') // Module which parses the JSON

app.use(bodyParser.urlencoded({ extended: false }))

// Connects bodyParser to json
app.use(bodyParser.json())
const path = require('path');
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Info-Type, Accept");
next();
});

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.rcvxh1j.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const countrySchema = new mongoose.Schema({
    country: String,
    flag:String,
    capital:String
  });


const countryModel = mongoose.model('countries', countrySchema);

app.post('/api/countries',(req, res) => {
    console.log(req.body); 
    countryModel.create({
        country:req.body.country,
        flag:req.body.flag,
        capital:req.body.capital
    })
    res.send('Data Received')
})

//Output for localhost landing page
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/countries', (req, res)=>{


    countryModel.find((err,data)=> {
        console.log(data);
        res.json(data);
    })
})

//Defining parameters for JSON data
app.get('/api/country/:id',(req, res)=>{
    console.log(req.params.id);
    countryModel.findById(req.params.id,(err,data)=>{
        res.json(data);
    })
})

//Listen for HTTP request that has HTTP put method
app.put('/api/country/:id',(req, res)=>{
    console.log("Update "+req.params.id);

    countryModel.findByIdAndUpdate(req.params.id,req.body,{new: true},(error, data)=>{
        res.send(data);
    })
})

// Delete
app.delete('/api/country/:id', (req, res)=>{
    console.log("Deleting: "+req.params.id);

    countryModel.deleteOne({_id:req.params.id}, (error,data)=>{
        res.send(data);
    })

})

// Sends user to the right place when incorrect URL is typed
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });

//Message for running on terminal
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})