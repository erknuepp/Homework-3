// load the things we need
var axios = require('axios').default;
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
var artist_results = [];
var total_
app.get('/', async function (req, res) {
    const itunesSearchUri = 'https://itunes.apple.com/search?media=music&term=%22';
    let search_term = '';
    if (req.query['artist'] === "") {
        search_term = '';
    } else {
        search_term = req.query['artist'];
    }
    console.log('Searching for ' + search_term);
    const url = itunesSearchUri + search_term + '%22&limit=5';
    artist_results = (await axios.get(url)).data['results'];
    artist_results.forEach(element => {
        
    });
    res.render('pages/index', {
        artist_results: artist_results
    });
});

app.listen(8080);
console.log('8080 is the magik port');