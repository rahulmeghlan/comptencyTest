let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

/* GET users listing. */
router.post('/create', function (req, res, next) {
    let personDetails = req.body;
    console.log(typeof personDetails.age);
    let result = {result: 'success', details: personDetails};
    if (personDetails && !validatePersonDetails(personDetails).error) {
        mongoose.model('PersonDetails').create({
            name: personDetails.name,
            age: personDetails.age,
            sex: personDetails.sex,
            country: personDetails.country,
        }, (err, data) => {
            console.log(data);
            res.json(result);
        });
    } else {
        result = {result: 'error', details: validatePersonDetails(personDetails).details}
        res.json(result);
    }
});

router.get('/success', function (req, res, next) {
    res.json({result: 'success'});
});

function validatePersonDetails(details) {
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

module.exports = router;
