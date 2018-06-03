# Competency Test

This is a competency test to create form for user to enter his,

 1. name
 2. age
 3. gender
 4. Country
And save the data on Backend.
The test is divided in two sections:
**Backend**
**Frontend**

# Backend

The code for backed is available in the server directory of the repository.

### Getting Started
Create a backend solution using nodejs, express and mongodb.
The codebase should be unit tested.
The data should be saved after successful validation only.

### Prerequisites
To successfully run the project node and mongo are required to be installed in the machine.
I've tested the setup on macOS High Sierra.
Jasmin is also required to be available in the PATH.

    brew install node
    brew install mongo
    npm install -g jasmine

### Installing
In order to install and run the server following commands need to be written on terminal.

	cd server
    npm install //install node dependencies
    npm start //start the server (wait for npm install to finish)
### Running the Tests
In a new terminal window write the following command to run the tests:

    cd server
    npm test
### Built With

 - [express](https://expressjs.com/)
 - [mongodb](https://www.mongodb.com/)
 - [jasmine](https://jasmine.github.io/)