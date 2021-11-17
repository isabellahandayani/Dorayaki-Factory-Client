import FormBahan from "Components/FormBahan";
import { useAuthContext } from "Context/Auth";
import BahanServices from "Service/BahanServices";
import { useNavigate } from "react-router-dom";

const AddBahan = () => {
  const context = useAuthContext();
  let navigate = useNavigate();

  const handleSubmit = (nama_bahan: string, satuan: string, stok: number) => {
    const data = {
      nama_bahan: nama_bahan,
      satuan: satuan,
      stok: stok,
    };
    create(data);
    navigate("/bahan", { replace: true });
  };

  const create = (data: any) => {
    BahanServices.create(data, context.authState.jwt)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <FormBahan
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default AddBahan;
