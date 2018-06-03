const request = require('request');
const userController = require('./user-data.controller');


const endPoint = 'http://localhost:3000/create';

describe('Create UserData', () => {

    it('should return 200 response code', function (done) {
        request.post(endPoint, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    describe('Validate User', () => {
        it('should invalidate user if no name', function () {
            expect(userController.ValidateUsers({
                age: 30,
                sex: 'male',
                country: 'India'
            }).details.reason).toEqual('Invalid Name');
        });

        it('should invalidate user if empty name', function () {
            expect(userController.ValidateUsers({
                name: '',
                age: 30,
                sex: 'male',
                country: 'India'
            }).details.reason).toEqual('Invalid Name');
        });

        it('should invalidate user if no age', function () {
            expect(userController.ValidateUsers({
                name: 'rahul',
                sex: 'male',
                country: 'India'
            }).details.reason).toEqual('Invalid Age');
        });

        it('should invalidate user if empty age', function () {
            expect(userController.ValidateUsers({
                name: 'rahul',
                age: '',
                sex: 'male',
                country: 'India'
            }).details.reason).toEqual('Invalid Age');
        });

        it('should invalidate user if no sex', function () {
            expect(userController.ValidateUsers({
                name: 'rahul',
                age: 30,
                country: 'India'
            }).details.reason).toEqual('Invalid Sex');
        });

        it('should invalidate user if empty sex', function () {
            expect(userController.ValidateUsers({
                name: 'rahul',
                age: 30,
                sex: '',
                country: 'India'
            }).details.reason).toEqual('Invalid Sex');
        });

        it('should invalidate user if empty country', function () {
            expect(userController.ValidateUsers({
                name: 'rahul',
                age: 30,
                sex: 'male',
                country: ''
            }).details.reason).toEqual('Invalid Country');
        });

        it('should invalidate user if no country', function () {
            expect(userController.ValidateUsers({
                name: 'rahul',
                age: 30,
                sex: 'male'
            }).details.reason).toEqual('Invalid Country');
        });
    });
});
