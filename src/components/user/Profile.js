import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import uuid from 'uuid';
import axios from 'axios';

export default class Profile extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    // check if username is taken
    async componentDidMount(){
        const uid = this.props.match.params.uid;
        const res = await axios.get(`/api/user/${uid}`);
        if(res.data){
            this.showUser(res.data);
        } else {
            alert('That user was not found. Please try another.');
        }
    }
    // all user info, optional
    showUser = (user) => {
        const {username, email, firstName, lastName, password} = user;
        this.setState({
            username, 
            password,
            email, 
            firstName, 
            lastName                      
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
     // see if username is already taken
    onSubmit = async e => {
        e.preventDefault();
        const {username, email, firstName, lastName, password, oldUsername} = this.state;
        if(username !== oldUsername) {    
            const res = await axios.get(`/api/user?username=${username}`);
        if(res.data){
            alert('Sorry. That username has been taken. Please create another.');
            return;
    } 
        }
        // compiling new/updated user info
        const newUser = {
            _id: this.props.match.params.uid,
            username,
            password,
            email,
            firstName,
            lastName
        }
        const res = await axios.put('/api/user', newUser);
        alert('Your new information has been')
        this.showUser(res.data);
    }
        
    render() {

        const {username, email, firstName, lastName} = this.state;

    return(

<div>          
    <nav className='navbar navbar-dark bg-primary fixed-top ' to='/user/:uid'>
        <span></span>
        <span className='navbar-brand mb-0 h1'>Profile</span>
        <button className='btn' to={`/user`}>
            <i className='fas fa-check'></i>
        </button>
    </nav>           
    <div className='container'>
        <form id='profileForm' onSubmit={this.onSubmit}>
            <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input
                    placeholder='Enter or edit your username...'
                    className='form-control'
                    type='text'
                    id='username'
                    name='username'
                    value={username}
                    onChange={this.onChange} />               
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                    placeholder='Enter or edit your email address...'
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    onChange={this.onChange} />                
            </div>
            <div className='form-group'>
                <label htmlFor='firstName'>First Name</label>
                <input
                    placeholder='Enter or edit your first name...'
                    className='form-control'
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={firstName}
                    onChange={this.onChange} />               
            </div>
            <div className='form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                    placeholder='Enter or edit your last name...'
                    type='text'
                    className='form-control'
                    id='lastName'
                    name='lastName'
                    value={lastName}
                    onChange={this.onChange} />               
            </div>            
            <Link className='btn btn-primary btn-block'
                to={`/user/${this.props.match.params.uid}/website`}>Websites</Link>                         
            <Link to={`/login`} className='btn btn-danger btn-block'>Logout</Link> 
    </form>                               
 </div>     
    <nav className='navbar navbar-dark bg-primary fixed-bottom'>
        <Link to={`/login`}>                
            <i className='fas fa-user' />
        </Link>
    </nav>          
</div>        
    )              
}  
}              