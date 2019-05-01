import React, { Component } from 'react'

export default class PageList extends Component {
  render() {
    return (
      <div>
       <nav className="navbar navbar-dark         bg-primary fixed-top">
            <a href='../website/website-list.html'><i className="fas fa-chevron-left"></i></a>
            <span className="navbar-brand mb-0 h1">Page List</span>
            <a href='page-new.html'><i className="fas fa-plus"></i></a>
    </nav>
    <section className='container'>
    <ul className='list-group'>
        <li className='list-group-item'>
            <a href='../page/page-list.html'>Blog Post</a>
            <a className='float-right' href='page-edit.html'><i className="fas fa-cog"></i></a>
        </li>        
        <li className='list-group-item'>
            <a href='../page/page-list.html'>Blog</a>
            <a className='float-right' href='page-edit.html'><i className="fas fa-cog"></i></a>
        </li>
        <li className='list-group-item'>
            <a href='../page/page-list.html'>Home</a>
            <a className='float-right' href='p-edit.html'><i className="fas fa-cog"></i></a>
        </li>
        <li className='list-group-item'>
            <a href='../page/page-list.html'>About Us</a>
            <a className='float-right' href='page-edit.html'><i className="fas fa-cog"></i></a>
        </li> 
        <li className='list-group-item'>
            <a href='../page/page-list.html'>Contact Us</a>
            <a className='float-right' href='page-edit.html'><i className="fas fa-cog"></i></a>
        </li> 
    </ul>
    </section>

<nav className='navbar navbar-dark bg-primary fixed-bottom'>
    <div className="full-width">
        <a href="profile.html"><i className='float-right fas fa-user'></i></a>
</div>
</nav> 
      </div>
    )
  }
}
