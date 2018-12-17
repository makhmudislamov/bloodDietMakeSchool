const mongoose = require('mongoose');

module.exports = mongoose.model('Story', {
    title : String,
    userName : String,
    storyBody : String
})