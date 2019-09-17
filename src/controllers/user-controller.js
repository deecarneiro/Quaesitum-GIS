'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = (req, res, next) => {
    User
    .find({})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    User
    .findById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    })
}

exports.post = (req, res, next) => {
    console.log("AAAAAA");
    console.log(req.body);
    var user = new User(req.body);
    user.save() //Saving user in database
        .then(e => {
            console.log(e);
            res.status(201).send({
                message: 'Usuário cadastrado com sucesso'
            });
        }).catch(e => {
            console.log(e);
                res.status(400).send({
                    message: 'Falha ao cadastrar usuário',
                    data: e
                })
        });
};

exports.put = (req, res, next) => {
    User
    .findByIdAndUpdate(req.params.id, {
        $set: { 
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    }).then( x => {
        res.status(200).send({
            message: 'Usuário atualizado com sucesso'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao atualizar usuário',
            data: e
        });
    });
};

exports.delete = (req, res, next) => {
    User
    .findOneAndRemove(req.body.id)
    .then(x => {
        res.status(200).send({
            message: 'Usuário removido com sucesso'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover produto',
            data: e
        });
    });
};
