const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const taskSchema = mongoose.Schema({
    name: {type: String, required: true},
    name: {type: Boolean, default: false},
    checklist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checklist',
        required: true
    }
});

modelNames.exports = mongoose.model('Task', taskSchema);