// declaring express and installing
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// mongoose
const mongoose = require('mongoose');
// adding exp-hbs
var exphbs = require('express-handlebars');
// process.env.PORT >> remote port and 3000 >> local
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));

// using handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// connecting to db via mongoose
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/dietPlatform', {useNewUrlParser: true});



const BloodType = mongoose.model("BloodType", {
    fullName: String,
    weight: String,
    height: String,
    bloodTypes: String
})



// INDEX route
app.get('/', (req, res) => {
    // res.render('reviews-index', { reviews: reviews });
    res.render('home');
});

// SHOW FORM 
app.get('/blood/new', (req, res) => {
    // res.render('reviews-index', { reviews: reviews });
    res.render('main-form');
});


// TODO: create route for new input
// same name as the values  
app.post('/blood', (req, res) => {
    BloodType.create(req.body).then((bloodtype) => {
        console.log(bloodtype);
        console.log(req.body)
        res.redirect('/');
    }).catch((err) => {
        console.log(err.message);
    })
    
});

// 
// 
app.get('/blood/:type/diet', (req, res) => {
    // call the func
});

// SHOW
app.get('/blood/:type/diet/:id', (req, res) => {
    // res.render('home')
    console.log("working")
});

// function showDiet() {
//     var select = document.getElementsByName("selectBlood").value
//         if (select == "A")
//             alert("yahhoooo type A diet is here")
//             // res.render("")

// }




app.listen(port, () => {
    console.log('App listening on port 3000!')
});