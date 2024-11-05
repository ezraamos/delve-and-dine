import { create } from 'zustand';
import { TRecipe } from '../types/spoonacular';

type TRecipesStore = {
  recipes: TRecipe[];
  setRecipes: (recipes: TRecipe[]) => void;
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
};

export const useSearchedRecipes = create<TRecipesStore>((set) => ({
  recipes: [],
  setRecipes: (recipes: TRecipe[]) => set({ recipes }),
  ingredients: [],
  setIngredients: (ingredients: string[]) => set({ ingredients }),
}));
