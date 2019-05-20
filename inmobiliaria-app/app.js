const PORT = process.env.port || 8081;

var compression = require('compression');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/node-test';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// middlewares compress all responses & parse application/json
app.use(compression());
app.use(bodyParser.json());

// middleware log to console all request
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});

// welcome
app.get('/', (req, res, next) => {
    res.send('<h1>Welcome!</h1><br /> Routes: /api/users');
    next();
});

// middleware app routes
app.use('/api', require('./routes/routes'));

// start the engine
app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`);
});