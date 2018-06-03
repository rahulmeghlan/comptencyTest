
# Competency Test

This is a competency test to create form for user to enter his,

 - name
 - age
 - gender
 - Country
And save the data on Backend.

### The test is divided in two sections:
 **[Backend](https://github.com/rahulmeghlan/comptencyTest#backend)**
 **[Frontend](https://github.com/rahulmeghlan/comptencyTest#frontend)**


## Backend

The code for backend is available in the server directory of the repository.

### Requirement
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

 1. [express](https://expressjs.com/)
 2. [mongodb](https://www.mongodb.com/)
 3. [jasmine](https://jasmine.github.io/)
## FrontEnd

The code for frontend is available in the client directory of the repository.

### Requirement
Create Frontend with a form having four fields:
 1. Name
 2. Gender
 3. Age
 4. Country


### Prerequisites
To successfully run the project node and angular-cli are required to be installed in the machine.
I've tested the setup on macOS High Sierra.

    brew install node
    npm install -g @angular/cli

### Installing
In order to install and run the client following commands need to be written on terminal.



    cd client
    npm install //install node dependencies
    npm start //start the server (wait for npm install to finish)

### Built With  [Angular](https://angular.io/)
