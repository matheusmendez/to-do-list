const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const checklistSchema = mongoose.Schema({
    name: {type: String, required: true},
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
});

modelNames.exports = mongoose.model('Checklist', checklistSchema);