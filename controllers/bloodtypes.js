const BloodType = require('../models/bloodtype')

module.exports = function (app) {
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
        console.log(req.body.bloodTypes)
        const type = req.body.bloodTypes
        if (type === 'A') {
            // it is rendering json file
            // const dietA = require('./views/dietA.json')
            // res.end(JSON.stringify(dietA))
            res.render('typeA')
        } else if (type === 'B') {
            // res.end(JSON.stringify({ food: 'you should eat apples' }))
            res.render('typeB')

        } else if (type === 'AB') {
            // res.end(JSON.stringify({ food: 'you should eat meat' }))
            res.render('typeAB')

        } else {
            // res.end(JSON.stringify({ food: 'you should eat veggies' }))
            res.render('typeO')

        }

        // BloodType.create(req.body).then((bloodtype) => {

        //     // console.log(bloodtype);
        //     // console.log(req.body.bloodTypes)
        //     res.redirect('/blood/:type/diet');
        // }).catch((err) => {

        //     console.log("error message in post: " + err.message);
        // })

    });

    app.get('/getblood', (req, res) => {
        console.log('Get Blood!!!!')
        // console.log(req.query.type)

        // not reading type correctly
        // const type = document.getElementById('exampleFormControlSelect1')

        // console.log('type: ' + type)
        // if (type === 'A') {
        //     // res.render('typeA')
        //     res.json({ food: 'you should eat fish' })
        //     console.log("diet list for A")
        // } else if (type === 'B') {
        //     res.json({ food: 'you should eat apples' })
        //     console.log("diet list for B")
        // } else {
        //     res.json({ food: 'You should eat food!!!!!' })
        //     console.log("diet list for other")
        // }

    })

    // 
    // 
    app.get('/blood/:type/diet', (req, res) => {
        // showDiet()
    });

    // SHOW
    app.get('/blood/:type/diet/:id', (req, res) => {
        // res.render('home')
        console.log("working")
    });
}