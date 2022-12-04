import { useEffect, useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import categoryService from '../../services/category.service';
import { ItemCategory } from '../../types/ItemCategory';
import itemService from '../../services/item.service';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [categories, setCategories] = useState<ItemCategory[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await categoryService.getAll();
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if (!categoryField) {
      errors.push('Categoria inválida!');
    }
    if (titleField === '') {
      errors.push('Título vazio!');
    }
    if (valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      createItem();
      clearFields();
    }
  };

  const createItem = async () => {
    const categoryId = parseInt(categoryField);
    try {
      await itemService.create(
        dateField,
        titleField,
        valueField,
        1,
        categoryId
      );
    } catch (error) {
      console.log(error);
    }
  };

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  };

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type='date'
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categories.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input
          type='text'
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type='number'
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};
