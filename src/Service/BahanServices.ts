import http from "http-common";

const get = (id: any, jwt: any) => {
  return http.get(`/bahan/${id}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const getAll = (jwt: any) => {
  return http.get(`/bahan`, {
      headers: {
          Authorization: `Bearer ${jwt}`
      }
  });
};

const update = (data: any, jwt: any) => {
  return http.put("/bahan/update", data, {
      headers : {
          Authorization: `Bearer ${jwt}`
      }
  });
};

const create = (data: any, jwt: any) => {
  return http.post("/bahan/create", data, {
      headers: {
          Authorization: `Bearer ${jwt}`
      }
  });
};

const exportedObject = {
    get, 
    getAll,
    update,
    create
}

export default exportedObject;