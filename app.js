var express = require('express');
var app = express();

app.use(express.static('public'));

// ROUTES

// Homepage
app.get('/', function(req, res) {
    res.render('home.ejs');
});

// Timestamp
app.get('/:timestamp', function(req, res) {
    var timestamp = req.params.timestamp;
    
    res.render('timestamp.ejs', {timestamp: timestamp});
});


// SERVER
app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server has started');
});