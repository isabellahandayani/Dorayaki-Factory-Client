import { useEffect, useState } from "react";

import CardRequest from "../../Components/CardRequest";

import { Box, Typography } from "@mui/material";
import { useAuthContext } from "Context/Auth";
import { getAllRequest, getAllAdminRequest } from "Service/RequestServices";

const ReadBahan = () => {
  const { authState } = useAuthContext();

  const [requests, setRequests] = useState<any[] | null>(null);
  const [adminRequests, setAdminRequests] = useState<any[] | null>(null);

  const fetchRequests = async () => {
    const { data } = await getAllRequest(authState.jwt ?? "");

    setRequests(data.data);
  };

  const fetchAdminRequests = async () => {
    const { data } = await getAllAdminRequest(authState.jwt ?? "");

    console.log(data.data)
  }

  const renderRequestCard = (item: any) => {
    return <CardRequest request={item} />;
  };

  useEffect(() => {
    fetchRequests();
    fetchAdminRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        sx={{
          mt: 15,
        }}
      ></Box>
      {requests && requests.map((request) => renderRequestCard(request))}
      {requests && requests.length === 0 && (
        <Typography align="center" variant="body1" color="black">
          Belum ada yang request stok Dorayaki
        </Typography>
      )}
    </>
  );
};

export default ReadBahan;
