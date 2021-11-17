import http from "../http-common";

const get = (id: any, jwt: any) => {
  return http.get(`/dorayaki/${id}`, {
    headers: {
        Authorization: `Bearer ${jwt}`,
    },
  });
};

const getAll = (jwt: any) => {
    console.log(jwt)
  return http.get(`/dorayaki`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
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

export default {
  get,
  getAll,
  createDorayaki,
  createRecipe,
};
