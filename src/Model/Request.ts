
type Request = {
  id: number;
  id_dorayaki: number;
  stok_added: number;
  status: "accepted" | "rejected" | "not validated";
  createdAt: string;
}

export default Request;
