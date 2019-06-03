module.exports = function(app) {
const pageModel = require("../models/page/Page.model");

    // access to all pages
    app.get('/api/website/:wid/page', async (req, res) => {
        const wid = req.params['wid'];
        const websites = await pageModel.findAllPagesForWebsite(wid);        
        
        res.json(websites);
    });

    //  new page
    app.post('/api/page', async (req, res) => {
        const newPage = req.body;
        const data = await pageModel.createPage(newPage);

        res.json(data);
    })

    // get page by id
    app.get('/api/page/:pid', async (req, res) => {
        const pid = req.params['pid'];
        const page = await PageModel.findPageById(pid);
        res.json(page);
    })

    // delete page
    app.delete('/api/page/:pid', async (req, res) => {
        const pid = req.params['pid'];
        const data = await PageModel.deletePage(pid);

        res.json(data);
  });

  // Update page info
  app.put('/api/page', async (req, res) => {
    const newPage = req.body;
    const data = await PageModel.updatePage(newPage);

    res.json(data);
  });
};