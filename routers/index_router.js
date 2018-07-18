const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const recipesRouter = require('./recipes_router.js');

MongoClient.connect('mongodb://guest:guestPassword1@ds243041.mlab.com:43041/heroku_zbrlbmhv', (err, client) => {
  const db = client.db('heroku_zbrlbmhv');
  const recipesCollection = db.collection('recipes');
  router.use('/api/recipes', recipesRouter(recipesCollection));
});

module.exports = router;
