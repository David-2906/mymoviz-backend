var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();
require('dotenv').config();

const YOUR_API_KEY = process.env.YOUR_API_KEY;



router.get('/movies', (req,res)=> {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${YOUR_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        res.json({movies: data.results})
    })
})

module.exports = router;
