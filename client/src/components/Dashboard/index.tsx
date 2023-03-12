import { useEffect, useState } from "react";
import { filterListByMonth, getCurrentMonth } from "../../helpers/dateFilter";

import { Item } from "../../types/Item";
import { InfoArea } from "../InfoArea";
import { InputArea } from "../InputArea";
import * as C from '../../App.styles';
import { TableArea } from "../TableArea";
import userService from "../../services/user.service";

export const Dashboard = () => {
  const [list, setList] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);


  const getItems = async (id: number) => {
    try {
      const response = await userService.getUserItems(id);
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userCredentials = localStorage.getItem('user');
    if (userCredentials) {
      const user = JSON.parse(userCredentials);
      getItems(user.id);
    }
  }, []);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (filteredList[i].item_category.expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};