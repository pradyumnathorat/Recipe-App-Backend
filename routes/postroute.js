const express = require('express');

const recipeModel = require('../models/recipe');


const router = express.Router();
router.use(express.json());




router.post('/upload', async (req, res) => {
  try {
    const { title, author, ingredients, description, url } = req.body;
    console.log(req.body);
    const recipe = await recipeModel.create({
      title: title,
      author: author,
      ingredients: ingredients,
      description: description,
      url: url,
      user: req.user.data
    })
    return res.send({ message: 'File uploaded successfully.' });
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
});

router.get('/upload', async (req, res) => {
  try {
    const recipies = await recipeModel.find({ user: req.user.data });
    res.status(200).json({
      data: recipies
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
})

module.exports = router;