'use client';
import React from 'react';
import Recipe from './recipe';

import { useSearchedRecipes } from '@/lib/store/searched-recipes.store';

const Recipes = () => {
  const recipes = useSearchedRecipes((state) => state.recipes);

  return (
    <section className='flex flex-col justify-center items-center'>
      {recipes.map((recipe) => (
        <React.Fragment key={recipe.id}>
          <Recipe recipe={recipe} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Recipes;
