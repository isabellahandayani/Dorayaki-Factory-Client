import TableBahan from "Components/TableBahan";
import { Box, Typography } from "@mui/material";
import RecipeServices from "Service/RecipeServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailRecipe = () => {
  const { id } = useParams();
  const [dorayaki, setDorayaki] = useState<any>([]);

  const getDorayaki = () => {
    RecipeServices.get(id)
      .then((response) => {
        setDorayaki(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getDorayaki();
  }, []);

  return (
    <>
      {dorayaki[0] !== undefined  && (
        <>
          <Box
            bgcolor="secondary.main"
            sx={{
              borderRadius: 5,
              maxWidth: "90%",
              mx: "auto",
              mt: 4,
              p: 2,
            }}
          >
            <Typography style={{ color: "white" }}>
              { dorayaki[0].dorayaki_name }
            </Typography>
          </Box>

          <Box
            bgcolor="primary.main"
            sx={{
              borderRadius: 5,
              maxWidth: "90%",
              mx: "auto",
              mt: 4,
              p: 2,
              minHeight: 500
            }}
          >
            <Box
              sx={{
                maxWidth: "95%",
                mx: "auto",
                mt: 2,
              }}
            >
              <Typography style={{ color: "white", maxWidth: "90%" }}>
                Daftar Bahan
              </Typography>
            </Box>
            <TableBahan isEdit={false} props={dorayaki}></TableBahan>
          </Box>
        </>
      )}
    </>
  );
};

export default DetailRecipe;
