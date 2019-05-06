import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                <input placeholder='Type Username Here' className='form-control' type='text' id='username' name='username' />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input placeholder='Type Password Here' className='form-control' type='password' id='password' name='password' />
            </div>
            <div className='form-group'>
                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input placeholder='Confirm Your Password Here' className='form-control' type='password' id='password' name='password' />
            </div>
            <Link className='btn btn-success btn-block' to='/user/123'>Register</Link>
            <Link to="/login" className='btn btn-danger btn-block'>Cancel</Link>
        </form>
    
        <div>
            <nav className="navbar navbar-dark bg-primary fixed-bottom">             
                <Link to='/user/:uid'><i className='fas fa-user'></i></Link>
            </nav>
        </div> 
        </div>
        )
    }
}   