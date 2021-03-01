const {Schema, model} = require('mongoose');

const ProductSchema = Schema({
    title : {
        type: String,
        require: true
    },
    price : {
        type: Number,
        require: true
    },
    condition : {
        type: String,
        default: 'new'
    },
    description : {
        type: String,
        require: true
    },
    enabled : {
        type: Boolean,
        default: true
    },
    ts_created : {
        type: Date,
        default: date.now
    },
    available_quantity : {
        type: Number,
        require: true
    }
});


module.exports = model("products", ProductSchema);