const express = require("express");
const recipes = require("./data/recipes");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", (req, res) => {



  res.render('recipes', {recipes})

});


app.get("/recipes/:recipe", (req, res) => {

const {recipe} = req.params;

 let recipeFound = recipes.find( e => {return e.name.toLowerCase()===recipe.toLowerCase()} );

 let rindexFound = recipes.findIndex( e => {return e.name.toLowerCase()===recipe.toLowerCase()} );


  res.render('recipe', {recipeFound,rindexFound})





})

const port = 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
