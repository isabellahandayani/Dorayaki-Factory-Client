
type Request = {
  id: number;
  id_dorayaki: number;
  stok_added: number;
  status: "accepted" | "rejected" | "not validated";
}

export default Request;
