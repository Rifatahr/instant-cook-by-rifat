import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]) 

  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    
  if(!isExist){
    setRecipeQueue ([...recipeQueue, recipe])
  } else{
  alert('This Recipe already exist in the queue ')
}
  }
console.log(recipeQueue)

  return (
    <div className="w-11/12 mx-auto">

      {/* Header section */}
      <Header></Header>

      {/* Banner Section */}
      <Banner></Banner>

      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>

      <section className="flex flex-col md:flex-row gap-6">
        {/* Recipes Section  */}
        <Recipes addRecipeToQueue ={addRecipeToQueue}></Recipes>

        {/* Sidebar Section */}
        <Sidebar recipeQueue ={recipeQueue}></Sidebar>
      </section>









    </div>
  );
};

export default App; 