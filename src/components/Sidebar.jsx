

const Sidebar = ({ recipeQueue }) => {
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
                            <td>{index+1}</td>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                            <td>
                                <button onClick={() => console.log('Preparing') } className=" bg-green-400 rounded-2xl  text-gray-800 px-2 py-1 md:py-2 md:px-4  my-2  font-medium">Preparing</button>
                            </td>
                        
                        </tr> 
                    ))}
                        
                        
                    </tbody>
                </table>
            </div>

          {/* Currently Cooking table */}


        </div>
    );
};

export default Sidebar;