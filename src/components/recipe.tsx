import { TRecipe } from '@/lib/types/spoonacular';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

const Recipe = ({ recipe }: { recipe: TRecipe }) => {
  return (
    <Card className='w-full max-w-md overflow-hidden flex flex-col m-5 p-2 bg-stone-800'>
      <div className='flex items-center bg-stone-700 rounded-t-lg'>
        <CardHeader className='h-fit'>
          <CardTitle className='text-2xl font-bold text-stone-300 '>
            {recipe.title}
          </CardTitle>
        </CardHeader>
        <Image
          src={recipe.image}
          alt={recipe.title}
          style={{ objectFit: 'cover' }}
          className='min-w-[13rem] hidden sm:block'
          width={312}
          height={231}
        />
      </div>
      <div className='flex items-center justify-center  rounded-b-lg bg-white'>
        <ScrollArea className='h-32  px-2 pb-2 pt-5 '>
          <ul className='flex flex-wrap gap-1 justify-center'>
            {recipe.usedIngredients.map((ingredient) => (
              <li key={ingredient.id} className='flex items-center'>
                <Badge className='m-0.5 bg-stone-600 text-stone-200'>
                  {ingredient.name}
                </Badge>
              </li>
            ))}
            {recipe.missedIngredients.map((ingredient) => (
              <li key={ingredient.id} className='flex items-center'>
                <Badge className='m-0.5 bg-stone-300 text-stone-800'>
                  {ingredient.name}
                </Badge>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </Card>
  );
};

export default Recipe;
