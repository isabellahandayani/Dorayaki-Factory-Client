import { useEffect, useState } from "react";
import RecipeServices from "../Service/RecipeServices";
import CardResep from "Components/CardResep";

const ReadRecipe = () => {
  const [recipe, setRecipe] = useState<any[]>([]);
  
  useEffect(() => {
    initialize();
  }, []);

  const handleRedirect = (id: any) => {
    // console.log(id)
    window.location.href = `/dorayaki/${id}`;
  }

  const initialize = () => {
    RecipeServices.getAll()
      .then((response) => {
        setRecipe(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      {recipe &&
        recipe.map((item) => {
          return <CardResep props={item.dorayaki_name} id={item.id} onClick = {handleRedirect} />;
        })}
    </>
  );
};

export default ReadRecipe;
