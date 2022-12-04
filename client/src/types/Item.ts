import { ItemCategory } from "./ItemCategory";

export type Item = {
  id?: number;
  date: Date;
  title: string;
  value: number;
  user_id: number;
  item_category_id: number;
  item_category: ItemCategory;
};
