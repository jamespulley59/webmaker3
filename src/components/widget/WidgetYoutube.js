import React, { Component } from 'react'

export default class WidgetYuotube extends Component {
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
                <label htmlFor='url'>URL</label>
                <input placeholder=' Type Image URL Here' id='url' name='url' type='text' className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor='width'>Width</label>
                    <div className="input-group">
                        <input type="number" className="form-control" placeholder="Image Width" />
                            <div className="input-group-append">
                                <span className="input-group-width">%</span>
                            </div>
                    </div>
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
