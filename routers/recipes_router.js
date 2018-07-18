const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;


const recipesRouter = function(recipesCollection) {
  //index
  router.get('/', (req, res) => {
    recipesCollection
      .find()
      .toArray()
      .then( (docs) => res.json(docs))
  });

  //show
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    recipesCollection
      .find({ _id: ObjectID(id)})
      .toArray()
      .then( (docs) => res.json(docs))
  });

  router.post('/', (req, res) => {
    const newRecipe = req.body.recipeData;
    recipesCollection
      .insert(newRecipe)
      .then( () => {
        recipesCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
        });
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedRecipe = req.body.recipeData;
    recipesCollection
      .updateOne(
        { _id: ObjectID(id)},
        { $set: updatedRecipe },
        { upsert: true }
      )
      .then( () => {
        recipesCollection
          .find({ _id: ObjectID(id)})
          .toArray()
          .then( (docs) => res.json(docs))
      })
  });

  router.delete('/all', (req, res) => {
    recipesCollection
      .deleteMany({})
      .then( () => {
        recipesCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
        });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    recipesCollection
      .deleteOne({ _id: ObjectID(id)})
      .then( () => {
        recipesCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
      });
  });

  return router;
};


module.exports = recipesRouter ;
