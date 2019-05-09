import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class WebsiteNew extends Component {
  render() {
    return (
<div>
<nav className="navbar navbar-dark bg-primary fixed-top row nav-height">
    <div className='col-lg-4 d-none d-sm-block'>
        <Link to='/user/:uid/website' className='color-white'>
            <i className="fas fa-chevron-left"></i>
        </Link>            
        <Link className='color-white padding-left' to='/user/:uid/website'>
            <h5 className='display-inline'>Websites</h5>
        </Link>
            <a className='color-white float-right' to='#'>
                <i class='fas fa-plus'></i>
            </a>
    </div>
    <div className='col-sm-8'>                     
        <Link className="color-white d-sm-none" to='/user/:uid/website'>        
        </Link>            
        <Link className='float-right pt-2' to='/user/:uid/website'>
            <i className="fas fa-chevron-left"></i>
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
