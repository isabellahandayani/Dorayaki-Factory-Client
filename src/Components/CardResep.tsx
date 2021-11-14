import { Box, Typography } from "@mui/material/";

interface Props {
  //   onClick: (id: number) => void;
  props: string;
}

const CardResep: React.FC<Props> = ({ props }) => {
  return (
    <Box
      bgcolor="primary.main"
      onClick = {() => alert('clicked')}
      sx={{
        borderRadius: 5,
        maxWidth: "90%",
        mx: "auto",
        mt: 4,
        p: 4,
      }}
    >
      <Typography variant="body2" color="white">
        {props}
      </Typography>
    </Box>
  );
};

export default CardResep;
