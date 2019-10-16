'use strict';

const ValidatorContract = require('../validators/fluent-validator');
const repository = require('../repositories/user-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');
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
        });
        
        // mailService.send(req.body.email, 'Bem vindo ao Quaesitum', global.EMAIL_TEMPL.replace('{0}', req.body.name));
        res.status(200).send({
            message: 'Usuário atualizado com sucesso'
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
            email : req.body.email,
            password : md5(req.body.password+global.SALT_KEY)
        })

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

exports.authenticate = async(req, res, next) => {
    let contract = new ValidatorContract();
    contract.isEmail(req.body.email, 'Deve ser informado um email válido');
    contract.isPassword(req.body.password, 'Uma senha deve ter pelo oito caracteres a doze caracteres, com pelo menos uma letra minúscula, uma letra maiúscula, um caracter numérico e um especial.')
    
    if (!contract.isValid()){
        res.status(400).send(contract.erros()).end();
        return;
    }
   try{
        const user = await repository.authenticate({
            email : req.body.email,
            password : md5(req.body.password+global.SALT_KEY)
        });
        if(!user){
            res.status(400).send({
                message : "Usuário ou senha inválidos"
            });
            return;
        }
        const token = await authService.generateToken(
            {
            _id : user.id,
            email: user.email, 
            name: user.name
        })
        res.status(201).send({
            token : token,
            data:{
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
        }catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
};

exports.refreshToken = async(req, res, next) => {
 
   try{
        const token = req.body.token || req.query.token || req.headers['x-access-token'];

        const data = await authService.decodeToken(tokenRefresh);

        const user = await repository.getById(data.id);

        if(!user){
            res.status(401).send({
                message : "Usuário não encontrado"
            });
            return;
        }
        const tokenData = await authService.generateToken(
            {
            _id : user.id,
            email: user.email, 
            name: user.name
        })
        res.status(201).send({
            token : token,
            data:{
                email: user.email,
                name: user.name
            }
        });
        }catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
};