import { spoonacularRecipes } from '../data/spoonacular';

// Diet types supported by Spoonacular
export type DietType =
  | 'gluten free'
  | 'ketogenic'
  | 'vegetarian'
  | 'lacto-vegetarian'
  | 'ovo-vegetarian'
  | 'vegan'
  | 'pescetarian'
  | 'paleo'
  | 'primal'
  | 'low FODMAP'
  | 'whole30';

// Meal types supported by Spoonacular
export type MealType =
  | 'main course'
  | 'side dish'
  | 'dessert'
  | 'appetizer'
  | 'salad'
  | 'bread'
  | 'breakfast'
  | 'soup'
  | 'beverage'
  | 'sauce'
  | 'marinade'
  | 'fingerfood'
  | 'snack'
  | 'drink';

export type TRecipe = (typeof spoonacularRecipes)[number];
