import { Box, Typography } from "@mui/material/";

interface Props {
  onClick: (id: number) => void;
  props: string;
  id: number;
}

const CardResep: React.FC<Props> = ({ onClick, props, id }) => {
  return (
    <Box
      bgcolor="primary.main"
      onClick = {() => onClick(id)}
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
