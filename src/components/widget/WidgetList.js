import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class WidgetList extends Component {

    state = {
     wid: '',
     uid: '',
     pid: '',
     widgets:[]    
    }

    async componentDidMount() {
        await this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid,
            pid: this.props.match.params.pid
        })
        this.filterWidgets(this.state.pid)
    }

    filterWidgets = (pid) => {
      const widgets = this.props.widgets.filter(
        (widget) => (
            widget.pageId === pid
        )            
      )
       this.setState({
           widgets
       })
    }

    render() {
        const {uid, pid, wid, widgets} = this.state
    return(
<div>
    <nav className="navbar fixed-top navbar-light bg-light">
        <Link className = 'color-black' to={`/user/${uid}/website/${uid}/page/`}>
            <i className="fa fa-chevron-left"></i>
        </Link>
            <span className ='navbar-brand'>Welcome</span>
        <Link className='color-black' to={`/user/${uid}/website/${wid}/page/${pid}/widget/new`}>
            <i class ='fas fa-plus' />
        </Link>
    </nav>

    <div className = 'container-fluid'>
        {
            widgets.map(
                (widget) => {
                    switch(widget.widgetType){
                       case 'HEADING':
                        return(
                            <div>
                                <div className='absolute-right'>
                                    <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget.id}`}>
                                        <i className='fas fa-cog'></i>
                                    </Link>
                                    <span>
                                        <i className='fas fa-bars'></i>
                                    </span>
                                </div>
                                    <div>
                                    {widget.size === 1 && <h1>{widget.text}</h1>}                                    
                                    {widget.size === 2 && <h2>{widget.text}</h2>}
                                    {widget.size === 3 && <h3>{widget.text}</h3>}
                                    {widget.size === 4 && <h4>{widget.text}</h4>}
                                    {widget.size === 5 && <h5>{widget.text}</h5>}
                                    {widget.size === 6 && <h6>{widget.text}</h6>}
                                    </div>                                        
                            </div>
                        )
                       case 'IMAGE':
                       return (
                    <div>       
                        <div key = {widget.id}>
                            <div className='absolute-right'>
                                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget.id}`}>
                                    <i className='fas fa-cog'></i>   
                                </Link>
                                <span>
                                    <i className='fas fa-bars'></i>
                                </span>
                            </div>                                
                        </div>
                        <div>
                            <div className='img-fluid'>
                                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget.id}`}>
                                    <i className='fas fa-cog'></i>
                                </Link>
                                <span>
                                    <i className='fas fa-bars'></i>
                                </span>
                            </div>
                            <img className='image-fluid' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOXgCbLu2SaFSa0R3JEM6gvThyccEG4zILYog_G-1Mkb89XRDHg' alt='msimbo' />
                        </div>                                
                    </div>
                       )
                       case 'YOUTUBE': 
                    }
                }
            )

        }
    </div>
        {/* <div> 
            
        
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
                    <h5>zvlo;iv;ozsif;zadfi;bvzib z;ibj;fipbz'odfjb'pojpb'zojb 'zopjb' obj zxopjbf'o'ob kgkvygklgkli
                        DSAbgfsznhxdffhymmnjcdmcxmmcxnmxcmgillugh                          
                    </h5>
            </div>    
        </div>
    </div>*/}

        <footer className='navbar navbar-light fixed-bottom bg-dark'>
                <div className='full-width'>
                    <Link className='color-black float-right' to={`/user/${uid}`}>
                        <i className='fas fa-user'></i>
                    </Link>
                </div>          
        </footer>

     
</div>        
        )
    }
}