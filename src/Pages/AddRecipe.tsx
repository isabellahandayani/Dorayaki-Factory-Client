import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import RecipeServices from "Service/RecipeServices";
import BahanServices from "Service/BahanServices";
import TableBahan from "../Components/TableBahan";

interface bahanProps {
  nama_bahan: string;
  qty: number;
}

const AddRecipe = () => {
  const [nama, setNama] = useState<any>("");
  const [bahan, setBahan] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>("");
  const [qty, setQty] = useState<any>(1);
  const [bahanRecipe, setBahanRecipe] = useState<Array<bahanProps>>([]);

  const handleSubmit = async () => {
    if (nama !== undefined && bahanRecipe !== undefined) {
      await RecipeServices.createDorayaki({ dorayaki_name: nama });
      let data = await (await RecipeServices.getAll()).data.data;
      let bahanData = await (await BahanServices.getAll()).data.data;
      let dorayaki = await data.filter(
        (item: any) => item.dorayaki_name === nama
      );
      bahanRecipe.forEach((item: any) => {
        RecipeServices.createRecipe({
          id_dorayaki: dorayaki[0].id,
          id_bahan: bahanData.filter(
            (row: any) => row.nama_bahan === item.nama_bahan
          )[0].id,
          qty: item.qty,
        });
      });
    }
  };

  useEffect(() => {
    getBahan();
  }, []);

  const handleAdd = () => {
    if (qty && selected) {
      setBahanRecipe([...bahanRecipe, { nama_bahan: selected, qty: qty }]);

      const newBahan = bahan.filter((item) => item.nama_bahan !== selected);
      setBahan(newBahan);
      setQty(1);
      setSelected(null);
    }
  };

  const handleDelete = (name: string) => {
    const newBahanRecipe = bahanRecipe.filter(
      (item) => item.nama_bahan !== name
    );
    setBahan([...bahan, { nama_bahan: name }]);
    setBahanRecipe(newBahanRecipe);
  };

  const getBahan = () => {
    BahanServices.getAll()
      .then((response) => {
        setBahan(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
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
        <Typography variant="h4" color="white">
          Add Recipe
        </Typography>
      </Box>
      <form>
        <Box
          bgcolor="primary.main"
          sx={{
            borderRadius: 5,
            maxWidth: "90%",
            mx: "auto",
            mt: 4,
            p: 2,
          }}
        >
          <TextField
            rows={1}
            sx={{
              display: "block",
              input: { color: "white" },
              maxWidth: "95%",
              mx: "auto",
              my: 2,
            }}
            onChange={(e) => setNama(e.target.value)}
            label="Nama"
            variant="outlined"
            size="small"
            type="text"
            InputProps={{ inputProps: { min: 1, fontSize: 24 } }}
            InputLabelProps={{ style: { fontSize: 24, color: "white" } }}
            fullWidth
            required
          />

          <Box
            sx={{
              mx: "auto",
              maxWidth: "95%",
            }}
          >
            <FormControl
              sx={{
                width: "70%",
              }}
              size="small"
              required
            >
              <InputLabel
                id="select-bahan"
                style={{ color: "white", borderColor: "white", fontSize: 24 }}
              >
                Bahan
              </InputLabel>
              <Select
                rows={1}
                value={selected}
                label="Bahan"
                onChange={(e) => setSelected(e.target.value)}
                style={{ color: "white", borderColor: "white" }}
              >
                {bahan &&
                  bahan.map((item) => {
                    return (
                      <MenuItem value={item.nama_bahan}>
                        {item.nama_bahan}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <TextField
              rows={1}
              value={qty}
              sx={{
                input: { color: "white" },
                maxWidth: "10%",
                ml: 2,
                borderColor: "white",
              }}
              label="Qty"
              variant="outlined"
              size="small"
              type="number"
              InputProps={{
                inputProps: { min: 1, fontSize: 24, color: "white" },
              }}
              InputLabelProps={{ style: { fontSize: 24, color: "white" } }}
              fullWidth
              required
              onChange={(e) => setQty(e.target.value)}
            />
            <Button
              sx={{
                color: "white",
                width: 200,
                fontSize: 24,
                borderRadius: 2,
                display: "inline",
                ml: 5,
                mt: 1,
              }}
              variant="contained"
              color="secondary"
              onClick={() => handleAdd()}
            >
              Tambah
            </Button>
          </Box>

          {bahanRecipe && (
            <TableBahan onClick={handleDelete} props={bahanRecipe} isEdit={true}></TableBahan>
          )}

          <Box textAlign="center">
            <Button
              sx={{
                color: "white",
                width: "95%",
                fontSize: 24,
                borderRadius: 2,
                display: "inline",
                mx: "auto",
                mt: 10,
              }}
              variant="contained"
              color="info"
              onClick={() => handleSubmit()}
            >
              Konfirmasi
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default AddRecipe;
