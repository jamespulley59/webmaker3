// for local
var connectionString = 'mongodb://127.0.0.1:27017/webmaker'; 

// check if running remotely
if(process.env.MLAB_USERNAME_WEBDEV) { 
    var username = process.env.MLAB_USERNAME_WEBDEV; 
// get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = `mongodb+srv://${username}:${password}@cluster0-54zmk.mongodb.net/test?retryWrites=true&w=majority`
// use yours
  }
// use mongoose to connect to database
  var mongoose = require("mongoose");
  var db = mongoose.connect(
      connectionString,
      { useNewUrlParser: true }
  );
  
// exports data to other files  
  module.exports = db;
  