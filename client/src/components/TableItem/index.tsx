import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{item.date}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={item.item_category.expense === 1 ? 'red' : 'green'}>
          {item.item_category.title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={item.item_category.expense === 1 ? 'red' : 'green'}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};
