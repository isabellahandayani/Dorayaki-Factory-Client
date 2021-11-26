import FormBahan from "Components/FormBahan";
import { useAuthContext } from "Context/Auth";
import BahanServices from "Service/BahanServices";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AddBahan = () => {
  const context = useAuthContext();
  const [bahan, setBahan] = useState<any[]>([]);

  let navigate = useNavigate();
  
  useEffect(() => {
    BahanServices.getAll(context.authState.jwt)
    .then((response) => 
      setBahan(response.data.data))
    .catch((e) => {
      console.log(e);
    });
    
  }, [context.authState.jwt])
  
  const handleSubmit = async (nama_bahan: string, satuan: string, stok: number) => {


    const data = {
      nama_bahan: nama_bahan,
      satuan: satuan,
      stok: stok,
    };

    if (nama_bahan && satuan && stok && bahan.filter(e => e.nama_bahan === nama_bahan).length === 0) {
      await create(data);
    }

    navigate("/bahan", { replace: true });
    window.location.reload();
  };

  const create = async (data: any) => {
    await BahanServices.create(data, context.authState.jwt)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <FormBahan handleSubmit={handleSubmit} />
    </>
  );
};

export default AddBahan;
