import React from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Register from './components/user/Register';
import WebsiteEdit from './components/website/WebsiteEdit';
import WebsiteList from './components/website/WebsiteList';
import WebsiteNew from './components/website/WebsiteNew';
import PageEdit from './components/page/PageEdit';
import PageList from './components/page/PageList';
import PageNew from './components/page/PageNew';


function App() { 

  return(
    <Router className="app">
      <Route exact path= "/" component= {Login} />
      <Route exact path= "/login" component= {Login} />    
      <Route exact path= "/user/:uid" component= {Profile} />
      <Route exact path= "/register" component= {Register} />
      <Route exact path= "/user/:uid/website/:wid" component= {WebsiteEdit} />
      <Route exact path= "/user/:uid/website" component= {WebsiteList} />
      <Route exact path= "/user/:uid/website/new" component= {WebsiteNew} />
      <Route exact path= "/user/:uid/website/:wid/page/:pid" component= {PageEdit} />
      <Route exact path= "/user/:uid/website/:wid/page" component= {PageList} />
      <Route exact path= "/user/:uid/website/:wid/page/new" component= {PageNew} />



      </Router>
  )  
}
export default App;
