import axios from 'http-common';

export const login = async (email: string, password: string) => {
  return await axios.post('/login', { email, password }, { validateStatus: null });
}

export const register = async (email: string, password: string,  username: string) => {
  return await axios.post('/register', { email, password, username }, { validateStatus: null });
}
