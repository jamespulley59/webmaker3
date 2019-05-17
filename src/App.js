import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
// user pages
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Register from './components/user/Register';
// website pages
import WebsiteList from './components/website/WebsiteList';
import WebsiteNew from './components/website/WebsiteNew';
import WebsiteEdit from './components/website/WebsiteEdit';
//age pages
import PageList from './components/page/PageList';
import PageNew from './components/page/PageNew';
import PageEdit from './components/page/PageEdit';
//widget pages
import WidgetList from './components/widget/WidgetList';
import WidgetChooser from './components/widget/WidgetChooser';
import WidgetEdit from './components/widget/WidgetEdit';


class App extends Component {

state = {
  users: [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@gmail.com'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@whatever.com'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', email: 'charly@ulem.com'},
    {_id: '456', username: 'shiyu', password: 'shiyu', firstName: 'Shiyu', lastName: 'Wang', email: 'swang@ulem.org'}
  ],

  websites: [
    { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
    { _id: '234', name: 'Tweeter',  developerId: '456', description: 'Lorem' },
    { _id: '456', name: 'Gizmodo',   developerId: '456', description: 'Lorem' },
    { _id: '890', name: 'Go', developerId: '123', description: 'Lorem' },
    { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
    { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
    { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }    
  ],

  pages: [
    { _id: '321', name: 'Post 1', websiteId: '456', title: 'Lorem' },
    { _id: '432', name: 'Post 2', websiteId: '456', title: 'Lorem' },
    { _id: '543', name: 'Post 3', websiteId: '456', title: 'Lorem' }  
  ],  

  widgets: [
    { _id: '123', widgetType: 'HEADING', pageId: '321', size: 1, text: 'James Pulley, first website'},
    { _id: '234', widgetType: 'HEADING', pageId: '321', size: 2, text: 'My next wife'},
    { _id: '345', widgetType: 'IMAGE', pageId: '321', height: '10%', width: '40%', url:'https://images.unsplash.com/photo-1536416992256-1c91ce9ccdfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', alt: 'picture'},
    { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'My favorite song'},
    { _id: '678', widgetType: 'YOUTUBE', pageId: '321',height: '30%', width: '60%', url: 'https://www.youtube.com/embed/I7pWhXv4ZVE', alt: 'Outcast'},
  ]
}
  addUser = (user) => {
    const newUsers = this.state.users;
    newUsers.push(user);
    this.setState({
        users: newUsers
    });
  }
    userNameInUse = (username) => {
      for(let user of this.state.users) {
          if(username === user.username) {
              return true;
          }
      }

      return false;
    }
    updateUser = (newUser) => {
      const newUsers = this.state.users.map((user)=>{
          if(user._id === newUser._id) {
              if(user.username !== newUser.userName && 
                  this.userNameInUse(newUser.username)) {
                  alert('The username you selected is already in use.');
              } else {
                  user = newUser;
                  alert('Your user information has been updated');
              }
          }
          return user;
      });

      this.setState({
          users: newUsers
      })
    }

    addWeb = (newWeb) => {
      const newWebs = this.state.websites;
      newWebs.push(newWeb);
      this.setState({
          websites: newWebs
      });
  }

  deleteWeb =(wid) => {
      this.setState({
          websites: this.state.websites.filter(
              (website) => website._id !== wid
          )
      })
  }

  editWeb = (wid, name, description) => {
    this.setState({
        websites: this.state.websites.map(
            (website) => {
                if(wid === website._id){
                    website.name = name;
                    website.description =description
                }
                return website;
            }
        )
    })
}

addPage = newPage => {
  const newPages = this.state.pages;
  newPages.push(newPage);
  this.setState({
      pages: newPages
  });
}

editPage = newPage => {
  const newPages = this.state.pages.map(
      (page) => {
          if(page._id === newPage._id) {
              page = newPage
          }
          return page;
      }
  )
  this.setState({
      pages: newPages
  })
}

deletePage = pid => {
  const newPages = this.state.pages.filter(
      (page) => (
          page._id !== pid
      )
  )
  this.setState({
      pages: newPages
  })
}

editWidget = newWidget => {  
  const newWidgets = this.state.widgets.map(
      (widget) => {
          if(widget._id === newWidget._id) {
              widget = newWidget
          }
          return widget;
      }
  )
  this.setState({
      widgets: newWidgets
  })
}

addWidget = newWidget => {
  const newWidgets = this.state.widgets;
  newWidgets.push(newWidget);
  this.setState({
      widgets: newWidgets
  });
}

deleteWidget = (wgid) => {
  const newWidgets = this.state.widgets.filter(
      (widget) => (
          widget._id !== wgid
      )
  )
  this.setState({
      widgets: newWidgets
  })
}

render() {
  return (
    <Router>
      <Switch>
        {/* user pages */}
        <Route exact path='/' component = {Login} />
        <Route exact path='/login' component = {Login} />
        <Route exact path='/register' component = {Register} />
        <Route exact path='/user/:uid' component = {Profile} />
        {/* website pages */}
        <Route exact path='/user/:uid/website' component = {WebsiteList}  />
        <Route exact path='/user/:uid/website/new' component = {WebsiteNew}  />
        <Route exact path='/user/:uid/website/:wid' component = {WebsiteEdit}  />
        {/* page pages */}
        <Route exact path='/user/:uid/website/:wid/page' render={ props => (<PageList {...props} pages={this.state.pages} />)} />
        <Route exact path='/user/:uid/website/:wid/page/new' render={ props => (<PageNew {...props} pages={this.state.pages} addPage={this.addPage} />)} />
        <Route exact path='/user/:uid/website/:wid/page/:pid' render={ props => (<PageEdit {...props} pages={this.state.pages} editPage={this.editPage} deletePage={this.deletePage} />)} />
        {/* widget pages */}
        <Route exact path='/user/:uid/website/:wid/page/:pid/widget' render={ props=>(<WidgetList {...props} widgets={this.state.widgets} />)} />
        <Route exact path='/user/:uid/website/:wid/page/:pid/widget/new' render={props=>(<WidgetChooser {...props} addWidget={this.addWidget} />)} />
        <Route exact path='/user/:uid/website/:wid/page/:pid/widget/:wgid' render={ props=>(<WidgetEdit {...props} widgets={this.state.widgets} editWidget={this.editWidget} deleteWidget={this.deleteWidget} />)} /> 
    </Switch>
</Router>
        );
    }
}
export default App;

     

