import http from 'http-common';
const BASE_REQUEST_URL = "request"

export const getAllRequest = async (jwt: string) => {
  return await http.get(`/${BASE_REQUEST_URL}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}

export const getAllAdminRequest = async (jwt: string) => {
  return await http.get(`/${BASE_REQUEST_URL}/log-admin`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}

export const validateRequest = async (jwt: string, id_request: number, is_valid: boolean) => {
  return await http.post(`/${BASE_REQUEST_URL}/${id_request}/validate`,
  {
    is_valid: is_valid,
  },
  {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}