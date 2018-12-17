const mongoose = require('mongoose');

module.exports = mongoose.model('Story', {
    userName: String,
    story:String
})