import { useEffect, useState } from "react";

const Recipes = ({addRecipeToQueue}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('../../public/recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])


    return (
        <div className="md:w-2/3">
            <div className=" inter grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                {recipes.map(recipe =>
                    <div key={recipe.recipe_id} className="card bg-base-100   shadow-sm">
                        <figure className="px-8 pt-6">
                            <img className="w-full  md:h-[380px] rounded-2xl"
                                src={recipe.recipe_image}
                                alt="Recipe Image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg font-bold">{recipe.recipe_name}</h2>
                            <p className="text-gray-500 text-base pb-3"> {recipe.short_description} </p>
                            <hr className="text-gray-300 pt-3" />
                            <h3 className="text-lg font-medium">Ingredients:  {recipe.ingredients.length} </h3>
                            <ul className="ml-8">
                                {recipe.ingredients.map((item, index) =>
                                <li className=" list-disc text-gray-500 " key={index}>{item}</li> )}
                            </ul>
                            <div className="flex gap-8 text-gray-500">
                                <div className="flex items-center gap-2">
                                    <p><i className="fa-regular fa-clock text-lg"></i></p>
                                    <p> {recipe.preparing_time} Minutes </p>
                                </div>
                                <div className="flex gap-2">
                                  <p><i className="fa-solid fa-fire text-lg"></i></p>
                                    <p> {recipe.calories} Calories </p>
                                </div>


                            </div>

                            <div className="card-actions ">
                                <button onClick={() => addRecipeToQueue(recipe)} className="btn bg-green-400 rounded-2xl text-lg text-gray-800 px-6 mt-6 font-medium"> Want to Cook</button>
                            </div>
                        </div>
                    </div>

                )}

            </div>
        </div>
    );
};

export default Recipes;