import React, { Component } from 'react'
import {Link} from react-router-dom;
export default class PageNew extends Component {
  render() {
    return (
<div>
    <nav className="navbar navbar-dark bg-primary fixed-top">
        <Link to='/user/:uid/website/:wid/page'>
            <i className="fas fa-chevron-left"></i>
        </Link>
            <span className="navbar-brand mb-0 h1">New Pages</span>
        <Link to='/user/:uid/website/:wid/page'>
            <i className="fas fa-check"></i>
        </Link>
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
                <Link to='/user/:uid'>
                    <i className='float-right fas fa-user'></i>
                </Link>
            </div>
        </nav>
    </form>
</div>
    )
  }
}
