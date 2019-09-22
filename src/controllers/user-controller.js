'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');
const ValidatorContract = require('../validators/fluent-validator');

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
    let contract = new ValidatorContract();
    contract.hasMinLen(req.body.name, 5, 'O nome deve ter pelo menos 5 caracteres ou mais');
    contract.isEmail(req.body.email, 'Deve ser informado um email válido');
    contract.isPassword(req.body.password, 'Uma senha deve ter pelo oito caracteres a doze caracteres, com pelo menos uma letra minúscula, uma letra maiúscula, um caracter numérico e um especial.')
    
    if (!contract.isValid()){
        res.status(400).send(contract.erros()).end();
        return;
    }
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
