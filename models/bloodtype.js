const mongoose = require('mongoose');

module.exports = mongoose.model('BloodType', {
    fullName: String,
    weight: String,
    height: String,
    bloodTypes: String
});