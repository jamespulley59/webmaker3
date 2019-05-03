import React, { Component } from 'react'

export default class WidgetChooser extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary fixed-top">
                <a href='../user/profile.html'>
                    <i class="fas fa-chevron-left"></i>
                </a>
                    <span class="navbar-brand mb-0 h1">Choose Widgets</span><span></span>  
            </nav>
      </div>
    )
  }
}
