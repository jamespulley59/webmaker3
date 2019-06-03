const mongoose = require('mongoose');
const PageSchema = require('./Page.schema');
const PageModel = mongoose.model('PageModel', PageSchema);

// find pages
PageModel.findAllPagesForWebsite = (wid) => {
    return PageModel.find({websiteId: wid});
}

//create new pages
PageModel.createPage = (page) => {
   return PageModel.create(page);
}

// find page by id
PageModel.findPageById = (pid) => {
    return PageModel.findById(pid);
  }
  
  // Delete
  PageModel.deletePage = (pid) => {
    return PageModel.deleteOne({_id: pid});
  }
  
  // Update
  PageModel.updatePage = (page) => {
    return PageModel.updateOne({_id: page._id}, page);
  }

module.exports = PageModel;