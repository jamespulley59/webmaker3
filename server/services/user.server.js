module.exports = function(app) {
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../models/user/user.model');

//saves data
passport.serializeUser(serializeUser);

function serializeUser(user, done) {
   done(null, user);
 }

 //retrieves data
passport.deserializeUser(deserializeUser);

function deserializeUser(user, done) {
   userModel.findUserById(user._id).then(
     function(user) {
       done(null, user);
     },
     function(err) {
        done(err, null);
      }
    );
  }
// login with local strategy 
  passport.use(new LocalStrategy(localStrategy));

  async function localStrategy(username, password, done) {
     const data = await userModel.findUserByCredentials(username, password);
     if (data) {
       return done(null, data);
     } else {
       return done(null, false);
     }
   }
  
//user login
app.post('/api/login', passport.authenticate('local'), (req, res) => {
    const user = req.user;
    res.json(user);
  });

  // is user logged in?
  app.get("/api/loggedIn", (req, res) => {
    res.send(req.isAuthenticated()? req.user: "0")
  })
 
 // to logOut
 app.post("/api/logout", (req, res) => {
  req.logOut();
  res.send(200);
})

// register
app.post("/api/register", async (req, res) => {
  const user = req.body;
  const data = await userModel.createUser(user);
  req.login(data, () => {
    res.json(data);
  })
})

 
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