import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from "@mui/material";

const TableBahan: React.FC<any> = ({ onClick, props }) => {
  return (
    <TableContainer
      sx={{
        width: "95%",
        mx: "auto",
        mt: 2,
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ color: "white" }}>
            <TableCell>Nama Bahan</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.map((row: any) => (
            <TableRow key={row.nama_bahan}>
              <TableCell >{row.nama_bahan}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">
                <Button
                  sx={{
                    color: "white",
                    width: 100,
                    fontSize: 18,
                    borderRadius: 2,
                    display: "inline",
                    ml: 2,
                    mt: 1,
                  }}
                  variant="contained"
                  color="secondary"
                  onClick = {() => onClick(row.nama_bahan)}
                >
                  Hapus
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBahan;
