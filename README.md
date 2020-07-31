# CSE Project Archive

This project is based on **Nodejs** and **NoSQL**. For Backend: **Express**, Frontend: **EJS** and Database: **MongoDB** are beign used.

## Getting started

To get the Node server running locally:

- Clone this repo
- ```npm install``` to install all required dependencies
- Install MongoDB Community Edition [[instructions](https://docs.mongodb.com/manual/installation/#tutorials)]
- Create ```.env``` file in the project directory and add the credential for online mongodb server as ```MONGO_CREDENTIAL=username:password``` and define the server url in ```app.js``` file on ```mongoose.connect```. For local database use the following code in ```app.js```

    ```javascript
    mongoose.connect('mongodb://localhost/cseprojects', {
       useMongoClient: true
     });```

- ```npm install -g nodemon``` for installing nodemon package globally.
- Finally run ```nodemon``` to start the server
