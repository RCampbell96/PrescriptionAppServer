const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionsSchema = new Schema({
    Prescription:{
        type: String,
        require: true
    },
    Date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Prescriptions = mongoose.model('prescriptions', PrescriptionsSchema);