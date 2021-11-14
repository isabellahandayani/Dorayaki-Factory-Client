import { useEffect, useState } from "react";

import BahanService from "../Service/BahanServices";
import CardBahan from "../Components/CardBahan";
import FormBahan from "../Components/FormBahan";

import { Button, Box, Modal } from "@mui/material";
import BahanServices from "../Service/BahanServices";

const ReadBahan = () => {
  const [bahan, setBahan] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<number>();

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
    update(data);
    handleClose();
  };

  const update = (data: any) => {
    BahanServices.update(data)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    initialize();
  }, []);

  const initialize = () => {
    console.log("MSK");
    BahanService.getAll()
      .then((response) => {
        setBahan(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
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

      <Box textAlign="center">
        <Button
          variant="contained"
          color="info"
          sx={{
            width: "95%",
            mb: 4,
            height: 50,
            fontSize: 28,
            mt: 2,
            borderRadius: 2,
          }}
          onClick = {() => {window.location.href="/bahan/create"}}
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
            <>
              <FormBahan handleSubmit={handleSubmit} />
            </>
          </Modal>
        </>
      )}
    </>
  );
};

export default ReadBahan;
