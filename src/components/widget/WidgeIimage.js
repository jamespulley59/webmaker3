import React, { Component } from 'react'

export default class WidgetImage extends Component {
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
                <input placeholder=' Type Text Description Here (optional)' id='text' name='text' type='text' className='form-control' />
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
            <div className='form-group'>
                <label htmlFor='width'>Width</label>
                <input placeholder=' Type Image URL Here' id='url' name='url' type='text' className='form-control' />
                    <Datalist id='tickmarks' />
                        <option value='0' label='0%' />
                        <option value='10' />                        
                        <option value='20' />
                        <option value='30' />
                        <option value='40' />
                        <option value='50' label='50%' />                        
                        <option value='60' />
                        <option value='70' />
                        <option value='80' />
                        <option value='90' />
                        <option value='100' label='100%' />                        
            </div>
            <div className='form-group'>
                <label htmlFor='file'>File</label>
                <input type='file' id='file' name='file' className='form-control' />
            </div>
            <a href='#' className='btn btn-primary btn-block'>Upload Image</a>
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
