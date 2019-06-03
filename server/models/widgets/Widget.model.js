const mongoose = require('mongoose');
const WidgetSchema = require('./Widget.schema');
const WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

// new widgets
WidgetModel.createWidget = (widget) => {
    return WidgetModel.create(widget);
}

// get widgets by page
WidgetModel.findWidgetsForPage = (pid) => {
    return WidgetModel.find({ pageId: pid });
}

//get widgets by id
WidgetModel.findWidget = (wgid) => {
    return WidgetModel.findById(wgid);
}

// delete
WidgetModel.deleteWidget = (wgid) =>{
    return WidgetModel.deleteOne({ _id: wgid});
    }

// update
WidgetModel.updateWidget = (widget) => {
    return WidgetModel.updateOne ({ _id: widget._id}, widget);
}


module.exports = WidgetModel;