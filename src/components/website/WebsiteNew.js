import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import uuid from 'uuid';

export default class WebsiteNew extends Component {

state = {
    uid: this.props.match.params.uid,
    websites: [],
    name: '',
    description: ''
};

componentDidMount() {
    this.filterWebsites(this.props.websites);
}

filterWebsites = websites => {
    const newWebsites = websites.filter(
        website => website.developerId === this.state.uid
    );
    this.setState({
        websites: newWebsites
    });
};

onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};

onSubmit = e => {
    const { name, description, uid } = this.state;
    e.preventDefault();
    const newWeb = {
        _id: uuid(),
        name,
        developerId: uid,
        description
    };
    this.props.addWeb(newWeb);
    this.props.history.push(`/user/${this.state.uid}/website`);
};


  render() {

    const { uid } = this.state;
 
    return (

<div>
    
    <nav className='navbar navbar-light bg-primary fixed-top row nav-height text-white'>
        <div className='col-lg-4 d-none d-lg-block text-center text-white'>
            <Link to={`/user/${uid}/website`} className='float-left'>
                <i className='fas fa-chevron-left'></i>
            </Link>
                <span className=''>Websites</span>            
            <Link className='float-right' to={`/user/${uid}/website/new`}>
                 <i class='fas fa-plus'></i>
            </Link>             
        </div>                 
        
        <div className='col-lg-8 text-center text-white'>
            <Link
                className='d-lg-none float-left'
                to={`/user/${uid}/website`}>            
                    <i className='fas fa-arrow-circle-left'></i>
            </Link>
                <span className=''>New Website</span>
            <Link className='float-right' to={`/user/${uid}/website`}>
                <i className='fas fa-check'></i>
            </Link>
        </div>          
    </nav>

    <div className='row'>
        <div className='col-lg-4 d-none d-lg-block'>
            <div className='container-fluid'>
                <ul className='list-group'>
                    {this.state.websites.map(website => (
                        <li key={website._id} className='list-group-item'>
                            <Link to={`/user/${uid}/website/${website._id}/page`}>
                            {website.name}                          </Link>    
                            <Link className='float-right' to={`/user/${uid}/website/${website._id}`}> 
                                <i className='fas fa-cog' />   
                            </Link>                   
                        </li>                      
                    ))} 
                </ul>
            </div>    
        </div> 

        <div className='col-lg-8'>
            <div className='container-fluid'>
                <form id='newWebForm' onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>
                            <b>Name</b>
                        </label>
                        <input className='form-control'
                               id='name'
                               name='name'                          
                               type='text'
                               placeholder='Name of new Website'
                               onChange={this.onChange}
                               value={this.state.name} /> 
                    </div>                                
                    
                        <div className='form-group'>
                            <label htmlFor='description'>
                                <b>Description</b>
                            </label>
                            <textarea id='description'
                                      rows='5'
                                      className='form-control'
                                      type='text'
                                      placeholder='Describe the new Website'
                                      name='description'
                                      onChange={this.onChange}
                                      value={this.state.description} />  
                        </div>                            
                        
                        <Link to={`/user/${uid}/website`}
                            className='btn btn-lg btn-warning'>
                            Cancel
                        </Link>                         
                        <button className='btn btn-lg btn-success float-right'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <nav className='navbar navbar-dark bg-primary fixed-bottom'>
            <div className='full-width'>             
                <Link className='color-white float-right'to={`/user/${uid}`}>
                    <i className='fas fa-user'></i>
                </Link>            
            </div>
        </nav>                 
</div>
    )
  }
}
        
                      
    
