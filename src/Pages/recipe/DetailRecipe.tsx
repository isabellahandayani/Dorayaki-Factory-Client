import TableBahan from "Components/TableBahan";
import { Box, Typography } from "@mui/material";
import RecipeServices from "Service/RecipeServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "Context/Auth";

const DetailRecipe = () => {
  const { id } = useParams();
  const context = useAuthContext();
  const [dorayaki, setDorayaki] = useState<any>([]);

  
  useEffect(() => {
    const getDorayaki = async () => {
      RecipeServices.get(id, context.authState.jwt)
        .then((response) => {
          setDorayaki(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    getDorayaki();
  }, [id, context.authState.jwt]);

  return (
    <>
      <Box
        sx={{
          mt: 15,
        }}
      ></Box>
      {dorayaki[0] !== undefined && (
        <>
          <Box
            bgcolor="info.main"
            sx={{
              borderRadius: 5,
              maxWidth: "90%",
              mx: "auto",
              mt: 4,
              p: 2,
            }}
          >
            <Typography align="left" style={{ color: "white" }} variant="h4">
              {dorayaki[0].dorayaki_name}
            </Typography>
          </Box>

          <Box
            bgcolor="secondary.main"
            sx={{
              borderRadius: 5,
              maxWidth: "90%",
              mx: "auto",
              mt: 4,
              p: 2,
              minHeight: 500,
            }}
          >
            <Box
              sx={{
                maxWidth: "95%",
                mx: "auto",
                mt: 2,
              }}
            >
              <Typography
                align="left"
                variant="body1"
                style={{ color: "white", maxWidth: "90%" }}
              >
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
