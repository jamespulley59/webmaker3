import React from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Register from './components/user/Register';
import WebsiteEdit from './components/website/WebsiteEdit';

function App() {  
    return(
      <Router>
        <Route exact path= "/" component= {Login}></Route>    
        <Route exact path= "/user/:uid" component= {Profile}></Route>
        <Route exact path= "/register" component= {Register}></Route>
        <Route exact path= "//user/:uid/website/:wid" component= {WebsiteEdit}></Route>
      </Router>
    )  
  }
export default App;
