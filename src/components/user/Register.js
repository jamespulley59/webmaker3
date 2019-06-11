import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Register extends Component {
  //what is needed to register
  state = {
    username: "",
    password: "",
    password2: "",
    //if too short/don't match
    showUsernameAlert: false,
    showPasswordAlert: false,
    showUsernameLengthAlert: false,
    showPasswordLengthAlert: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      showUsernameAlert: false,
      showPasswordAlert: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password, password2 } = this.state;
    
    this.register(username, password, password2);
  };

  async register(username, password, password2) {
// username minimum length
    if(username.length < 5) {
      this.setState({
        showUsernameLengthAlert: true
      })
      return;
    }
// password minimum length
if(password.length < 5) {
  this.setState({
    showPasswordLengthAlert: true
  })
  return;
}
// if passwords don't match
    if (password !== password2) {
        this.setState({
          showPasswordAlert: true
        })
      return;
    }
// see if username is available
    const res = await axios.get(`/api/user?username=${username}`);
    if (res.data) {
      
      this.setState({
        showUsernameAlert: true
      })
    
      return;
    } else {
      const newUser = {
        username,
        password,
        email: "",
        firstName: "",
        lastName: ""
      };
      
      const res2 = await axios.post("/api/register", newUser);
      this.props.history.push(`/user/${res2.data._id}`);
    }
  }

  render() {
    const { username, password, password2 } = this.state;
    return (
      <div className="container">      
        <nav className="navbar navbar-dark bg-primary fixed-top"> 
        <span></span>        
          <span className="navbar-brand mb-0 h1">Register
          </span>
          <span></span>
            {this.state.showPasswordAlert && (
              <div className='alert alert-danger'>
                The passwords do not match. Please re-enter
              </div>)}
            {this.state.showUsernameLengthAlert && (
              <div className='alert alert-danger'>
               The Username must be at least 6 characters long.
              </div>)} 
            {this.state.showPasswordLengthAlert && (
              <div className='alert alert-danger'>
                The Password must be at least 6 characters long.
              </div>)}       
        </nav>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              placeholder="Type Username Here"
              id="username"
              name="username"
              type="text"
              className="form-control"
              value={username}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Type Password Here"
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              placeholder="Confirm Your Password Here"
              className="form-control"
              type="password"
              id="password2"
              name="password2"
              value={password2}
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-primary btn-block">Register</button>
          <Link className="btn btn-danger btn-block" to={`/login`}>
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}
