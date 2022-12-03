import * as C from "./styles";
import { Item } from "../../types/Item";
// import { formatDate } from "../../helpers/dateFilter";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{item?.date}</C.TableColumn>
      {/* <C.TableColumn>{formatDate(item?.date)}</C.TableColumn> */}
      <C.TableColumn>
        {/* <C.Category color={categories[item.item_category].color}> */}
        {item?.item_category.title}
        {/* </C.Category> */}
      </C.TableColumn>
      <C.TableColumn>{item?.title}</C.TableColumn>
      <C.TableColumn>
        {/* <C.Value color={categories[item.category].expense ? "red" : "green"}> */}
        R$ {item?.value}
        {/* </C.Value> */}
      </C.TableColumn>
    </C.TableLine>
  );
};
