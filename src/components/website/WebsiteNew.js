import React, { Component } from 'react'

export default class WebsiteNew extends Component {
  render() {
    return (
<div>
<nav className="navbar navbar-dark bg-primary fixed-top row">
  <div className='col-lg-4 d-none d-lg-block'>
      <a href='website-list.html'><i className="fas fa-chevron-left"></i></a>
      <span className="navbar-brand mb-0 h1">New Websites</span>
      <a className='float-right pt-2' href='website-new.html'><i className="fas fa-plus"></i></a>
  </div>
  
  <div className='col-lg-8'>                     
      <a className="d-lg-none" href='../user/profile.html'> </a>                
      <span className="navbar-brand mb-0 h1">New Websites</span>
      <a className='float-right pt-2' href='website-list.html'><i className="fas fa-check"></i></a>   
  </div>             
</nav>
<section className='row'>
  <div className='col-lg-4 d-none d-lg-block'>    
  <div className='container'>
    <ul className='list-group'>
        <li className='list-group-item'>
            <a href='../page/page-list.html'>Address Book App</a>
            <a className='float-right' href='website-edit.html'><i className="fas fa-cog"></i></a>
        </li>        
        <li className='list-group-item'>
            <a href='../page/page-list.html'>Blogger</a>
            <a className='float-right' href='website-edit.html'><i className="fas fa-cog"></i></a>
        </li>
        <li className='list-group-item'>
            <a href='../page/page-list.html'>Blogging App</a>
            <a className='float-right' href='website-edit.html'><i className="fas fa-cog"></i></a>
        </li>
        <li className='list-group-item'>
            <a href='../page/page-list.html'>Script Test App</a>
            <a className='float-right' href='website-edit.html'><i className="fas fa-cog"></i></a>
        </li>  
    </ul> 
    </div>            
    </div>
    <div className='col-lg-8'>
        <div className='container'>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                      <input placeholder='Enter website name...' className='form-control' type="text" id='name' name='name' />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description</label>
                    <textarea rows='5' placeholder='Enter website description...' className='form-control' id='description' name='description'></textarea>
                </div>
            </form>
        </div>
    </div>
</section>

<nav className="navbar navbar-dark bg-primary fixed-bottom">
    <div className='full-width'>             
        <a href='../user/profile.html'><i className=' float-right fas fa-user'></i></a>
    </div>    
</nav>  
</div>
    )
  }
}
