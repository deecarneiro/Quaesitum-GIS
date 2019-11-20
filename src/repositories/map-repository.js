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
    .findById(id)
    return res;
}
exports.getByUser = async(userId) => {
    const res = await Map
    .find({userId : userId})
    return res;
}

exports.create = async(data) =>{
    var map = new Map(data);
    await map.save();
}

exports.update = async(id, data) =>{
    var date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    await Map
    .findByIdAndUpdate(id, {
        $set:{
            name: data.name,
            description: data.description,
            baseMap: data.baseMap,
            layers: data.layers,
            updated: new Date().toJSON().slice(0,10).replace(/-/g,'/')
        }
    })
}

exports.delete = async(id) => {
    await Map
    .findByIdAndDelete(id);
}