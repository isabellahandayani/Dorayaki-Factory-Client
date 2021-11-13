import Bahan from "Model/Bahan";
import { Box, Button, Typography } from "@mui/material/";
import { borderRadius } from "@mui/system";

interface Props {
  props: Bahan;
}

const CardBahan: React.FC<Props> = ({ props }) => {
  return (
    <Box
      bgcolor="primary.main"
      sx={{
        borderRadius: 5,
        maxWidth: "95%",
        mx: 'auto',
        display: 'flex',
        flexDirection: "row",
        mt: 4
      }}
    >
      <Box
        sx= {{
            p: 2,
            flex: 0.975
        }}
      
      >
        <Typography variant="body2" color="white" >
          {props.nama_bahan}
        </Typography>
        <Typography variant="body2" color="white">
          {props.stok} {props.satuan}
        </Typography>
      </Box>

      <Box textAlign="right" sx= {{
          verticalAlign: "middle",
          mt: 1.5,
      }}>
        <Button sx={{ color: "white", width: 100, fontSize: 28, borderRadius: 2}} variant="contained" color="secondary">
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default CardBahan;
