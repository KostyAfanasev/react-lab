import { recipes } from './data';

// Извлечен компонент Recipe
type RecipeProps = {
  id: string;
  name: string;
  ingredients: string[];
};

function Recipe({ id, name, ingredients }: RecipeProps) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}