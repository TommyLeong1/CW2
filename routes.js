const express = require('express');
const router = express.Router();
const Pet = require('./db');

// 定義API端點和路由處理程序
router.get('/pets', async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

router.post('/pets', async (req, res) => {
  const pet = new Pet(req.body);
  await pet.save();
  res.json(pet);
});

router.put('/pets/:id', async (req, res) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(pet);
});

router.delete('/pets/:id', async (req, res) => {
  const pet = await Pet.findByIdAndDelete(req.params.id);
  res.json(pet);
});

module.exports = router;