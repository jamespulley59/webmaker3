const mongoose = require('mongoose');
const UserSchema = require('./User.schema');
const UserModel = mongoose.model('UserModel', UserSchema)

// crerate new user in mongoose
UserModel.createUser = (user) => {
    console.log(user);
    return UserModel.create(user);    
}

// find user by credentials
UserModel.findUserByCredentials = (username, password) => {
    return UserModel.findOne({username: username, password: password});
}

// find by username only
UserModel.findUserByUsername = (username) => {
    return UserModel.findOne({username: username});
}

//let mongoose find user
UserModel.findUserById = (uid) => {
    return UserModel.findById(uid);
}

//change user info
UserModel.updateUser = (user) => {
    return UserModel.updateOne({_id: user._id}, user);
}


module.exports = UserModel;
