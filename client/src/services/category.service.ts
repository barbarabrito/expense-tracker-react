import { api } from './api';

const getAll = () => {
  return api.get('/categories');
};

const Service = {
  getAll,
};

export default Service;
