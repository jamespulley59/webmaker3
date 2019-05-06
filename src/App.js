import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Register from './components/user/Register';
import WebsiteList from './components/website/WebsiteList';
import WebsiteNew from './components/website/WebsiteNew';
import WebsiteEdit from './components/website/WebsiteEdit';
import PageList from './components/page/PageList';
import PageNew from './components/page/PageNew';
import PageEdit from './components/page/PageEdit';
import WidgetList from './components/widget/WidgetList';
import WidgetChooser from './components/widget/WidgetChooser';

function App() { 

  this .users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
    {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
  ];

  this.websites = [
    { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
    { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
    { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }    
  ];

  this.page = [
    { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }  
  ];

  this.widgets = [
    { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
    { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
    { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.gettyimages.ie/gi-resources/images/      Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"},
    { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
    { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
  ]
  
  

  return(
    <Router className="app">
      <Switch>
        <Route exact path= "/" component={Login} />
        <Route exact path= "/login" component={Login} />
        <Route exact path= "/register" component={Register} />    
        <Route exact path= "/user/:uid" component={Profile} />        
        <Route exact path= "/user/:uid/website" component={WebsiteList} />
        <Route exact path= "/user/:uid/website/new" component={WebsiteNew} />
        <Route exact path= "/user/:uid/website/:wid" component={WebsiteEdit} />
        <Route exact path= "/user/:uid/website/:wid/page" component={PageList} />
        <Route exact path= "/user/:uid/website/:wid/page/new" component={PageNew} />
        <Route exact path= "/user/:uid/website/:wid/page/:pid" component={PageEdit} />
        <Route exact path= "/user/:uid/website/:wid/page/:pid/widget" component={WidgetList} />
        <Route exact path= "/user/:uid/website/:wid/page/:pid/widget/new" component={WidgetChooser} />        
      </Switch>
    </Router>
  );  
}
export default App;