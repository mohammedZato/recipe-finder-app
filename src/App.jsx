import React from "react";
import RecipeFinder from "./components/recipeFinder";
import RecipeInfo from "./components/recipeInfo";

function App() {

  return (
    <div className="bg-[url('./image/image3.png')] bg-cover bg-center h-full min-h-screen bg-red-200 lg:bg-[url('./image/image2.png')]">
      <RecipeFinder />
      <RecipeInfo />
    </div>
  )
}

export default App
