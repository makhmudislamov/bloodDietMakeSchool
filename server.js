// declaring express and installing
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const stories = require('./controllers/stories')
const bloodTypes = require('./controllers/bloodtypes')

// mongoose
const mongoose = require('mongoose');
// adding exp-hbs
var exphbs = require('express-handlebars');
// process.env.PORT >> remote port and 3000 >> local
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'))
// using handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// connecting to db via mongoose
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/dietPlatform', {useNewUrlParser: true});


app.listen(port, () => {
    console.log('App listening on port 3000!')
});

stories(app);
bloodTypes(app);

module.exports = app;