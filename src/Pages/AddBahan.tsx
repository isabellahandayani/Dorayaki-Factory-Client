import { Button, Typography, Box, TextField } from "@mui/material/";
const AddBahan = () => {
  return (
    <>
      <Box
        bgcolor="secondary.main"
        sx={{
          borderRadius: 2,
          p: 2,
          maxWidth: "95%",
          m: "auto",
          marginTop: 5,
        }}
      >
        <Typography variant="h4" color="white">
          Add Bahan Baku
        </Typography>
      </Box>
      <Box
        bgcolor="primary.main"
        sx={{
          borderRadius: 2,
          p: 2,
          maxWidth: "50%",
          m: "auto",
          marginTop: 10,
        }}
      >
        <TextField
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
          fullWidth
          required
        />
        <TextField
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
          type="number"
          InputProps={{ inputProps: { min: 1, fontSize: 28 } }}
          fullWidth
          required
        />
        <TextField
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
          InputProps={{ inputProps: { min: 1, fontSize: 28 } }}
          fullWidth
          required
        />

        <Box textAlign="center">
          <Button
            variant="contained"
            color="info"
            sx={{ width: "80%", mb: 4, height: 50, fontSize: 28}}
          >
            Tambah
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddBahan;
