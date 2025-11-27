import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]) 
  const [prepareRecipe, setPrepareRecipe] = useState([]) 
  const [totalTime, setTotalTime] = useState(0)  
  const [totalCalories, setTotalCalories] = useState(0)     


  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)

   
    
  if(!isExist){
    setRecipeQueue ([...recipeQueue, recipe])
  } else{
  alert('This Recipe already exist in the queue ')
}
  }

  const handleRemove = id => {
    // find which recipe have to remove

    const deleteRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

    // remove from want to cook table
    const updateQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue (updateQueue)
    setPrepareRecipe ([...prepareRecipe , deleteRecipe])

  }
   
  const calculateTimeAndCalories = (time , calorie) => {
    setTotalTime (totalTime + time)
    setTotalCalories(totalCalories + calorie)
  }
    


  

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
        <Sidebar 
        
        prepareRecipe={prepareRecipe} 
        handleRemove = {handleRemove} 
        recipeQueue ={recipeQueue}
        calculateTimeAndCalories ={calculateTimeAndCalories}
        totalTime = {totalTime}
        totalCalories ={totalCalories}
        >

        </Sidebar>
      </section>









    </div>
  );
};

export default App; 