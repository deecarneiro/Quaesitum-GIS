'use strict';
const mongoose = require('mongoose');
const Map = mongoose.model('Map');

exports.get = async() => {
    const res = await Map
    .find({});
    return res;
}

exports.getById = async(id) =>{
    const res = await Map
    .findById({});
    return res;
}

exports.create = async(data) =>{
    var map = new Map(data);
    await map.save();
}

exports.update = async(id, data) =>{
    await Map
    findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            type: data.type,
            baseMap: data.baseMap
            
        }
    })
}