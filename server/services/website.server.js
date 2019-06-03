module.exports = function(app) {
  const WebsiteModel = require('../models/website/website.model');
    
      //   get all websites that match user id.
      app.get('/api/user/:uid/website', async (req, res) => {
          const uid = req.params['uid'];
          const websites = await WebsiteModel.findAllWebsitesForUser(uid);

          res.json(websites);
      })

      // new website
      app.post('/api/website', async (req, res) => {
        const newWeb = req.body;
        const data = await WebsiteModel.createWebsite(newWeb);

        res.json(newWeb);
      })

      // delete website  wid
      app.delete('/api/website/:wid', async (req, res) => {
        const wid = req.params['wid'];
        const data = await WebsiteModel.deleteWebsite(wid);

        res.json(data);
      })

      // change info
      app.put('/api/website', async (req, res) => {
        const newWeb = req.body;
        const data = await WebsiteModel.updateWebsite(newWeb);

        res.json(newWeb);
      })
};