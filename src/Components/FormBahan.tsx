import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

interface Props {
  handleSubmit: (nama_bahan: string, satuan: string, stok: number) => void;
}

const FormBahan: React.FC<Props> = ({ handleSubmit }) => {
  const [nama, setNama] = useState<string>("");
  const [satuan, setSatuan] = useState<string>("");
  const [stok, setStok] = useState<number>(1);

  return (
    <Box
      bgcolor="secondary.main"
      sx={{
        borderRadius: 2,
        p: 2,
        maxWidth: "35%",
        m: "auto",
        marginTop: 25,
        height: 400,
      }}
    >
      <TextField
        rows = {1}
        sx={{
          display: "block",
          mb: 4,
          mt: 5,
          input: { color: "white" },
          maxWidth: "80%",
          mx: "auto",
        }}
        label="Nama"
        variant="outlined"
        size="small"
        margin="normal"
        onChange={(e) => {
          setNama(e.target.value);
        }}
        fullWidth
        required
      />
      <TextField
        rows = {1}
        sx={{
          display: "block",
          mb: 4,
          input: { color: "white" },
          maxWidth: "80%",
          mx: "auto",
        }}
        label="Satuan"
        variant="outlined"
        size="small"
        type="text"
        onChange={(e) => {
          setSatuan(e.target.value);
        }}
        InputProps={{ inputProps: { min: 1, fontSize: 28 } }}
        fullWidth
        required
      />
      <TextField
        rows = {1}
        sx={{
          display: "block",
          mb: 4,
          input: { color: "white" },
          maxWidth: "80%",
          mx: "auto",
        }}
        label="Stok"
        variant="outlined"
        size="small"
        type="number"
        onChange={(e) => {
          setStok(parseInt(e.target.value));
        }}
        InputProps={{ inputProps: { min: 1, fontSize: 28 } }}
        fullWidth
        required
      />
      <Box textAlign="center">
        <Button
          sx={{ color: "white", width: 200, fontSize: 28, borderRadius: 2 }}
          variant="contained"
          color="success"
          onClick={() => handleSubmit(nama, satuan, stok)}
        >
          Konfirmasi
        </Button>
      </Box>
    </Box>
  );
};

export default FormBahan;
