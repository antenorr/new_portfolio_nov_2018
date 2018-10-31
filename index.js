const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require("node-fetch");


//Routers -- this route will handle the call  to retrieve information from SpaceX
// const readXRouter = require('./router-files/readxrouter');

const app = express();





// This step allows us to handle data parsing thus req.body 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(morgan("short"));



app.use('/api/spacex', (req, res) => {
   fetch(`https://api.spacexdata.com/v3/launches/`)
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            res.json(data)
        } )
});



app.get('/apix', (req, res) => {
    res.json([
        {answer: "one", key: 1},
        { answer: "Two", key: 2},
        { answer: "three", key: 3}
    ])
});














app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Your application is launched on ${port}`);