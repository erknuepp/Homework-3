// load the things we need
var axios = require('axios').default;
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
var artist_results = []
app.get('/', async function (req, res) {
    const itunesSearchUri = 'https://itunes.apple.com/search?term=%22';
    let artist_name = '';
    if (req.query['artist'] === "") {
        artist_name = '';
    } else {
        artist_name = req.query['artist'];
    }
    console.log('Searching for ' + artist_name);
    const url = itunesSearchUri + artist_name + '%22';
    artist_results = (await axios.get(url)).data['results'];
    console.log(JSON.stringify(artist_results))
    res.render('pages/index', {
        artist_results: artist_results,
    });
});

app.listen(8080);
console.log('8080 is the magik port');