'use strict';

const ValidatorContract = require('../validators/fluent-validator');
const repository = require('../repositories/user-repository');
const md5 = require('md5');

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

exports.post = async(req, res, next) => {
    let contract = new ValidatorContract();
    contract.hasMinLen(req.body.name, 6, 'O nome deve ter pelo menos 5 caracteres ou mais');
    contract.isEmail(req.body.email, 'Deve ser informado um email válido');
    contract.isPassword(req.body.password, 'Uma senha deve ter pelo oito caracteres a doze caracteres, com pelo menos uma letra minúscula, uma letra maiúscula, um caracter numérico e um especial.')
    
    if (!contract.isValid()){
        res.status(400).send(contract.erros()).end();
        return;
    }
   try{

        await repository.create({
            name : req.body.name,
            email : req.body.email,
            password : md5(req.body.password+global.SALT_KEY)
        })
        res.status(201).send({
            message: 'Usuário atualizado com sucesso'
    });
    }catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
};

exports.put = async(req, res, next) => {
    await repository.update(req.params.id, req.body)
    try{
        res.status(200).send({
            message: 'Usuário atualizado com sucesso'
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
        message: 'Usuário removido com sucesso'
    });
   }catch (e){
    res.status(500).send({
        message: 'Falha ao processar sua requisição'
    });
};
    
};
