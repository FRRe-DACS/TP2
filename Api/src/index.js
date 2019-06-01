const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
var path = require('path');

var cors = require('cors');

mongoose.Promise = global.Promise;

const app = express();
app.use(cors())
// view engine setup
.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/cartelera')
    .then(db=> console.log('DB is connected'))
    .catch(err=> console.long(err));


// Settings
app.set('port',process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/peliculas',require('./routes/cartelera'));

// Static files
app.use(express.static(__dirname + '/public'))
// Server is listening
app.listen(app.get('port'),()=> {
    console.log('Server on port ',app.get('port'));
});

module.exports = app;
