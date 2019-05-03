import React, {Component} from 'react';
export default class Login extends Component {
    render() {
        return( 
    <nav class="navbar navbar-dark bg-primary fixed-top">
        <a href='widget-list.html'><i class="fas fa-chevron-left"></i></a>
        <span class="navbar-brand mb-0 h1">Widget Edit</span>
        <a href='widget-list.html'><i class="fas fa-check"></i></a>
    </nav>
<section class='container'>
    <ul class='list-group'>
        <li class='list-group-item'>
            <a href='widget-heading.html 'placeholder='Type Name Here'>Name</a>                
            <a placeholder='Type Name Here' href='widget-heading.html'></a>
        </li>
        <li class='list-group-item'>
            <a href='widget-heading.html'>Text</a>
            <a class='float-right' placeholder='Type Text Here' href='widget-heading.html'></a>
        </li> <li class='list-group-item'>
            <a href='widget-heading.html'>Size</a>
            <a class='float-right' placeholder='Type Size Here' href='widget-heading.html'></a>
        </li>

    </ul>
</section>
    <nav class="navbar navbar-dark bg-primary fixed-bottom">            
     <span></span><a href='widget-list.html'>Delete</a><span></span>
    </nav>   
)