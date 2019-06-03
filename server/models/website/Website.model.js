const mongoose = require('mongoose');
const WebsiteSchema = require('./Website.schema');
const WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

// find users websites
WebsiteModel.findAllWebsitesForUser = (uid) => {
    return WebsiteModel.find({developerId: uid});
}

// create new websites
WebsiteModel.createWebsite = (website) => {
    return WebsiteModel.create(website);
}

// how to delete
WebsiteModel.deleteWebsite = (wid) => {
    return WebsiteModel.deleteOne({_id: wid})
}

// how to change website
WebsiteModel.updateWebsite = (website) => {
    return WebsiteModel.updateOne({_id: website._id}, website);
}

module.exports = WebsiteModel
