'use client';
import React from 'react';
import Recipe from './recipe';

import { useSearchedRecipes } from '@/lib/store/searched-recipes.store';

const Recipes = () => {
  const filteredRecipes = useSearchedRecipes((state) => state.filteredRecipes);
  if (!filteredRecipes) return;
  if (filteredRecipes.length === 0) {
    return (
      <div className='flex gap-2 text-center my-20 text-lg'>
        No found Recipes.. 😢
      </div>
    );
  }
  return (
    <section className='flex flex-col justify-center items-center'>
      {filteredRecipes.map((recipe) => (
        <React.Fragment key={recipe.id}>
          <Recipe recipe={recipe} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Recipes;
