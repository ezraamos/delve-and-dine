import { dietTypes, mealTypes } from '@/lib/data/spoonacular';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { DietType, MealType } from '@/lib/types/spoonacular';
import { useEffect, useState } from 'react';
import { useSearchedRecipes } from '@/lib/store/searched-recipes.store';

const Filter = () => {
  const setFilteredRecipes = useSearchedRecipes(
    (state) => state.setFilteredRecipes
  );
  const recipes = useSearchedRecipes((state) => state.recipes);
  const [dietType, setDietType] = useState<DietType | string | undefined>(
    undefined
  );
  const [mealType, setMealType] = useState<MealType | undefined | string>(
    undefined
  );

  useEffect(() => {
    if (!dietType && !mealType) {
      setFilteredRecipes(recipes);
    } else {
      const _filteredRecipes = recipes.filter((recipe) => {
        const matchesDiet = dietType ? recipe.diets.includes(dietType) : true;
        const matchesMealType = mealType
          ? recipe.dishTypes.includes(mealType)
          : true;

        // Check for specific diet attributes if dietType is 'vegan' or 'vegetarian' or 'gluten free' (not included in diets values)'
        const isVegan = dietType === 'vegan' ? recipe.vegan : true;
        const isVegetarian =
          dietType === 'vegetarian' ? recipe.vegetarian : true;

        const isGlutenFree =
          dietType === 'gluten free' ? recipe.glutenFree : true;

        return (
          matchesDiet &&
          matchesMealType &&
          isVegan &&
          isVegetarian &&
          isGlutenFree
        );
      });

      setFilteredRecipes(_filteredRecipes);
    }
  }, [dietType, mealType, recipes, setFilteredRecipes]);

  return (
    <div className='flex flex-col gap-3 sm:flex-row items-center my-5 justify-center '>
      <Select
        onValueChange={(value: DietType | string) => {
          if (value === 'none') {
            setDietType(undefined);
          } else {
            setDietType(value);
          }
        }}
        defaultValue={dietType}
        value={dietType || ''}
      >
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Filter by diet type' />
        </SelectTrigger>

        <SelectContent>
          <SelectItem key='none' value='none'>
            None
          </SelectItem>
          {dietTypes.map((diet) => (
            <SelectItem key={diet} value={diet}>
              {diet.charAt(0).toUpperCase() + diet.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value: MealType | string) => {
          if (value === 'none') {
            setMealType(undefined);
          } else {
            setMealType(value);
          }
        }}
        defaultValue={mealType}
        value={mealType || ''}
      >
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Filter by meal type' />
        </SelectTrigger>

        <SelectContent>
          <SelectItem key='none' value='none'>
            None
          </SelectItem>
          {mealTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
