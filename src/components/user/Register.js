import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import uuid from "uuid";

export default class Register extends Component {

    state = {
        username: "",
        password: "",
        password2: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, password, password2} = this.state;
        this.register(username, password, password2) ;
    }

    register(username, password, password2) {
        // if passwords don't match
        if(password !== password2) {
            alert('The passwords do not match. Please enter again');
            return;
        }
        // if username is already taken
        for(let user of this.props.users) {
            if(user.username === username){
                alert('That username is taken. Please a new username.')
                return;
            }
        }
        //  adding new user into data-base/array
        const newUser = {
            _id: uuid(),
            username,
            password,
            email: "",
            firstName: "",
            lastName: ""
        };        
        this.props.addUser(newUser);    
    // navigate to profile page
    this.props.history.push(`/user/${newUser._id}`);
    }

    render() { 
        const {username, password, password2} = this.state
        return (
        <div className='container'>
            {/* <h1>Register</h1> */}
            <nav className="navbar navbar-dark bg-primary fixed-top ">
                <span></span>
                <span className='navbar-brand mb-0 h1'>Register</span>
                <span></span>   
            </nav>   
        <form onSubmit={this.onSubmit}>          
            <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input 
                placeholder='Type Username Here' 
                id='username'
                name='username'
                type='text' 
                className='form-control' 
                value = {username}               
                onChange={this.onChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input 
                placeholder='Type Password Here' 
                className='form-control' 
                type='password' 
                id='password' 
                name='password'
                value = {password} 
                onChange={this.onChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='password2'>Confirm Password</label>
                <input 
                placeholder='Confirm Your Password Here' 
                className='form-control' 
                type='password'
                id='password2' 
                name='password2'
                value = {password2} 
                onChange={this.onChange} />
            </div>
            <button className='btn btn-primary btn-block'>Register</button>
            <Link  className='btn btn-danger btn-block' to="/login">Cancel</Link>
        </form>   
        </div>
        );
    }
}