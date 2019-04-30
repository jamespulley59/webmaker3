import React, {Component} from 'react';

export default class Profile extends Component {
    render() {
        return(
    <div>
    <nav className="navbar navbar-dark bg-primary fixed-top " href='../user/profile.html'>
        <span></span>
        <span className="navbar-brand mb-0 h1">Profile</span>
        <a href='profile.html'><i className='fas fa-check'></i></a>
    </nav>
    <div className='container'>
    <form>
        <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input placeholder='Username' className='form-control' type='text' id='username' name='username'/>
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input placeholder='Type Email' className='form-control' type='email' id='email' name='email'/>
        </div>
        <div className='form-group'>
            <label htmlFor='firstname'>First Name</label>
            <input placeholder='Type First Name' className='form-control' type='text' id='firstname' name='firstname'/>
        </div>
        <div className='form-group'>
            <label htmlFor="lastname">Last Name</label>
            <input placeholder='Last Name' className='form-control' type='text' id='lastname' name='lastname'/>
        </div>
        <a className='btn btn-success btn-block' href='../website/website-list.html'>Websites</a>
        <a className='btn btn-primary btn-block' href="login.html">Log Out</a>
    </form>
            
    <nav className='full-width navbar navbar-dark bg-primary fixed-bottom'>
        <a href="profile.html"><i className='float-right fas fa-user'></i></a>
    </nav>
    </div>
    </div>
        )
        }
    }