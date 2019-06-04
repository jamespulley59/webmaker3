module.exports = function(app) {

const userModel = require('../models/user/User.model');

// name and password match? ok
    app.get('/api/user', async (req, res)=> {
        const username = req.query['username'];
        const password = req.query['password'];
        let user;
            if(username && password){
            user = await userModel.findUserByCredentials(username, password);  
    }       else if (username) {
//create your own function name. findUserByUsername could be anything, like findUsername
            user = await userModel.findUserByUsername(username)
    }
        res.json(user);
    });

// retain new user info
     app.post('/api/user', async (req, res) => {
        const user = req.body;
        const data = await userModel.createUser(user);

        res.json(data);
    });

// Find user by _id
app.get('/api/user/:uid', async (req, res) => {
    const uid = req.params['uid'];
    let user;
    user = await userModel.findUserById(uid);
    res.json(user);
})

// change user info
app.put('/api/user', async (req, res) => {
    const newUser = req.body;
    const data = await userModel.updateUser(newUser);
    res.json(data);
  });
};   

