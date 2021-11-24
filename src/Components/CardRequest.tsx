import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material/";
import Request from "Model/Request";
import { useAuthContext } from "Context/Auth";
import { validateRequest } from "Service/RequestServices";
import RecipeServices from "Service/RecipeServices";

interface Props {
  request: Request;
  commonFunction: () => void;
}

const CardRequest: React.FC<Props> = ({ request, commonFunction }) => {
  const context = useAuthContext();

  const [dorayakiName, setDorayakiName] = useState<string>("");

  const getDorayakiName = (id_dorayaki: number) => {
    RecipeServices.get(id_dorayaki, context.authState.jwt)
      .then((res) => setDorayakiName(res.data.data[0].dorayaki_name))
      .catch((e) => console.log(e));
  };

  const handleValidateRequest = async (is_valid: boolean) => {
    try {
      await validateRequest(
        context.authState.jwt ?? "",
        request.id,
        is_valid
      );
      commonFunction();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDorayakiName(request.id_dorayaki);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      bgcolor={
        request.status === "accepted"
          ? "green"
          : request.status === "rejected"
          ? "red"
          : "secondary.main"
      }
      sx={{
        borderRadius: 5,
        maxWidth: "95%",
        mx: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mt: 4,
        padding: 2,
      }}
    >
      <Box>
        <Typography align="left" variant="body1" color="white">
          Perlu tambahan {request.stok_added} {dorayakiName}
        </Typography>
      </Box>
      {request.status === "not validated" && (
        <Box
          textAlign="right"
          sx={{
            ml: "auto",
            verticalAlign: "middle",
          }}
        >
          <Button
            sx={{
              color: "green",
              padding: 1,
              fontSize: 20,
              borderRadius: 2,
              marginRight: 8,
            }}
            variant="contained"
            color="info"
            onClick={() => handleValidateRequest(true)}
          >
            Accept
          </Button>
          <Button
            sx={{ color: "red", padding: 1, fontSize: 20, borderRadius: 2 }}
            variant="contained"
            color="info"
            onClick={() => handleValidateRequest(false)}
          >
            Reject
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CardRequest;
