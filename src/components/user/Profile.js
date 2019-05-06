import React, {Component} from 'react';
import {Link} from react-router-dom;
export default class Profile extends Component {
    render() {
        return(
    <div>
    <nav className="navbar navbar-dark bg-primary fixed-top " to='/user/:uid'>
        <span></span>
        <span className="navbar-brand mb-0 h1">Profile</span>
        <Link to='/user/:uid'><i className='fas fa-check'></i></Link>
    </nav>
    <div className='container'>
    <form>
        <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input placeholder='Username' className='form-control' type='text' id='username' name='username' />
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input placeholder='Type Email' className='form-control' type='email' id='email' name='email' />
        </div>
        <div className='form-group'>
            <label htmlFor='firstname'>First Name</label>
            <input placeholder='Type First Name' className='form-control' type='text' id='firstname' name='firstname' />
        </div>
        <div className='form-group'>
            <label htmlFor="lastname">Last Name</label>
            <input placeholder='Last Name' className='form-control' type='text' id='lastname' name='lastname' />
        </div>
        <Link className='btn btn-success btn-block' to='/user/123/website'>Websites</Link>
        <Link className='btn btn-primary btn-block' to="/login">Log Out</Link>
    </form>
            
    <nav className='full-width navbar navbar-dark bg-primary fixed-bottom'>
        <a href="/user/:uid"><i className='float-right fas fa-user'></i></a>
    </nav>
    </div>
    </div>
        )
    }
}