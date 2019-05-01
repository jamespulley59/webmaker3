import React, { Component } from 'react'

export default class PageNew extends Component {
  render() {
    return (
<div>
    <nav className="navbar navbar-dark bg-primary fixed-top">
        <a href='page-list.html'><i className="fas fa-chevron-left"></i></a>
        <span className="navbar-brand mb-0 h1">New Pages</span>
            <a href='page-list.html'><i className="fas fa-check"></i></a>
    </nav>    
        <form>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input placeholder='Type Name Here' className='form-control' type='text' id='name' name='name' />
            </div>
            <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input placeholder='Type Title Here' className='form-control' type='tile' id='title' name='title' />
            </div>     
    <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <div className='full-width'>
        <a href='../user/profile.html'><i className='float-right fas fa-user'></i></a>
        </div>
    </nav>
    </form>
</div>
    )
  }
}
