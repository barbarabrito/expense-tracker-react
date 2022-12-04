import { api } from "./api";

const getAll = () => {
  return api.get("/users/all");
};

const getItemsById = () => {
  return api.get(`users/1/items`);
};

const Service = {
  getAll,
  getItemsById,
};

export default Service;
