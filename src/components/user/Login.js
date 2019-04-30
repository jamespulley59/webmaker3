import React from 'react';

export default class Login extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-dark bg-primary fixed-top">
        <span class="navbar-brand mb-0 h1">Login</span>        
    </nav>
    <div class='container'></div>
<form>
    <div class='form-group'>
        <label for='username'>Username</label>
        <input placeholder='Username' class='form-control' type='text' id='username' name='username'/>           
    </div>
    <div class='form-group'>
        <label for='password'>Password</label>
        <input placeholder='Password' type='text' class='form-control' id='password' name='password'/>
    </div>
    <a class='btn btn-success btn-block' href='profile.html'>Login</a>
    <a class='btn btn-primary btn-block' href='register.html'>Register</a>
</form> 
        )
    }
}