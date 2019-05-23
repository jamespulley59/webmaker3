import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class WidgetYoutube extends Component {

  onChange = e => {
        this.props.onChange(e);
    }

    onSubmit = e => {
        this.props.onSubmit(e)
    }

    onDelete = () => {
        this.props.onDelete();
    }

    render() {

        const {uid, wid, pid, name, url, width} = this.props

    return (
        
<div>

   <nav className='navbar navbar-light bg-light fixed-top'>
        <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}>
            <i className='fas fa-chevron-left'></i>
        </Link>
            <span className='navbar-brand mb-0 h1'>Edit Widget</span>
            <button className="color-black btn" form="youtubeForm">
                <i className="fas fa-check" />
            </button>
    </nav>

    <div className='container'>
        <form id='youtubeForm onSubmit={this.onSubmit'>
            <div className='form-group'>
                <label htmlFor='name'>
                   <b>Name</b>
                </label>
                    <input
                        id = 'name'
                        name = 'name'
                        type = 'text'
                        className = 'form-control' 
                        value = {name}
                        onChange = {this.onChange} 
                    />       
            </div>
            <div className='form-group'>
                <label htmlFor='text'>
                    <b>Url</b>
                </label>
                    <input 
                        id = 'url'
                        type = 'text'
                        name = 'url'
                        value = 'url'
                        className = 'form-control'
                        onChange = {this.onChange}
                    />    
            </div>
            <div className='form-group'>
                <label htmlFor='width'>
                    <b>Width</b>
                </label>
                    <input
                        id = 'width'
                        type = 'text'
                        name = 'width'
                        value = 'width'
                        className = 'form-control'
                        onChange = {this.onChange}
                    />   
            </div>

            <button type='button' onClick={this.onDelete} className='btn btn-danger btn-block'>
                Delete
            </button>
        </form>    
    </div>                         
                {/* <Link to={`/user/:${uid}/website/${wid}/page/${pid}/widget`} className='btn btn-danger btn-block'>Delete</Link> */}
        
    
    <footer className='navbar navbar-light bg-light fixed-bottom'>
        <div className='full-width'>
            <Link className='color-black float-right'to={`/user/${uid}`}>
                <i className ='fas fa-user'></i>
            </Link>
        </div>
    </footer> 
</div>
    );
  }
}
