import React, { Component } from 'react'

export default class WidgetEdit extends Component {
  render() {
    return (
<div>
<nav className='navbar navbar-light bg-light fixed-top'>
        <a href='widget-list.html'>
            <i className='fas fa-chevron-left'></i>
        </a>
        <span className='navbar-brand mb-0 h1'>Widget Edit</span>
        <a href='widget-list.html'>
            <i className='fas fa-check'></i>
        </a>
    </nav>
    <div className='container'>
        <form>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input placeholder=' Type Widget Name Here' id='name' name='name' type='text' className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor='text'>Text</label>
                <input placeholder=' Type Text Here' id='text' name='text' type='text' className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor='sixe'>Size</label>
                <input placeholder=' Type Number Here' id='url' name='url' type='text' className='form-control' />
            </div>
                     
                <a href='widget-list.html' className='btn btn-danger btn-block'>Delete</a>
        </form>
    </div>
    <nav className='navbar navbar-light bg-light fixed-bottom'>
        <a href='../user/profile.html'>
            <i className ='fas fa-user'></i>
        </a>
    </nav>   
</div>
    )
  }
}
