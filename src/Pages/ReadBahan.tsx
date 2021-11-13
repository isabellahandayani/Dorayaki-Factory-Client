import BahanService from "../Service/BahanServices";
import { useEffect, useState } from "react";
import CardBahan from "../Components/CardBahan";

const ReadBahan = () => {
  const [bahan, setBahan] = useState<any[]>([]);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = () => {
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
    {bahan && bahan.map((item) => {
        return <CardBahan props = {{"id": item.id, "nama_bahan": item.nama_bahan, "satuan": item.satuan, "stok": item.stok }} />
    })}
  
  </>);
};

export default ReadBahan;
