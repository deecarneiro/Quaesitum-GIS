'user strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   title: {
        type: String,
        required: true,
        trim: true
    },
   type:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    baseMap:{
        type: String,
        required: true,
        trim: true,
    },
    created:{
        type: Date,
        required: true,
    },
    updated:{
        type:Date,
        required:false,
    }

});

module.exports = mongoose.model('Map', schema);