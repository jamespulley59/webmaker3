import React, {Component} from 'react';

export default class Login extends Component {
    render() {
        return(
<div>      
    <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <span className="navbar-brand mb-0 h1">Login</span>        
        </nav>
    </div>
<form>
    <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input placeholder='Type Username Here...' className='form-control' type='text' id='username' name='username' />           
    </div>
    <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input placeholder='Type Password Here...' type='text' className='form-control' id='password' name='password' />
    </div>
        <a className='btn btn-success btn-block' href='profile.html'>Login</a>
        <a className='btn btn-primary btn-block' href='register.html'>Register</a>
</form>
</div>
        )
    }
}