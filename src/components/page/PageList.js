import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class PageList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link to='/user/:uid/website'>
                <i className="fas fa-chevron-left"></i>
            </Link>
                <span className="navbar-brand mb-0 h1">Page List</span>
            <Link to='/user/:uid/website/:wid/page/new'>
                <i className="fas fa-plus"></i>
            </Link>
        </nav>
    <section className='container'>
        <ul className='list-group'>
            <li className='list-group-item'>
                <Link to='/user/:uid/website/:wid/page'>Blog Post</Link>
                <Link className='float-right' to='/user/:uid/website/:wid/page/:pid'>
                    <i className="fas fa-cog"></i>
                </Link>
            </li>        
            <li className='list-group-item'>
                <Link to='/user/:uid/website/:wid/pagel'>Blog</Link>
                <Link className='float-right' to='/user/:uid/website/:wid/page/:pid'>
                    <i className="fas fa-cog"></i>
                </Link>
            </li>
            <li className='list-group-item'>
                <Link to='/user/:uid/website/:wid/page'>Home</Link>
                <Link className='float-right' to='/user/:uid/website/:wid/page/:pid'>
                    <i className="fas fa-cog"></i>
                </Link>
            </li>
            <li className='list-group-item'>
                <Link to='/user/:uid/website/:wid/page'>About Us</Link>
                <Link className='float-right' to='/user/:uid/website/:wid/page/:pid'>
                    <i className="fas fa-cog"></i>
                </Link>
            </li> 
            <li className='list-group-item'>
                <Link to='/user/:uid/website/:wid/page'>Contact Us</Link>
                <Link className='float-right' to='/user/:uid/website/:wid/page/:pid'>
                    <i className="fas fa-cog"></i>
                </Link>
            </li> 
        </ul>
    </section>

<nav className='navbar navbar-dark bg-primary fixed-bottom'>
    <div className="full-width">
        <Link to="/user/:uid">
        <i className='float-right fas fa-user'></i>
        </Link>
</div>
</nav> 
      </div>
    )
  }
}
