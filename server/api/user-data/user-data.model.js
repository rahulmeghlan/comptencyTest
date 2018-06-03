let mongoose = require('mongoose');
let userDataModel = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    country: String,
    date: Date
});
mongoose.model('userdata', userDataModel);
