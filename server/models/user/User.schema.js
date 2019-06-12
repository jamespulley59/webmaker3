const mongoose = require('mongoose');

// tells computer what a user is and how info is presented('string')
const UserSchema = mongoose.Schema(
   {
       username: String,
       password: String,
       firstName: {type: String, default: ""},
       lastName: {type: String, default: ""},
       email: {type: String, default: ""},
       dateCreated: {type: Date, default: Date.now},
       role: {type: String, enum: ['admin', 'regular'], default: 'regular'},
   }, 
// where to store data?
{collection: 'user'}    
);

module.exports = UserSchema
