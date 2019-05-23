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
        <Route exact path='/user/:uid/website/:wid/page' component = {PageList} />
        <Route exact path='/user/:uid/website/:wid/page/new'  component = {PageNew} />
        <Route exact path='/user/:uid/website/:wid/page/:pid' component = {PageEdit} />
        {/* widget pages */}
        <Route exact path='/user/:uid/website/:wid/page/:pid/widget' component = {WidgetList} /> 
        <Route exact path='/user/:uid/website/:wid/page/:pid/widget/new' component = {WidgetChooser} /> 
        <Route exact path='/user/:uid/website/:wid/page/:pid/widget/:wgid' component = {WidgetEdit} /> 
    </Switch>
</Router>
        );
    }
}
export default App;

     

