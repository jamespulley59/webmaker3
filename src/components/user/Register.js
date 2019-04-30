import React, {Component} from 'react';

export default class Register extends Component {
    render() {
        return(
        <div>
            <nav className="navbar navbar-dark bg-primary fixed-top">
            <span></span>
            <span className="navbar-brand mb-0 h1">Register</span>
            <span></span>        
        </nav>
        <div className='container'></div>
        <form>
          
            <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input placeholder='Type Username Here' className='form-control' type='text' id='username' name='username'/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input placeholder='Type Password Here' className='form-control' type='text' id='password' name='password'/>
            </div>
            <div className='form-group'>
                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input placeholder='Confirm Your Password Here' className='form-control' type='text' id='password' name='password'/>
            </div>
            <a className='btn btn-success btn-block' href='../website/website-list.html'>Register</a>
            <a href="login.html" className='btn btn-primary btn-block'>Cancel</a>
        </form>
    
        <div>
            <nav className="navbar navbar-dark bg-primary fixed-bottom">             
                <a href='profile.html'><i className='fas fa-user'></i></a>
            </nav>
        </div> 
        </div>
        )
    }
}   