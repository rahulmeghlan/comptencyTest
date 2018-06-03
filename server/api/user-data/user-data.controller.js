let mongoose = require('mongoose');

function Create(req, res, next) {
    let userDetails = req.body;
    let result = {result: 'success', details: userDetails};
    if (userDetails && !validateUserDetails(userDetails).error) {
        mongoose.model('userdata').create({
            name: userDetails.name,
            age: userDetails.age,
            sex: userDetails.sex,
            country: userDetails.country,
            date: new Date()
        }, (err, data) => {
            res.json(result);
        });
    } else {
        result = {result: 'error', details: validateUserDetails(userDetails).details};
        res.json(result);
    }
}

function success(req, res, next) {
    res.json({result: 'success'});
}

function validateUserDetails(details) {
    let result = {error: false, details: {}};
    if (!(details.name.length)) {
        result.error = true;
        result.details.name = 'Invalid Name';
    }
    if (!(details.sex.length)) {
        result.error = true;
        result.details.sex = 'Invalid Sex';
    }
    if (!(parseInt(details.age) > 0)) {
        result.error = true;
        result.details.age = 'Invalid Age';
    }
    if (!(details.country.length)) {
        result.error = true;
        result.details.country = 'Invalid Country';
    }
    return result;

}

module.exports = Create;
