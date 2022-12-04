import { api } from "../services/api";

const getAll = () => {
  return api.get("/categories");
};

const Service = {
  getAll,
};

export default Service;
