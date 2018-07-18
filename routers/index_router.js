const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const recipesRouter = require('./recipes_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('recetarium');
  const recipesCollection = db.collection('recipes');
  router.use('/api/recipes', recipesRouter(recipesCollection));
});

module.exports = router;
