'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = () => {
    return  User
    .find({});
}

exports.getById = (id) => {
    return User
    .findById(id)
}

exports.create = (data) => {
    var user = new User(data);
    return user.save()
}

exports.update = (id, data) =>{
    return User
    .findByIdAndUpdate(id, {
        $set: { 
            name: data.name,
            email: data.email,
            password: data.password
        }
    })
}

exports.delete = (id) => {
    return User
    .findByIdAndDelete(id);
}