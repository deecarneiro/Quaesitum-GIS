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

exports.getById = async(req, res, next) => {
    try{
        var data = await repository.getById(req.params.id)
            res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
   
}

exports.getByUser = async(req, res, next) => {
    try{
        var data = await repository.getByUser(req.params.userId)
            res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
   
}

exports.post = async(req, res, next) => {
        
        try{
            await repository.create(req.body);
            res.status(200).send({
                message: 'Mapa criado com sucesso'
            });
        }catch (e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        };
};

exports.put = async(req, res, next) => {
    await repository.update(req.params.id, 
        {   name : req.body.name,
            description: req.body.description,
            baseMap: req.body.baseMap
        })

    try{
        res.status(200).send({
            message: 'Mapa atualizado com sucesso'
    });
    }catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
};

exports.delete = async(req, res, next) => {
   try{
       await repository.delete(req.params.id);
       res.status(200).send({
        message: 'Mapa removido com sucesso'
    });
   }catch (e){
    res.status(500).send({
        message: 'Falha ao processar sua requisição'
    });
};
    
};
