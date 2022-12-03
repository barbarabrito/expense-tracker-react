import { Item } from "../types/Item";

export const items: Item[] = [
  {
    id: 1,
    date: new Date(2022, 11, 18),
    title: "McDonalds",
    value: 35,
    user_id: 1,
    item_category_id: 1,
    item_category: {
      id: 1,
      title: "food",
      expense: 1,
    },
  },
  {
    id: 2,
    date: new Date(2022, 11, 18),
    title: "Burger King",
    value: 28,
    user_id: 1,
    item_category_id: 1,
    item_category: {
      id: 1,
      title: "food",
      expense: 1,
    },
  },
  {
    id: 3,
    date: new Date(2022, 11, 18),
    title: "Aluguel",
    value: 2000,
    user_id: 1,
    item_category_id: 2,
    item_category: {
      id: 2,
      title: "rent",
      expense: 1,
    },
  },
  {
    id: 5,
    date: new Date(2022, 11, 1),
    title: "Salário",
    value: 2000,
    user_id: 1,
    item_category_id: 3,
    item_category: {
      id: 3,
      title: "salary",
      expense: 0,
    },
  },
];
