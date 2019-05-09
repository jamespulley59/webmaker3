import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class PageEdit extends Component {

    state = {
        uid: "",
        wid: "",
        pid: "",
        name: "",
        title: ""
    }

    async componentDidMount() {
        await this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid,
            pid: this.props.match.params.pid
        })

        const page = this.getPage();
        this.setState({
            name: page.name,
            title: page.title
        })
    } 
    
    getPage = () => {
        for(let page of this.props.pages) {
            if(page._id === this.state.pid) {
                return page;
            }
        }

        return null;
    } 

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    
    onDelete = () => {
        this.props.deletePage(this.state.pid);
        this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }

    onSubmit = e => {
        e.preventDefault();
        const newPage = {
            _id: this.state.pid,
            name: this.state.name,
            websiteId: this.state.wid,
            title: this.state.title
        }
        this.props.editPage(newPage);
        this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
    } 

  render() {
    const {uid, wid, name, title} = this.state 
    return (
<div>
<nav className="navbar navbar-dark bg-primary fixed-top">
    <Link className="color-black" to={`/user/${uid}/website/${wid}/page`}> 
        <i className="fas fa-chevron-left"></i>
    </Link>
        <span className="navbar-brand mb-0 h1">Edit Page</span>
    <Link to='/user/:uid/website/:wid/page'>
        <i className="fas fa-check"></i>
    </Link>
</nav>
<section className='container'>
<ul className='list-group'>
    <li className='list-group-item'>
        <Link to='/user/:uid/website/:wid/page'>Name</Link>
        <Link className='float-center' placeholder='Type Name Here' to='/user/:uid/website/:wid/page/:pid'>123123</Link>  
    </li>       
    <li className='list-group-item'>            
        <Link className='float-center' to='/user/:uid/website/:wid/page/:pid'>`12`12</Link>
        <Link to='/user/:uid/website/:wid/page'>Page Title</Link>
    </li>
        <Link to="/user/:uid/website" className="btn btn-danger btn-block">Delete</Link>      
</ul> 
</section>
<nav className="navbar navbar-dark bg-primary fixed-bottom">
    <div className='full-width'>
        <Link to='/user/:uid'>
            <i className='float-right fas fa-user'></i>
        </Link>
    </div>
</nav>  
</div>
    )
  }
}
