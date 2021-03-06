import Bahan from "Model/Bahan";
import { Box, Button, Typography } from "@mui/material/";

interface Props {
  onClick: (id: number) => void;  
  props: Bahan;
}

const CardBahan: React.FC<Props> = ({ onClick, props }) => {
  return (
    <Box
      bgcolor="secondary.main"
      sx={{
        borderRadius: 5,
        maxWidth: "90%",
        mx: "auto",
        display: "flex",
        flexDirection: "row",
        mt: 4,
      }}
    >
      <Box
        sx={{
          p: 2,
          flex: 0.975,
        }}
      >
        <Typography align="left" variant="body1" color="white">
          {props.nama_bahan}
        </Typography>
        <Typography align="left" variant="body1" color="white">
          {props.stok} {props.satuan}
        </Typography>
      </Box>

      <Box
        textAlign="right"
        sx={{
          verticalAlign: "middle",
          mt: 3,
        }}
      >
        <Button
          sx={{ color: "white", width: 100, fontSize: 28, borderRadius: 2 }}
          variant="contained"
          color="info"
          onClick={() => onClick(props.id)}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default CardBahan;
