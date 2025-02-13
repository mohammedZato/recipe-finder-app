import React from "react";
import recipeStore from "../store/store";

export default function RecipeInfo() {
    const { data, loading, error, } = recipeStore();
    console.log(data);
    if (loading) return <p className="text-white font-bold text-2xl">Fetching Recipe...please wait</p>
    if (!data) return <p className="text-white font-bold text-2xl">Oops! No Recipe Found, Try Again</p>
    if (error) return <p className="text-white font-bold text-2xl">Error: {error}</p> 

    return (
        <div className=" rounded h-2/3 mt-10 mx-4">
            {
                data &&
                data.map(recipe => {
                    return (
                        <div key={recipe.idMeal} className="flex flex-col mx-2 py-2">  
                        <div className="sm:flex justify-center space-x-5 md:space-x-16 lg:space-x-24">
                            <div>
                                <img 
                                    src={recipe.strMealThumb} 
                                    alt={recipe.strMeal} 
                                    className="size-44 rounded sm:size-60"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-medium text-white">{recipe.strMeal}</h2>
                                <div className="mt-3">
                                    <ul>
                                        <li className="text-white text-base list-disc ml-5 sm:text-lg">{recipe.strIngredient1}</li>
                                        <li className="text-white text-base list-disc ml-5 sm:text-lg">{recipe.strIngredient2}</li>
                                        <li className="text-white text-base list-disc ml-5 sm:text-lg">{recipe.strIngredient3}</li>
                                        <li className="text-white text-base list-disc ml-5 sm:text-lg">{recipe.strIngredient4}</li>
                                        <li className="text-white text-base list-disc ml-5 sm:text-lg">{recipe.strIngredient5}</li>
                                        <li className="text-white text-base list-disc ml-5 sm:text-lg">{recipe.strIngredient6}</li>
                                        <li className="text-white text-base list-disc ml-5 sm:text-lg">{recipe.strIngredient7}</li>
                                        <li className="text-white text-base list-disc ml-5 sm:text-lg">{recipe.strIngredient8}</li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                        <div>
                            <p className="text-white mt-3 text-justify sm:text-lg"><strong className="text-xl">Instructions: </strong>{recipe.strInstructions}</p>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}