import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class WidgetYoutube extends Component {

  onChange= e => {
        this.props.onChange(e);
    }

    onSubmit= e => {
        this.props.onSubmit(e)
    }

    onDelete = () => {
        this.props.onDelete();
    }

    render() {

        const {uid, wid, pid} = this.props

    return (
        
<div>
   <nav className='navbar navbar-light bg-light fixed-top'>
        <Link to={`/user/:${uid}/website/${wid}/page/${pid}/widget`}>
            <i className='fas fa-chevron-left'></i>
        </Link>
            <span className='navbar-brand mb-0 h1'>Widget Edit</span>
        <Link to={`/user/:${uid}/website/${wid}/page/${pid}/widget`}>
            <i className='fas fa-check'></i>
        </Link>
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
                    <div className='input-group'>
                        <input type='number' className='form-control' placeholder='Image Width' />
                            <div className='input-group-append'>
                                <span className='input-group-width'>%</span>
                            </div>
                    </div>
            </div>          
                <Link to={`/user/:${uid}/website/${wid}/page/${pid}/widget`} className='btn btn-danger btn-block'>Delete</Link>
        </form>
    </div>
    <nav className='navbar navbar-light bg-light fixed-bottom'>
        <Link to={`}../user/${uid}`}>
            <i className ='fas fa-user'></i>
        </Link>
    </nav> 
</div>
    )
  }
}
