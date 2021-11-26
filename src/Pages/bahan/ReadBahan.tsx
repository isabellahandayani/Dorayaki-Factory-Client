import { useEffect, useState } from "react";

import BahanService from "../../Service/BahanServices";
import CardBahan from "../../Components/CardBahan";
import FormBahan from "../../Components/FormBahan";

import { Button, Box, Modal, Typography } from "@mui/material";
import BahanServices from "../../Service/BahanServices";
import { useAuthContext } from "Context/Auth";
import { useNavigate } from "react-router-dom";

const ReadBahan = () => {
  const [bahan, setBahan] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<number>();
  const context = useAuthContext();
  let navigate = useNavigate();

  const handleOpen = (id: number) => {
    setId(id);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (nama_bahan: string, satuan: string, stok: number) => {
    const data = {
      id: id,
      nama_bahan: nama_bahan,
      satuan: satuan,
      stok: stok,
    };

    if (nama_bahan && satuan && stok && bahan.filter(e => e.nama_bahan === nama_bahan).length === 0) {
      update(data);
    }
    handleClose();
  };

  const update = (data: any) => {
    BahanServices.update(data, context.authState.jwt)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialize = () => {
    BahanService.getAll(context.authState.jwt)
      .then((response) => {
        setBahan(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Box
        sx={{
          mt: 15,
        }}
      ></Box>
      {bahan &&
        bahan.map((item) => {
          return (
            <CardBahan
              onClick={handleOpen}
              props={{
                id: item.id,
                nama_bahan: item.nama_bahan,
                satuan: item.satuan,
                stok: item.stok,
              }}
            />
          );
        })}

      {bahan.length === 0 && (
        <Typography variant="body1" color="error">
          Belom Ada Bahan Terdaftar!
        </Typography>
      )}

      <Box textAlign="center">
        <Button
          variant="contained"
          color="success"
          sx={{
            width: "90%",
            mb: 4,
            height: 50,
            fontSize: 28,
            mt: 2,
            borderRadius: 2,
          }}
          onClick={() => {
            navigate("/bahan/create", { replace: true });
          }}
        >
          Tambah
        </Button>
      </Box>

      {isOpen && (
        <>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isOpen}
            onClose={handleClose}
          >
            <FormBahan handleSubmit={handleSubmit} />
          </Modal>
        </>
      )}
    </>
  );
};

export default ReadBahan;
