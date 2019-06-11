import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Axios from 'axios';

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

//check if user is now logged in
  loggedIn = async () => {
    const res = await Axios.get('/api/loggedIn');
 
    return res.data !== 0;
  };
 

render() {

  return (

    <Router>

      <Switch>
        {/* user pages */}
        <Route exact path='/' component = {Login} />
        <Route exact path='/login' component = {Login} />
        <Route exact path='/register' component = {Register} />
        <Route exact path="/user/:uid" render={props =>   <Profile {...props} loggedIn={this.loggedIn} />}/>
        {/* website pages */}
        <Route exact path='/user/:uid/website'  render={props =>   <WebsiteList {...props} loggedIn={this.loggedIn} />}/>
        <Route exact path='/user/:uid/website/new'  render={props =>   <WebsiteNew {...props} loggedIn={this.loggedIn} />}/>
        <Route exact path='/user/:uid/website/:wid'  render={props =>   <WebsiteEdit {...props} loggedIn={this.loggedIn} />}/>
        {/* page pages */}
        <Route exact path='/user/:uid/website/:wid/page'  render={props =>   <PageList {...props} loggedIn={this.loggedIn} />}/>
        <Route exact path='/user/:uid/website/:wid/page/new'   render={props =>   <PageNew {...props} loggedIn={this.loggedIn} />}/>
        <Route exact path='/user/:uid/website/:wid/page/:pid'  render={props =>   <PageEdit {...props} loggedIn={this.loggedIn} />}/>
        {/* widget pages */}
        <Route exact path='/user/:uid/website/:wid/page/:pid/widget'  render={props =>   <WidgetList {...props} loggedIn={this.loggedIn} />}/> 
        <Route exact path='/user/:uid/website/:wid/page/:pid/widget/new'  render={props =>   <WidgetChooser {...props} loggedIn={this.loggedIn} />}/> 
        <Route exact path='/user/:uid/website/:wid/page/:pid/widget/:wgid'  render={props =>   <WidgetEdit {...props} loggedIn={this.loggedIn} />}/> 
    </Switch>
</Router>
        );
    }
}
export default App;

     

