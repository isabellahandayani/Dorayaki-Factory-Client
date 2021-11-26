import { useEffect, useState, useReducer } from "react";

import CardRequest from "../../Components/CardRequest";

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';

import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import { useAuthContext } from "Context/Auth";
import { getAllRequest, getAllAdminRequest } from "Service/RequestServices";
import RecipeServices from "Service/RecipeServices";

const Request = () => {
  const { authState } = useAuthContext();

  const [requests, setRequests] = useState<any[] | null>(null);
  const [adminRequests, setAdminRequests] = useState<any[] | null>(null);
  const [showAll, setShowAll] = useState<boolean>(true);
  const [status, setStatus] = useState<boolean>(false);
  const [date, setDate] = useState<boolean>(false);
  const [result, setResult] = useState<any[] | null>(null);
  const [search, setSearch] = useState<string>("");

  const fetchRequests = async () => {
    const { data } = await getAllRequest(authState.jwt ?? "");
    setRequests(data.data);
    setResult(data.data)
  };

  const fetchAdminRequests = async () => {
    const { data } = await getAllAdminRequest(authState.jwt ?? "");

    setAdminRequests(data.data);
  };

  const getDorayakiName = async (id_dorayaki: number) => {
      return await RecipeServices.get(id_dorayaki, authState.jwt)
        .then((res) => {return res.data})
        .catch((e) => console.log(e));
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


  const handleDate = () => {
    if (result) {
      if(date) {
        let data = result.sort((a,b) => (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0))
        setResult(data);
      } else {
        let data = result.sort((a,b) => (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0))
        setResult(data);
      }
    }
    setDate(!date);
    status ? setStatus(!status) : setStatus(status);
  }

  const handleStatus = () => {
    if (result) {
      if(status) {
        let data = result.sort((a,b) => (a.status < b.status) ? 1 : ((b.status < a.status) ? -1 : 0))
        setResult(data);
      } else {
        let data = result.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))
        setResult(data);
      }
    }
    setStatus(!status);
    date ? setDate(!date) : setDate(date);
  }

  const handleSubmit = async () => {
    if(search && requests) {
      const arr: any[] = []
      for(var item in requests) {
        let res = await getDorayakiName(requests[item].id_dorayaki);
        try {
          if (res.data[0].dorayaki_name.toLowerCase().includes(search.toLowerCase())) {
            arr.push(requests[item]);
          }
        } catch (e) {}
      }
      setResult(arr);
    } else {
      setResult(requests);
    }
  }

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
        <TextField
        disabled={!showAll}
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon onClick={handleSubmit} display="pointer" />
            </InputAdornment>
          ),
        }}
          label="Search"
          sx = {{
            mr:6,
            width: 750
          }}
        onChange={(e) => setSearch(e.target.value)}
        />
      <Button variant="contained" startIcon={<FilterAltIcon />} sx={{
        backgroundColor: status ? "green": "red",
        color: "white",
        padding: 2,
        fontSize: 20,
        borderRadius: 4,
        mr: 2,
      }} onClick={handleStatus} disabled={!showAll}>Status</Button>
        <Button variant="contained" startIcon={<FilterAltIcon />} sx={{
        backgroundColor: date? "green": "red",
        color: "white",
        padding: 2,
        fontSize: 20,
        borderRadius: 4,
        mr: 2
      }} disabled={!showAll} onClick={handleDate}>Datetime</Button>
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
        result &&
        result.map((request) => renderRequestCard(request))}
      {!showAll &&
        adminRequests &&
        adminRequests.map((request) => renderRequestCard(request))}
      {showAll && result && result.length === 0 && (
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
