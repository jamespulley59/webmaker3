import React, {Component} from 'react';
export default class WidgetList extends Component {
    render() {
        return(
<div>           
    <nav class="navbar fixed-top navbar-light bg-light">
        <a href='../page/page-list.html'><i class="fa fa-chevron-left"></i></a>
        <span class ='navbar-brand mb-0 h1'>Widgets</span>
        <a href="widget-choose.html"><i class ='fas fa-plus'></i></a>
    </nav>
</div>        
        )
    }
}