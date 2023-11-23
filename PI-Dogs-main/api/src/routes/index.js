// routes.js
const express = require('express');
const Dog = require('../models/Dog');
const Temperament = require('../models/Temperament')

const router = express.Router();

router.get('/dogs', async (req, res) => {
  // Implementar lógica para obtener todas las razas de perros
});

router.get('/dogs/:idRaza', async (req, res) => {
  // Implementar lógica para obtener el detalle de una raza específica
});

router.get('/dogs/name', async (req, res) => {
  // Implementar lógica para buscar razas por nombre
});

router.post('/dogs', async (req, res) => {
  // Implementar lógica para crear un nuevo perro
});

router.get('/temperaments', async (req, res) => {
  // Implementar lógica para obtener todos los temperamentos
});

module.exports = router;
