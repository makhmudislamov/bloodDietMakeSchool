const Story = require('../models/story')

module.exports = function (app) {
    // INDEX
    app.get('/stories', (req, res) => {
        Story.find()
            .then(story => {
                res.render('stories-index', {story: story});
            })
            .catch(err => {
                console.log(err);
            })
    })

    // NEW
    app.get('/stories/new', (req, res) => {
        res.render('stories-new', {});
    })
    
    // CREATE
    app.post('/stories', (req, res) => {
        Story.create(req.body).then((story) => {
            console.log(story);
            res.redirect(`/stories/${story._id}`);
        }).catch((err) => {
            console.log(err.message);
        })
    })

    // SHOW
    app.get('/stories/:id', (req, res) => {
        Story.findById(req.params.id).then((story) => {

            res.render('stories-show', { story: story })
        }).catch((err) => {
            console.log(err.message);
        })
    })

    // EDIT
    app.get('/stories/:id/edit', (req, res) => {
        Story.findById(req.params.id, function (err, story) {
            res.render('stories-edit', { story: story });
        })
    })

    // UPDATE
    app.put('/stories/:id', (req, res) => {
        Story.findByIdAndUpdate(req.params.id, req.body)
            .then(story => {
                res.redirect(`/stories/${story._id}`)
            })
            .catch(err => {
                console.log(err.message)
            })
    })

    // DELETE
    app.delete('/stories/:id', function (req, res) {
        console.log("DELETE the Organization")
        Story.findByIdAndRemove(req.params.id).then((story) => {
            res.redirect('/stories');
        }).catch((err) => {
            console.log(err.message);
        })
    })
}