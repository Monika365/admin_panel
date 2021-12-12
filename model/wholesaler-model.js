// user - name, age, address
const mongoose = require('../db');
const Schema = mongoose.Schema;
const wholesalerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: Number,
    },
    reatiler: {
        type: Schema.Types.ObjectId,
        ref:'retailer',
        required: true
    },
   amount:{
    type: Number,
    required: true
   }
});

module.exports = mongoose.model('wholesaler', wholesalerSchema);