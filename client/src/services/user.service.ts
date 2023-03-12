import { api } from "./api";

const login = (email:string, password: string) => {
  return api.post('login', { email, password });
}

const getAll = () => {
  return api.get('/users/all');
};

const getUserItems = (id: number) => {
  return api.get(`users/${id}/items`);
};

const logout = () => {
  return api.post('logout');
}


const Service = {
  getAll,
  getUserItems,
  login,
  logout
};

export default Service;