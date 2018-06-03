let mongoose = require('mongoose');
let personDetailsSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    country: String
});
mongoose.model('PersonDetails', personDetailsSchema);
