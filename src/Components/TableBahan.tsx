import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

const TableBahan: React.FC<any> = ({ onClick, props, isEdit }) => {


  return (
    <TableContainer
      sx={{
        width: "95%",
        mx: "auto",
        mt: 2,
      }}
    >
      <Table sx={{ minWidth: 650
       }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ color: "white"  }}>
            <TableCell style={{
              color: "white",
              fontSize: 24
            }}>Nama Bahan</TableCell>
            <TableCell style={{
              color:"white",
              fontSize: 24
            }}align="right">Qty</TableCell>
            {isEdit && <TableCell align="right" style={{
              color:"white",
              fontSize: 24
            }}>Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody> 
          {props.map((row: any) => (
            <TableRow key={row.nama_bahan}>
              <TableCell style= {{
                color:"white",
                fontSize: 24
              }}>{row.nama_bahan}</TableCell>
              <TableCell align="right" style={{
                color:"white",
                fontSize: 24
              }}>{row.qty}</TableCell>
              {isEdit && (
                <TableCell align="right" style={{
                  color:'white',
                  fontSize: 24
                }}>
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
                    color="info"
                    onClick={() => onClick(row.nama_bahan)}
                  >
                    Hapus
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBahan;
