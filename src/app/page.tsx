import Intro from '@/components/intro';
import Recipes from '@/components/recipes';
import Search from '@/components/search';

export default function Home() {
  return (
    <>
      <Intro />
      <Search />
      <Recipes />
    </>
  );
}
