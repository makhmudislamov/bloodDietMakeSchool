// declaring express and installing
const express = require('express')
const app = express()
// mongoose
const mongoose = require('mongoose');
// adding exp-hbs
var exphbs = require('express-handlebars');

// using handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// connecting to db via mongoose
mongoose.connect('mongodb://localhost/dietPlatform');


// OUR MOCK ARRAY OF PROJECTS
let reviews = [
    { title: "Great Review", movieTitle: "Batman II" },
    { title: "Awesome Movie", movieTitle: "Titanic" }
]


// process.env.PORT >> remote port and 3000 >> local
const port = process.env.PORT || 3000

// INDEX route
app.get('/', (req, res) => {
    // res.render('reviews-index', { reviews: reviews });
    res.render('home', { msg: 'Handlebars are Cool!' });
})

// SHOW FORM route
app.get('/bloodInfo/new', (req, res) => {
    // res.render('reviews-index', { reviews: reviews });
    res.render('main-form');
})

app.listen(port, () => {
    console.log('App listening on port 3000!')
})