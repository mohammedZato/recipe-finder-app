import { create } from "zustand";

const recipeStore = create((set, get) => {
    return {
        recipeText: "",
        setRecipeText: (value) => {
            set({recipeText: value})
        },
        data: [],
        loading: false,
        error: null,
        fetchRecipe: async() => {
            const query = get().recipeText; //Get current input value

            if (!query) return; // Avoid empty API calls

            set({loading: true, error: null}) // set loading state before data fetch
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
                const result = await response.json()
                set({
                    data: result.meals,
                    loading: false
                })
            } catch (error) {
                set({error: error.message, loading: false})
            }
        }
    }
});

export default recipeStore;























