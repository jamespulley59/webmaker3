import React, { Component } from 'react'

export default class PageEdit extends Component {
  render() {
    return (
<div>
<nav className="navbar navbar-dark bg-primary fixed-top">
    <a href='page-list.html'><i className="fas fa-chevron-left"></i></a>
    <span className="navbar-brand mb-0 h1">Edit Page</span>
    <a href='page-list.html'><i className="fas fa-check"></i></a>
</nav>
<section className='container'>
<ul className='list-group'>
    <li className='list-group-item'>
        <a href='page-list.html'>Name</a>
        <a className='float-center' placeholder='Type Name Here' href='page-edit.html'>123123</a>
        
    </li>       
    <li className='list-group-item'>            
        <a className='float-center' href='page-edit.html'>`12`12</a>
        <a href='page-list.html'>Page Title</a>
    </li>
    <a href="website-list.html" className="btn btn-danger btn-block">Delete</a>      
</ul> 
</section>
<nav className="navbar navbar-dark bg-primary fixed-bottom">
<div className='full-width'>
    <a href='../user/profile.html'><i className='float-right fas fa-user'></i></a>
</div>
</nav>  
</div>
    )
  }
}
