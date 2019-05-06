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
import WidgetEdit from './components/widget/WidgetHeading';
// import WidgetImage from './components/widget/WidgetImage';
// import WidgetHeading from './components/widget/WidgetHeading';

function App() { 

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
        <Route exact path= "/user/:uid/website/:wid/page/:pid/widget/:wgid" component={WidgetImage} />       
        {/* <Route exact path= "/user/:uid/website/:wid/page/:pid/widget/:wgid" component={WidgetYoutube} />         */}
        {/* <Route exact path= "/user/:uid/website/:wid/page/:pid/widget/:wgid" component={WidgetHeading} />  */}
      </Switch>
    </Router>
  )  
}
export default App;