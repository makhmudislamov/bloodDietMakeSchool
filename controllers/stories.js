// const Story = require('../models/story')

module.exports = function (app) {
    // INDEX
    app.get('/stories', (req, res) => {
        Story.find()
            .then(story => {
                res.render('./stories/stories-index');
            })
            .catch(err => {
                console.log(err);
            })
    })

    // NEW
    app.get('/stories/new', (req, res) => {
        res.render('./stories/stories-new', {});
    })


    // CREATE
    app.post('/stories', (req, res) => {
        Story.create(req.body).then((charity) => {
            console.log(charity);
            res.redirect(`/stories/${charity._id}`);
        }).catch((err) => {
            console.log(err.message);
        })
    })

    // SHOW
    // app.get('/orgs/:id', (req, res) => {
    //     Charity.findById(req.params.id).then((charity) => {

    //         res.render('orgs-show', { charity: charity })
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // })

    app.get('/orgs/:id', (req, res) => {
        // find review
        Charity.findById(req.params.id).then(charity => {
            // fetch its comments
            Comment.find({ charityId: req.params.id }).then(comments => {
                // respond with the template with both values
                res.render('orgs-show', { charity: charity, comments: comments })
            })
        }).catch((err) => {
            // catch errors
            console.log(err.message)
        });
    });

    // EDIT
    app.get('/orgs/:id/edit', (req, res) => {
        Charity.findById(req.params.id, function (err, charity) {
            res.render('orgs-edit', { charity: charity });
        })
    })

    // UPDATE
    app.put('/orgs/:id', (req, res) => {
        Charity.findByIdAndUpdate(req.params.id, req.body)
            .then(charity => {
                res.redirect(`/orgs/${charity._id}`)
            })
            .catch(err => {
                console.log(err.message)
            })
    })

    // DELETE
    app.delete('/orgs/:id', function (req, res) {
        console.log("DELETE the Organization")
        Charity.findByIdAndRemove(req.params.id).then((charity) => {
            res.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        })
    })
}