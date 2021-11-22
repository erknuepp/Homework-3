// load the things we need
var axios = require('axios').default;
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
var artist_results = [];

app.get('/', async function (req, res) {
    total_cost = 0;
    const itunesSearchUri = 'https://itunes.apple.com/search?media=music&term=%22';
    let search_term = '';
    if (req.query['artist'] === "") {
        search_term = 'Khalid';
    } else {
        search_term = req.query['artist'];
    }
    console.log('Searching for ' + search_term);
    const url = itunesSearchUri + search_term + '%22&limit=5';
    artist_results = (await axios.get(url)).data['results'];
    await artist_results.forEach(element => {
        total_cost += parseFloat(element['trackPrice']);
        console.log(element['trackPrice'])
    });
    res.render('pages/index', {
        artist_results: artist_results,
        total_cost: total_cost
    });
});

app.listen(8080);
console.log('8080 is the magik port');