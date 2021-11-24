import http from "http-common";

const get = (id: any, jwt: any) => {
  return http.get(`/dorayaki/${id}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const getAll = () => {
  return http.get(`/dorayaki`);
};

const createDorayaki = (data: any, jwt: any) => {
  return http.post("/dorayaki/create", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const createRecipe = (data: any, jwt: any) => {
  return http.post("/dorayaki/resep/create", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const ex = {
  get,
  getAll,
  createDorayaki,
  createRecipe,
};

export default ex;

