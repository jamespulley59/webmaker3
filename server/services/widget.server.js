module.exports = function(app) {      
    
const WidgetModel = require('../models/widgets/Widget.model');   

      // get widgets by id #
      app.get('/api/page/:pid/widget', async (req, res) => {
          const pid = req.params['pid'];
          const widgets = await WidgetModel.findWidgetsForPage(pid);
         
          res.json(widgets);
    })
    
    // new widget info
    app.post('/api/widget', async (req, res) => {
        const newWidget = req.body;
        const data = await WidgetModel.createWidget(newWidget); 

        res.json(data);
    });

    //  get widget by id
    app.get('/api/widget/:wgid', async (req, res) => {
        const wgid = req.params['wgid'];
        const widget = await WidgetModel.findWidget(wgid)

        res.json(widget);
    });

    //  change widget info/content
    app.put('/api/widget', async (req, res) =>{
        const newWidget = req.body;
        const data = await WidgetModel.updateWidget(newWidget);  
           
        
        res.json(data)
    })
    // delete widgets
    app.delete('/api/widget/:wgid', async (req, res) => {
        const wgid = req.params['wgid'];    
        const data = await WidgetModel.deleteWidget(wgid)

        res.json(data);
    });    
};