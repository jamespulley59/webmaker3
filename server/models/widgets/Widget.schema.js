const mongoose = require('mongoose');

const WidgetSchema = mongoose.Schema(
    {
        pageId: {type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'}, 
        widgetType: {type: String, enum:["HEADING", "IMAGE", "YOUTUBE"]},
        size: Number,
        name: String,
        text: String,
        url: String,
        width: String,
        dateCreated: { type: Date, default: Date.now }
    },
    {collection: 'widget'}
)

module.exports = WidgetSchema;