// load the things we need
var axios = require('axios').default;
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
var hero_results = []
app.get('/', async function (req, res) {

    let hero_name = '';
    if (req.query['hero'] === "") {
        hero_name = 'Batman';
    } else {
        hero_name = req.query['hero'];
    }
    console.log('Searching for ' + hero_name);
    const url = 'https://www.superheroapi.com/api.php/10159715364964485/search/' + hero_name;
    const result = await axios.get(url);
    console.log(result);
    hero_results = result.data['results'];
    
    res.render('pages/index', {
        hero_results: hero_results,
    });
});

app.listen(8080);
console.log('8080 is the magik port');