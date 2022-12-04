import { api } from './api';

const create = (
  date: string,
  title: string,
  value: number,
  user_id: number,
  item_category_id: number
) => {
  return api.post('items/create', {
    date,
    title,
    value,
    user_id,
    item_category_id,
  });
};

const Service = {
  create,
};

export default Service;
