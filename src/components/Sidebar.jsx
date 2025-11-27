

const Sidebar = ({ 
    recipeQueue, 
    handleRemove, 
    prepareRecipe, 
    calculateTimeAndCalories,
    totalTime,
    totalCalories
 }) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-800 p-2 bg-base-100 ">
           {/* want to cook table */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl text-center text-shadow-gray-800 pb-4 ">Want to Cook: {recipeQueue.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {recipeQueue.map((recipe , index) =>(
                    <tr className="hover:bg-base-300" key={index}>
                            <th>{index+1}</th>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                            <td>
                                <button onClick = {()=> {
                                handleRemove(recipe.recipe_id)
                                calculateTimeAndCalories(recipe.preparing_time,
                                recipe.calories)
                                }}  
                                className=" bg-green-400 rounded-2xl  text-gray-800 px-2 py-1 md:py-2 md:px-4  my-2  font-medium">Preparing</button>
                            </td>
                        
                        </tr> 
                    ))}
                        
                        
                    </tbody>
                </table>
            </div>

          {/* Currently Cooking table */}

          <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl text-center text-shadow-gray-800 pb-4 ">Currently Cooking: {prepareRecipe.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {prepareRecipe.map((recipe , index) =>(
                    <tr className="hover:bg-base-300" key={index}>
                            <th>{index+1}</th>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                        </tr> 
                    ))}

                    <tr className="border-none">
                            <th></th>
                            <td></td>
                            <th>Total Time = {totalTime}</th>
                            <th>Total Calories = {totalCalories}</th>
                            
                    </tr>
                        
                        
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Sidebar;