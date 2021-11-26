import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material/";
import Request from "Model/Request";
import { useAuthContext } from "Context/Auth";
import { validateRequest } from "Service/RequestServices";
import RecipeServices from "Service/RecipeServices";
import BahanServices from "Service/BahanServices";
import moment from "moment";


interface Props {
  request: Request;
  commonFunction: () => void;
}

const CardRequest: React.FC<Props> = ({ request, commonFunction }) => {
  const context = useAuthContext();

  const [dorayakiName, setDorayakiName] = useState<string>("");
  const [bahan, setBahan] = useState<any []>([]);
  const [stok, setStok] = useState<any []>([]);

  const getDorayakiName = async (id_dorayaki: number) => {
    await RecipeServices.get(id_dorayaki, context.authState.jwt)
      .then((res) => {
        setDorayakiName(res.data.data[0].dorayaki_name);
        setBahan(res.data.data);
      })
      .catch((e) => console.log(e));

    await BahanServices.getAll(context.authState.jwt)
      .then((res) => {
        setStok(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  const handleValidateRequest = async (is_valid: boolean) => {
    let qty = request.stok_added;
    let enough = true;
    if(is_valid) {
      bahan.forEach(element => {
        let stock = stok.filter(e => e.nama_bahan === element.nama_bahan);
        if(element.qty * qty > stock[0].stok) {
          alert("Stok Kurang")
          enough = false;
          return;
        } 
      });
    }

    if (enough && is_valid) {
      stok.forEach(async element => {
        console.log(element);
        let newStock = bahan.filter(e => e.nama_bahan === element.nama_bahan);
        if(newStock.length > 0) {
          element.stok -= qty * newStock[0].qty;
          await BahanServices.update(element, context.authState.jwt)
          .then((res) => console.log(res))
          .catch((e) => console.log(e));
        }
      });
    }

    if((is_valid && enough) || !is_valid) {
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
    }
  };

  useEffect(() => {
    getDorayakiName(request.id_dorayaki);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request]);

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
        {console.log(dorayakiName)}
        <Typography align="left" variant="body1" color="white" >{request.createdAt ? moment(request.createdAt).format("DD-MM-YYYY h:mm:ss") : null}</Typography>
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
