import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import uuid from 'uuid';
import axios from 'axios';

export default class Profile extends Component {

// what a user is
    state = {
        username: '',
        email: '',        
        firstName: '',
        lastName: '',
        password: '',
        oldUsername: '',
        showUpdateComplete: false,
        showUpdateError: false,
        role: ''
    }
// check if user is logged in
    async componentDidMount(){
        const isLoggedIn = await this.props.loggedIn();
        if (isLoggedIn === 0) {
          this.props.history.push('/login');
          return;
        }
        
        const uid = this.props.match.params.uid;
        const res = await axios.get(`/api/user/${uid}`);
        if(res.data){
            this.showUser(res.data);
        } else {
            
        }
    }
    // all user info, optional
    showUser = (user) => {
        const {username, email, firstName, lastName, password, role} = user;
        this.setState({
            username,
// shouldn't we have a line for password on user profile page or delete password from this page. 
            password,
            email, 
            firstName, 
            lastName,
            oldUsername: username,
            role                       
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            showUpdateComplete: false,
            showUpdateError: false
        });
        return
    }

// see if username is already taken
    onSubmit = async e => {
        e.preventDefault();
        const {username, email, firstName, lastName, password, oldUsername} = this.state;
        
        if(username !== oldUsername) {    
            const res = await axios.get(`/api/user?username=${username}`);
            if(res.data){
                this.setState({
                    showUpdateError: true
                })
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
        await axios.put('/api/user', newUser);
        this.setState({
            showUpdateComplete: true 
        })
    }
// user logout
logout = async () => {
    await axios.post("/api/logout");
    this.props.history.push("/login");
    } 

    render() {

        const {username, email, firstName, lastName, role} = this.state;
    
    return(

<div>          
    <nav className='navbar navbar-dark bg-primary fixed-top'> 
        <span></span>
        <span className='navbar-brand mb-0 h1'>Profile</span>
        <button  className='btn' form="profileForm">
            <i className='fas fa-check'>  
            </i>
        </button>
    </nav>           
    <div className='container'>

        {this.state.showUpdateComplete && (
            <div className='alert alert-success'>
                Your new information has been added to your records.
            </div>)}

            {this.state.showUpdateError && (
            <div className='alert alert-danger'>
                Username is taken, please try another one
            </div>)}

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
                    onChange={this.onChange} 
                />               
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
            to={`/user/${this.props.match.params.uid}/website`}>Websites
        </Link>                         
        <button type='button' onClick={this.logout} className='btn btn-danger btn-block'>Logout
        </button>

        {
            role === 'admin'? ( <Link className='btn btn-block btn-warning' to='/userManage'>Manage All Users</Link> )
            : null
        }
        
    </form>                               
 </div>     
    <nav className='navbar navbar-dark bg-primary fixed-bottom'>
        <span></span>
        <Link to={`/login`}>                
            <i className='fas fa-user' />
        </Link>
    </nav>          
</div>        
    )              
}  
}