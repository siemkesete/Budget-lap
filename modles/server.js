require('dotenv').config();
app.use(express.static('public'))
//dependcies
const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3000;


//DataBase
const Budget = require('./models/budget');

//Middleware
//app.use(express.static('public'));
//app.use(logger('dev'));
//app.use(express.urlencoded({ extended: false}));

//Routes
app.get('/budgtr', (req, res) => {
    res.render('index.ejs', {
        allBuget: Budget,
    });
});


app.get('/budgtr/:id', (req, res) => {
    res.render('show.ejs', {
        allBuget: Budget[req.params.id],
    });
});

//TODO CREATE=>ROUTE
app.post('/budgtr', (req, res) => {
    allBudget.push(req.body);
    console.log(req.body);
    res.redirect('/budgtr');
  });

  //TODO SHOW=>ROUTES
app.get('/budgtr/:id', (req, res) => {
    console.log(Budget[req.params.id]);
    res.render('show.ejs', {
      allBudget: Budget[req.params.id],
    });
  });

//Listener
app.listen(port, () => {
    console.log('my Accountant is listenig on ${port}');
});