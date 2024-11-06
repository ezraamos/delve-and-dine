'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useSearchedRecipes } from '@/lib/store/searched-recipes.store';
import { Badge } from './ui/badge';
import Filter from './filter';

const formSchema = z.object({
  ingredients: z.string().min(1, 'Please enter at least one ingredient'),
  diet: z.string().optional(),
  type: z.string().optional(),
});

type TFormSchema = z.infer<typeof formSchema>;
const Search = () => {
  const setRecipes = useSearchedRecipes((state) => state.setRecipes);

  const ingredients = useSearchedRecipes((state) => state.ingredients);
  const setIngredients = useSearchedRecipes((state) => state.setIngredients);

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: '',
      diet: undefined,
      type: undefined,
    },
  });

  const getRecipesByIngredients = async (data: TFormSchema) => {
    const response = await axios.get('/api/recipes', {
      params: data,
    });
    return response.data;
  };

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: getRecipesByIngredients,
    onSuccess: (data) => {
      setRecipes(data.results);
    },
  });

  const handleSubmit = (values: TFormSchema) => {
    setIngredients(
      values.ingredients
        .split(',')
        .map((ingredient) =>
          ingredient.trim().replace(/\s+/g, ' ').toLowerCase()
        )
    );
    mutate(values);
  };

  return (
    <section className='w-[min(100%,38rem)] '>
      <Form {...form}>
        <form
          className='flex flex-col gap-3'
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name='ingredients'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <div className='flex items-center justify-center gap-2'>
                      <Input
                        placeholder='Enter ingredients to find recipes, to be e.g.(egg, tomato, chicken)'
                        {...field}
                      />
                      <Button type='submit' className='bg-stone-700'>
                        {isPending ? (
                          <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-stone-400'></div>
                        ) : (
                          'Search'
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </form>
      </Form>

      <div className='my-10 flex justify-center flex-wrap'>
        {ingredients.map((ingredient, index) => (
          <Badge
            key={index}
            variant='outline'
            className='m-0.5 bg-stone-600 text-stone-200'
          >
            {ingredient}
          </Badge>
        ))}
      </div>
      {isSuccess && <Filter />}
    </section>
  );
};

export default Search;
