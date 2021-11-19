import { useEffect, useState, useReducer } from "react";

import CardRequest from "../../Components/CardRequest";

import { Box, Button, Typography } from "@mui/material";
import { useAuthContext } from "Context/Auth";
import { getAllRequest, getAllAdminRequest } from "Service/RequestServices";

const Request = () => {
  const { authState } = useAuthContext();

  const [requests, setRequests] = useState<any[] | null>(null);
  const [adminRequests, setAdminRequests] = useState<any[] | null>(null);
  const [showAll, setShowAll] = useState<boolean>(true);

  const fetchRequests = async () => {
    const { data } = await getAllRequest(authState.jwt ?? "");

    setRequests(data.data);
  };

  const fetchAdminRequests = async () => {
    const { data } = await getAllAdminRequest(authState.jwt ?? "");

    setAdminRequests(data.data);
  };

  const renderRequestCard = (item: any) => {
    return (
      <CardRequest
        request={item}
        commonFunction={() => {
          window.location.reload();
        }}
      />
    );
  };

  useEffect(() => {
    fetchRequests();
    fetchAdminRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        mb: 8,
        mt: 15,
      }}
    >
      <Button
        sx={{
          color: showAll ? "white" : "black",
          backgroundColor: showAll ? "#01A8D9" : "white",
          padding: 2,
          fontSize: 20,
          borderRadius: 4,
        }}
        onClick={() => setShowAll(true)}
      >
        All
      </Button>
      <Button
        sx={{
          color: !showAll ? "white" : "black",
          backgroundColor: !showAll ? "#01A8D9" : "white",
          padding: 2,
          fontSize: 20,
          borderRadius: 4,
        }}
        onClick={() => setShowAll(false)}
      >
        Validated by You
      </Button>
      {showAll &&
        requests &&
        requests.map((request) => renderRequestCard(request))}
      {!showAll &&
        adminRequests &&
        adminRequests.map((request) => renderRequestCard(request))}
      {showAll && requests && requests.length === 0 && (
        <Typography align="center" variant="body1" color="black">
          Belum ada yang request stok Dorayaki
        </Typography>
      )}
      {!showAll && adminRequests && adminRequests.length === 0 && (
        <Typography align="center" variant="body1" color="black">
          Belum ada yang request stok Dorayaki
        </Typography>
      )}
    </Box>
  );
};

export default Request;
