import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class WidgetList extends Component {
    render() {
        return(
<div>
    <nav className="navbar fixed-top navbar-light bg-light">
        <Link to='/user/:uid/website/:wid/pagel'>
            <i className="fa fa-chevron-left"></i>
        </Link>
            <span class ='navbar-brand mb-0 h1'>Widgets</span>
        <Link to="/user/:uid/website/:wid/page/:pid/widget/new">
            <i class ='fas fa-plus'></i>
        </Link>
    </nav>
    <div className='container-fluid'>
        <div>
            <div className='icon-right'>
                <Link to='#'>
                    <i className='fas fa-cog'></i><i className='fas fa-bars'></i>
                </Link>
            </div>
                <h1>MSIMBO</h1>           
        </div>
        <div>
            <div className='icon-right'>
                <Link to='#'>
                    <i className='fas fa-cog'></i>
                    <i className='fas fa-bars'></i>
                </Link>
            </div>
                <h3>Loremdmjdmxm fnjfgtnjxdnhjxfnmjxfm m xfnmjxs</h3>           
        </div>
        <div>
            <div className='img-fluid icon-right'>
                <Link to='#'>
                    <i className='fas fa-cog'></i>
                    <i className='fas fa-bars'></i>
                </Link>
            </div>
            <img className='image-fluid' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOXgCbLu2SaFSa0R3JEM6gvThyccEG4zILYog_G-1Mkb89XRDHg' alt='msimbo' />                           
        </div>
        <div>
            <div className='icon-right'>
                <Link to='#'>
                    <i className='fas fa-cog'></i>
                    <i className='fas fa-bars'></i>
                </Link>
            </div>
            <p>zvlo;iv;ozsif;zadfi;bvzib z;ibj;fipbz'odfjb'pojpb'zojb 'zopjb' obj zxopjbf'o'ob kgkvygklgkli
                DSAbgfsznhxdffhymmnjcdmcxmmcxnmxcmgillugh</p>                           
        </div>
        <div>
            <div className='icon-right'>
                <Link to='#'>
                    <i className='fas fa-cog'></i>
                    <i className='fas fa-bars'></i>
                </Link>
            </div>
             <h3>gjkhugjhuygklyugkligyilgyiguhylo9hyuihluigh
                 kljlloihhuliuuilughiluglghilugiuilg</h3>                         
        </div>
        <div>
            <div className='icon-right'>
                <Link to='#'>
                    <i className='fas fa-cog'></i>
                    <i className='fas fa-bars'></i>
                </Link>
            </div>
            <div className='embed-responsive embed-responsive-16by9'>           
            <iframe title="roses" src="https://www.youtube.com/embed/I7pWhXv4ZVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <div className='icon-right'>
                    <Link to='#'>
                        <i className='fas fa-cog'></i>
                        <i className='fas fa-bars'></i>
                    </Link>
                </div>
            <p>zvlo;iv;ozsif;zadfi;bvzib z;ibj;fipbz'odfjb'pojpb'zojb 'zopjb' obj zxopjbf'o'ob kgkvygklgkli
                DSAbgfsznhxdffhymmnjcdmcxmmcxnmxcmgillugh</p>                           
            </div>    
        </div>
    </div>   
</div>        
        )
    }
}