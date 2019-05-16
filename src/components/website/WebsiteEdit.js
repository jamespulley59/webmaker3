import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WebsiteEdit extends Component {
    state = {
        uid: this.props.match.params.uid,
        wid: this.props.match.params.wid,
        websites: [],
        name: '',
        description: ''
    };

    componentDidMount() {
        this.filterWebsites(this.props.websites);
        this.getWebsite(this.state.wid);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.wid !== this.props.match.params.wid) {
            this.getWebsite(this.props.match.params.wid);
        }
    }

    filterWebsites = websites => {
        const newWebsites = websites.filter(
            website => website.developerId === this.state.uid
        );
        this.setState({
            websites: newWebsites
        });
    };

    getWebsite = wid => {
        let currentWeb;
        for (let website of this.props.websites) {
            if (website._id === wid) {
                currentWeb = website;
                break;
            }
        };
        this.setState({
            name: currentWeb.name,
            description: currentWeb.description
        });
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    delete = () => {
        this.props.deleteWeb(this.props.match.params.wid);
        this.props.history.push(`/user/${this.state.uid}/website`);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.editWeb(
            this.props.match.params.wid,
            this.state.name,
            this.state.description
        );
        this.props.history.push(`/user/${this.state.uid}/website`);
    };

render() {
    // added wid, to below const to fix error  
    const { uid, wid} = this.state;

return (

    <div>
        <nav className='navbar navbar-light bg-primary fixed-top row'>
            <div className='col-lg-4 d-none d-lg-block text-center text-white'>
                <Link className='float-left' to={`/user/${uid}/website`}>
                    <i className='fas fa-chevron-left' />
                </Link>
                {/* deleted "className='' " from below span*/}
                    <span>Websites</span>
                <Link className='float-right' to={`/user/${uid}/website/${wid}/page`}>
                    <i className='fas fa-plus' />
                </Link>
            </div>

            <div className='col-lg-8 text-center text-white'>
                <Link className='d-lg-none float-left' to={`/user/${uid}/website`}>
                    <i className='fas fa-arrow'/>
                </Link>
                    <span className=''>Edit Website</span>
                <Link className='float-righ' to={`/user/${uid}/website`}>
                    <i className='fas fa-checke' />
                </Link>
            </div>
        </nav>

        <div className='row'>
            <div className='col-4 d-none d-sm-block'>
                <div className='container-fluid'>
                    <ul className='list-group'>
                        {this.state.websites.map(website => (
                        <li key={website._id} className='list-group-item'>
                            <Link to={`/user/${uid}/website/${website._id}/page`}> 
                                {website.name} 
                            </Link>
                            <Link
                                to={`/user/${uid}/website/${website._id}`} className='float-right'>
                                    <i className='fas fa-cog'></i>
                            </Link>     
                        </li>             
                        ))}
                    </ul>
                </div>
            </div>        
                            
            <div className='col-sm-8'>
                <div className='container-fluid'>
                    <form id='editWebForm' onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>
                                <b>Name</b>
                            </label>
                            <input  id='name'
                                    name='name'
                                    className='form-control'
                                    type='text'
                                    placeholder='Name of this Website'
                                    value={this.state.name}
                                    onChange={this.onChange}/>
                         </div>                       
                        
                        <div className='form-group'>
                            <label htmlFor='description'>
                                <b>Description</b>
                            </label>
                            <textarea   id='description'
                                        name='description'
                                        rows='5'
                                        className='form-control'
                                        type='text'
                                        value={this.state.description}
                                        onChange={this.onChange}
                                        placeholder='Describe this Website'/>
                        </div>        
                        
                        <Link to={`/user/${uid}/website`}
                            className='btn btn-lg btn-warning'>                        
                            Cancel
                        </Link>
                        <button type='button'
                                onClick={this.delete}
                                className='btn btn-lg btn-danger float-right'>
                             Delete
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <nav className='navbar navbar-dark bg-primary fixed-bottom'>
            <div className='full-width'>
                <Link className='color-white float-right'
                        to={`/user/${uid}`}
                >   <i className='fas fa-user' />
                </Link>
            </div>
        </nav>
        
    </div>
        );
    }
}                            
                                    
                                
                                
                           
                        

            
                    

               