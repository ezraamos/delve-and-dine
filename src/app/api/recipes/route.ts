import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    let ingredients = req.nextUrl.searchParams.get('ingredients') || '';
    const diet = req.nextUrl.searchParams.get('diet') || undefined;
    const mealType = req.nextUrl.searchParams.get('mealType') || undefined;

    ingredients = ingredients
      .split(',')
      .map((ingredient) => ingredient.trim().replace(/\s+/g, ' '))
      .join(',');

    const params = {
      includeIngredients: ingredients,
      diet: diet,
      type: mealType,
      number: 10,
      fillIngredients: true,
      addRecipeInformation: true,
      sort: 'max-used-ingredients',
    };

    const res = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch',
      {
        params,
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.SPOONACULAR_API_KEY,
        },
      }
    );
    const data = res.data;
    return Response.json(data);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return Response.json({ error: 'Failed to fetch recipes' }, { status: 500 });
  }
}
