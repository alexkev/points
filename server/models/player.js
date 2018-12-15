var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Number, required: true},
    name: {type: String},
    points: {type: Array}
});

module.exports = mongoose.model('Player', schema);