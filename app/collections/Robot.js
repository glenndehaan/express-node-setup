const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RobotSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Robot', RobotSchema);
