import React, { Component } from 'react';
import WidgetHeading from './WidgetHeading';
import WidgetImage from './WidgetImage';
import WidgetYoutube from './WidgetYoutube';
import Axios from 'axios';

// import {Link} from 'react-router-dom';

export default class WidgetEdit extends Component {

    state={
        name: '',
        text: 0,
        size: '',
        WidgetType: '', 
        width: '',       
        height: '',
        url: '',
        uid: '',
        wid: '',
        pid: ''
    }

    componentDidMount(){
        this.getWidget(this.props.match.params.wgid);
        this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid,
            pid: this.props.match.params.pid
        })
    }

    getWidget = async (wgid) => {
       const res = await Axios.get(`/api/widget/${wgid}`); 
        const currentWidget = res.data
        
        this.setState({
            name: currentWidget.name? currentWidget.name: '',
            text: currentWidget.text,
            size: currentWidget.size,
            widgetType: currentWidget.widgetType,
            width: currentWidget.width,
            height: currentWidget.height,
            url: currentWidget.url
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {name, size, text, url, width, height, widgetType, uid, wid, pid} = this.state;

        const newWidget = {
            _id: this.props.match.params.wgid,
            pageId: pid,
            name,
            size: parseInt(size),
            text,
            url,
            width,
            height,
            widgetType
        } 

        if (widgetType === 'YOUTUBE') {
            // split url into array os strings
        const spited = newWidget.url.split('/');
            // count number of strings in splited url
        const length = splited.length;
            // get last element in url === videoId 
        const videoId = splited[length -1];
            // parse url into embedded version
        newWidget.url = 'https://www.youtube.com/embed/' + videoId;
        }
        
        Axios.put('/api/widget', newWidget)
        this.props.history.push(`/user/${uid}/website/${wid}/page/${pid}/widget`)
    }

    onDelete = () => {
        const {uid, wid, pid} = this.state;       
        Axios.delete(`/api/widget/${this.props.match.params.wgid}`)
        this.props.history.push(`/user/${uid}/website/${wid}/page/${pid}/widget`)
    }

  render() {
    const {name, text, size, width, height, widgetType, url , uid, wid, pid} = this.state;
    if(widgetType === 'HEADING'){
        return (
            <WidgetHeading 
                name={name}
                text={text}
                size={size} 
                uid={uid} 
                wid={wid} 
                pid={pid} 
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                onDelete={this.onDelete}>
            </WidgetHeading>
        );
    } else if(widgetType==='IMAGE'){
        return (
            <WidgetImage 
                name={name}
                width={width}
                height={height}
                url={url}
                uid={uid} 
                wid={wid} 
                pid={pid} 
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                onDelete={this.onDelete}>
            </WidgetImage>
        );
    } else {
        return (
            <WidgetYoutube 
                name={name}
                width={width}
                height={height}
                url={url}
                uid={uid} 
                wid={wid} 
                pid={pid} 
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                onDelete={this.onDelete}>
            </WidgetYoutube>           
        );
    }
}
}
