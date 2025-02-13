import React from "react";
import recipeStore from "../store/store";

export default function RecipeFinder() {
    const { recipeText, setRecipeText, fetchRecipe, } = recipeStore();
    console.log(recipeText)
    return (
        <div>
            <div className="pt-12 lg:pt-16">
                <header className="text-white text-2xl font-bold text-center mb-3 mx-2 sm:mb-8 md:text-3xl">
                    Discover Delicious Recipes Tailored To Your Taste!
                </header>
                <div className="flex items-center justify-center">
                    <form>
                        <input 
                            className="text-black placeholder:text-black py-3 w-[16rem] px-3 mr-2 rounded outline-none sm:w-[22rem] sm:mr-4 md:w-[28rem] md:mr-4 lg:w-[35rem] lg:mr-4"
                            type="text" 
                            placeholder="Search for a recipe... (e.g., Pasta, Vegan)"
                            id="recipe-text"
                            value={recipeText}
                            onChange={(event) => setRecipeText(event.target.value)}
                        />
                    </form>
                    <span onClick={fetchRecipe} className="text-white sm:hidden">
                        <ion-icon class="text-5xl cursor-pointer" name="search-circle"></ion-icon>
                    </span>
                    <button onClick={fetchRecipe} className="bg-gray-700 text-gray-100 font-medium px-[-5px] hidden sm:block">Seach Recipe</button>
                </div>
            </div>
        </div>
    )
}