const express = require("express");
const recipes = require("./data/recipes");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", (req, res) => {


  // res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // res.send(`

  //   <ul>

  //   ${recipes.map( e => `<li> <a href=/recipes/${e.name} >${e.name} </a></li>`)}

  //   </ul>

  //   `); 

  res.render('recipes', {recipes})

});


app.get("/recipes/:recipe", (req, res) => {

const {recipe} = req.params;

 let recipeFound = recipes.find( e => {return e.name.toLowerCase()===recipe.toLowerCase()} );

 let rindexFound = recipes.findIndex( e => {return e.name.toLowerCase()===recipe.toLowerCase()} );

 let images=[]; images.push('/img/Leonardo_Diffusion_XL_attractive_hot_pizza_incentive_commercia_0.jpg','/img/Leonardo_Diffusion_XL_attractive_hot_pizza_incentive_commercia_1.jpg','/img/Leonardo_Diffusion_XL_attractive_hot_pizza_incentive_commercia_2.jpg','/img/Leonardo_Diffusion_XL_attractive_hot_pizza_incentive_commercia_3jpg');

  res.render('recipe', {recipeFound,rindexFound})


  images.forEach(image =>   res.sendFile(image))


})

const port = 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
