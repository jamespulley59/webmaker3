import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {

    state = {
        username: "",
        password: "",
        showAlert: false
    }

    onChange = e => {
        this.setState ({
            [e.target.name]: e.target.value,
            showAlert: false
        })
    }       

    onSubmit = e => {
        e.preventDefault();
        const {username, password} = this.state
        const user = {
            username, password
            
        }
        this.login(user);
    }

    login = async user => {        
        // this confirms user and password, or not
    try {
        const res = await axios.post('api/login', user);
        this.props.history.push(`/user/${res.data._id}`);
    } catch {
        this.setState({
            showAlert: true
        })
    }
};         

    render() {

        return(
                  
<div className='container'>

    <nav id="login-nav" className='navbar navbar-dark bg-primary fixed-top'>
            
            <span className='navbar-brand mb-0 h1'>Login</span>
                {this.state.showAlert? 
                    (<div className='alert alert-danger'>Your username and password do not match our records, please try again.   Or if you are a new user, go to the Registration page    
                    </div>): null
                }  
    </nav>

    <form onSubmit={this.onSubmit}>
        <div className='form-group'>
            <label htmlFor='username'>Username</label>
                <input
                    placeholder='Type Username Here...' 
                    className='form-control' 
                    type='text' 
                    id='username' 
                    name='username' 
                    value={this.state.username}
                    onChange = {this.onChange} />      
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
                 <input placeholder='Type Password Here...' 
                        type='password' 
                        className='form-control' 
                        id='password' name='password'
                        value={this.state.password} 
                        onChange = {this.onChange} />
        </div>
            <button className='btn btn-success btn-block'>Login</button>
            <Link className='btn btn-primary btn-block' to= {`/register`}>Register</Link>
    </form>
    
</div>
        );
    }
}