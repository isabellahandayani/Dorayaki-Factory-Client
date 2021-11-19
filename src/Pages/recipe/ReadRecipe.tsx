import React from "react";
import { useEffect, useState } from "react";
import RecipeServices from "../../Service/RecipeServices";
import CardResep from "../../Components/CardResep";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

const ReadRecipe = () => {
  const [recipe, setRecipe] = useState<any[]>([]);
  let navigate = useNavigate();

  useEffect(() => {
    initialize();
  }, []);

  const handleRedirect = (id: any) => {
    navigate("/dorayaki/" + id, { replace: true });
  };

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
      <Box
        sx={{
          mt: 15,
        }}
      ></Box>
      {recipe &&
        recipe.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <CardResep
                onClick={handleRedirect}
                props={item.dorayaki_name}
                id={item.id}
              />
            </React.Fragment>
          );
        })}
      <Box textAlign="center">
        <Button
          variant="contained"
          color="success"
          sx={{
            width: "90%",
            mb: 4,
            height: 50,
            fontSize: 28,
            mt: 2,
            borderRadius: 2,
          }}
          onClick={() => {
            navigate("/dorayaki/resep/create", { replace: true });
          }}
        >
          Tambah
        </Button>
      </Box>
    </>
  );
};

export default ReadRecipe;
