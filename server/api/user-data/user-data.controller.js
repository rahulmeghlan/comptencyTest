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
    if (!details.name || !(details.name && details.name.length)) {
        result.error = true;
        result.details.reason = 'Invalid Name';
    }
    if (!details.sex || !(details.sex && details.sex.length)) {
        result.error = true;
        result.details.reason = 'Invalid Sex';
    }
    if (!details.age || !(details.age && parseInt(details.age) > 0)) {
        result.error = true;
        result.details.reason = 'Invalid Age';
    }
    if (!details.country && !(details.country && details.country.length)) {
        result.error = true;
        result.details.reason = 'Invalid Country';
    }
    return result;

}

module.exports.Create = Create;
module.exports.ValidateUsers = validateUserDetails;
