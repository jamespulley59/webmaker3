module.exports = function(app) {      
    
   

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