import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class WebsiteNew extends Component {
  render() {
    return (
<div>
<nav className="navbar navbar-dark bg-primary fixed-top row">
    <div className='col-lg-4 d-none d-lg-block'>
        <Link to='/user/:uid'>
            <i className="fas fa-chevron-left"></i>
        </Link>
            <span className="navbar-brand mb-0 h1">New Websites</span>
        <Link className='float-right pt-2' to='/user/:uid/website/new'>
        <i className="fas fa-plus"></i>
        </Link>
    </div>
    <div className='col-lg-8'>                     
        <Link className="d-lg-none" to='/user/:uid'>
        <span className="navbar-brand mb-0 h1">New Websites</span>
        </Link>            
        <Link className='float-right pt-2' to='/user/:uid/website'>
        <i className="fas fa-check"></i>
        </Link>   
    </div>             
</nav>
<section className='row'>
    <div className='col-lg-4 d-none d-lg-block'>    
    <div className='container'>
    <ul className='list-group'>
        <li className='list-group-item'>
            <Link to='/user/:uid/website/:wid/pag'>Address Book App</Link>
            <Link className='float-right' to='/user/:uid/website/:wid'>
                <i className="fas fa-cog"></i>
            </Link>
        </li>        
        <li className='list-group-item'>
            <Link to='/user/:uid/website/:wid/page'>Blogger</Link>
            <Link className='float-right' to='/user/:uid/website/:wid'>
                <i className="fas fa-cog"></i>
            </Link>
        </li>
        <li className='list-group-item'>
            <Link to='/user/:uid/website/:wid/page'>Blogging App</Link>
            <Link className='float-right' to='/user/:uid/website/:wid'>
                <i className="fas fa-cog"></i>
            </Link>
        </li>
        <li className='list-group-item'>
            <Link to='/user/:uid/website/:wid/page'>Script Test App</Link>
            <Link className='float-right' to='/user/:uid/website/:wid'>
                <i className="fas fa-cog"></i>
            </Link>
        </li>  
    </ul> 
    </div>            
    </div>
    <div className='col-lg-8'>
        <div className='container'>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                        <input placeholder='Enter Website Name Here...' className='form-control' type="text" id='name' name='name' />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description</label>
                    <textarea rows='5' placeholder='Enter Website Description Here...' className='form-control' id='description' name='description'></textarea>
                </div>
            </form>
        </div>
    </div>
</section>
    <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <div className='full-width'>             
                <Link to='../user/profile.html'>
                    <i className=' float-right fas fa-user'></i>
                </Link>            
        </div>
    </nav> 
</div>
    )
  }
}
