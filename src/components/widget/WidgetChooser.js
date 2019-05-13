import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class WidgetChooser extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed-top">
              <Link to='/user/:uid/website/:wid/page/:pid/widget'>
                  <i className="fas fa-chevron-left"></i>
              </Link>
                  <span className="navbar-brand mb-0 h1">Choose Widgets</span><span></span>  
        </nav>
          <div className='container'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Link to='#'>Header</Link>
              </li>
              <li className='list-group-item'>
                <Link to='#'>Label</Link>
              </li>
              <li className='list-group-item'>
                <Link to='#'>HTML</Link>                
              </li>
              <li className='list-group-item'>
                <Link to='#'>Text Input</Link>
              </li>
              <li className='list-group-item'>
                <Link to='#'>Link</Link>
              </li>
              <li className='list-group-item'>
                <Link to='#'>Button</Link>                
              </li>
              <li className='list-group-item'>
                <Link to='#'>Image</Link>                
              </li>
              <li className='list-group-item'>
                <Link to='#'>Youtube</Link>
              </li>
              <li className='list-group-item'>
                <Link to='#'>Data Table</Link>
              </li>
              <li className='list-group-item'>
                <Link to='#'>Repeater</Link>                
              </li>
            </ul>
          </div>
      </div>
    )
  }
}
