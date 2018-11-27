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
    res.render('home');
})

// SHOW FORM route
app.get('/blood/new', (req, res) => {
    // res.render('reviews-index', { reviews: reviews });
    res.render('main-form');
})


// CREATE
app.post('blood/:type/diet', (req, res) => {
    
})

// SHOW
app.get('/blood/:type/diet/:id', (req, res) => {
    // res.render('home')
    console.log("working")
})

function showDiet() {
    var select = document.getElementById("exampleFormControlSelect1").value
        if (select == "A")
            alert("yahhoooo type A diet is here")
            // res.render("")

}




app.listen(port, () => {
    console.log('App listening on port 3000!')
})