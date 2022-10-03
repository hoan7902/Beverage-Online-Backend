const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
});
const CatetogoryModel = mongoose.model('Category', schema);
module.exports = CatetogoryModel;
