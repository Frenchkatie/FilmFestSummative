const express = require('express');
const filmData = require('./data/film-data.json'); // Importing the film data and storing it in a variable
const cinemaData = require('./data/cinema-data.json');// Importing the cinema data and storing it in a variable
const cors = require('cors');

const app = express();

app.use(cors());

app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// This function returns the data when /films is requested
app.get('/films', function(req,res){
    res.json(filmData); // Here the variable holding the films data is returned
});

// This function returns the data when /cinemas is requested
app.get('/cinemas', function(req,res){
    res.json(cinemaData); // Here the variable holding the cinema data is returned
});

app.get('/filmsNumber/:id', function(req,res){
    res.json(filmData[req.params.id]); // Here the variable holding the data is returned
    console.log(req.params);
});

app.get('/cinemasNumber/:id', function(req,res){
    res.json(cinemaData[req.params.id]);
    console.log(req.params);
});

// Here the server is being set to run at port 5000
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function(){
    console.log('Server is running on port '+app.get('port'));
});
