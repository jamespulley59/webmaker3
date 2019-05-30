module.exports = function(app) {      
    
    // will move this to ...
    let widgets =  [
        { _id: '123', widgetType: 'HEADING', pageId: '321', size: 1, text: 'James Pulley, first website'},
        { _id: '234', widgetType: 'HEADING', pageId: '321', size: 2, text: 'My next wife'},
        { _id: '345', widgetType: 'IMAGE', pageId: '321', height: '10%', width: '30%', url:'https://images.unsplash.com/photo-1536416992256-1c91ce9ccdfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', alt: 'picture'},
        { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'My favorite song'},
        { _id: '678', widgetType: 'YOUTUBE', pageId: '321',height: '100%', width: '60%', url: 'https://www.youtube.com/embed/I7pWhXv4ZVE', alt: 'Outcast'},
      ];

      // get widgets by id #
      app.get('/api/page/:pid/widget', (req, res) => {
          const pid = req.params['pid']
          const result = widgets.filter(
            (widget) => {
                return widget.pageId === pid
            }
          )
          res.json(result);
    })
    
    // new widget info
    app.post('/api/widget', (req, res) => {
        const newWidget = req.body;
        widgets.push(newWidget);
        res.json(newWidget);
    })

    //  get widget by id
    app.get('/api/widget/:wgid', (req, res) => {
        const wgid = req.params['wgid'];
        const widget = widgets.find(
            (widget) => (widget._id === wgid)
        )
        res.json(widget);
    })

    //  change widget info/content
    app.put('/api/widget', (req, res) =>{
        const newWidget = req.body;
        widgets = widgets.map(
            (widget) => {
                if(widget._id === newWidget._id){
                    widget = newWidget;
                }
                return widget;            
            }
        )
        res.json(newWidget)
    })

    // delete widgets
    app.delete('/api/widget/:wgid', (req, res) => {
        const wgid = req.params['wgid'];    
        const widget = widgets.find(
            (widget) => (widgets._id === wgid)
        );    
        const index = widgets.indexOf(widget);
        widgets.splice(index, 1);
        res.json(widget);
    })
}