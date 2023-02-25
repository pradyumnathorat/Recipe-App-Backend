const express = require('express');
const multer = require('multer');
const recipeModel = require('../models/recipe');
// const { body, validationResult } = require('express-validator');
const router = express.Router();
router.use(express.json());
const fileupload = require('express-fileupload');
router.use(fileupload());



router.post("/recipe/:userID",async (req, res) => {
    const { title, author , ingredients , directions , url } = req.body;
    const user = req.params.userID;
    const recipe = new recipeModel({
        ...{ title, author , ingredients , directions , url , user}
    })
    try {
        const response = await recipe.save();
        res.status(200).json({ message: "Recipe is created", response })
    } catch (error) {
        res.status(500).json( {error :'Something went wrong'} )
    }
})


router.get("/user/recipe/:userID",async(req,res)=>{
    try {
        let recipes = await recipeModel.find({user: req.params.userID});
        res.send(recipes);
    }catch(error){
        res.json({ error: 'Something went wrong' })
    }
})

module.exports = router;