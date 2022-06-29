const Joi = require('joi');
const talkerService = require('../services/talkerService');

const talkerController = {
  async getTalkers(_req, res) {
    const result = await talkerService.getTalkers();
  return res.status(200).json(result);
  },

  async getTalker(req, res) {
    const { id } = req.params;
    const talker = await talkerService.getTalker(Number(id));
    if (!talker) res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
   return res.status(200).json(talker);
  },

  async validateToken(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    try {
      await talkerService.validateToken(authorization);
    } catch (e) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    next();
  },

  async verifyName(req, res, next) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    try {
      const schema = Joi.object({
        name: Joi.string().min(3),
      });
      await schema.validateAsync({ name });
    } catch (e) {
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
  },

  async verifyAge(req, res, next) {
    const { age } = req.body;
    const schema = Joi.object({
      age: Joi.number().greater(17),
    });
    if (!age) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    try {
      await schema.validateAsync({ age });
    } catch (e) {
      return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
  },

  async verifyTalk1(req, res, next) {
    const { talk } = req.body;
    if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });

    const { watchedAt } = talk;
    if (!watchedAt) return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    const validDate = await talkerService.validateWatchedAt(watchedAt);
    if (!validDate) {
     return res.status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
      }
    
    next();
  },

  async verifyTalk2(req, res, next) {
    const { talk } = req.body;
    const { rate } = talk;
    if (!rate && rate !== 0) {
      return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
    try {
      await talkerService.validateRate(rate);
    } catch (e) {
      return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
  },
  
  async add(req, res) {
    const talker = req.body;
    const newTalker = await talkerService.add(talker);
    return res.status(201).json(newTalker);
  },

  async edit(req, res) {
    const { id } = req.params;
    const { body } = req;
    const editTalker = await talkerService.edit(id, body);
    res.status(200).json(editTalker);
  },

  async delete(req, res) {
    const id = Number(req.params.id);
    await talkerService.delete(id);
    res.status(204).send();
  },

  async query(req, res) {
    const { query } = req;
    const result = await talkerService.search(query);
    res.status(200).json(result);
  },
};

module.exports = talkerController;  