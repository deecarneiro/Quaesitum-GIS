'use strict';

const repository = require('../repositories/map-repository');

exports.get = async(req, res, next) => {
    try{
    var data = await repository.get()
    res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
};