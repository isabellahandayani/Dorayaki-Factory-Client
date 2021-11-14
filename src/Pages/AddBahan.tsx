import FormBahan from "Components/FormBahan";
import BahanServices from "Service/BahanServices";

const AddBahan = () => {
  const handleSubmit = (nama_bahan: string, satuan: string, stok: number) => {
    const data = {
      nama_bahan: nama_bahan,
      satuan: satuan,
      stok: stok,
    };
    create(data);
  };

  const create = (data: any) => {
    BahanServices.create(data)
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
        props={{ id: 0, nama_bahan: "", satuan: "", stok: 1 }}
      />
    </>
  );
};

export default AddBahan;
