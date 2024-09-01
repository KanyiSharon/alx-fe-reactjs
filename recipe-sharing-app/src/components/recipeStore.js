import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (recipeId) => {
    set((state) => {
      const newRecipes = state.recipes.filter(
        (recipe) => recipe.id !== recipeId
      );
      return { recipes: newRecipes };
    });
  },
}));
export default useRecipeStore;
