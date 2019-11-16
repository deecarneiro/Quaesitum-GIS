'user strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   name: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required:true,
    },
    baseMap:{
        type: String,
        required: true,
        trim: true,
    },
    created:{
        type: Date,
        default: new Date().toJSON().slice(0,10).replace(/-/g,'/')

    },
    updated:{
        type:Date,
        default: null
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'User',
    },
    layers:[{
        name: String,
        latLng: [{
            _id:false,
            lat: Number,
            lng: Number,
        }]
    }]

});

module.exports = mongoose.model("Map", schema);