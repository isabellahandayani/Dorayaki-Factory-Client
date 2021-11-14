import { useEffect, useState } from "react";
import RecipeServices from "../Service/RecipeServices";
import CardResep from "Components/CardResep";

const ReadRecipe = () => {
  const [recipe, setRecipe] = useState<any[]>([]);
  
  useEffect(() => {
    initialize();
  }, []);

  const initialize = () => {
    RecipeServices.getAll()
      .then((response) => {
        setRecipe(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      {recipe &&
        recipe.map((item) => {
          return <CardResep props={item.dorayaki_name} />;
        })}
    </>
  );
};

export default ReadRecipe;
