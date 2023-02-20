const { Router } = require('express')
const apiRouter = Router()
const axios = require('axios');


apiRouter.get('/character/:id', async (req, res) => {
 try {
  const charId = req.params.id;
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${charId}`);
  const { id, name, image, gender, species } = response.data;
  const objeto = { id, name, image, gender, species };
  res.status(200).json(objeto);
 } catch (error) {
  res.status(500).send(error.message);
 }
})


apiRouter.get('/detail/:id', async (req, res) => {
 try {
  const charId = req.params.id;
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${charId}`);
  const { image, name, gender, status, origin, species } = response.data;
  const objeto = { image, name, gender, status, origin, species };
  res.status(200).json(objeto);
 } catch (error) {
  res.status(500).send(error.message);
 }
})

module.exports = apiRouter