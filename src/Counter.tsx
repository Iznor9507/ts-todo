import { useAppDispatch, useAppSelector } from "./store/hookRedux";
import {
  addTodo,
  decrement,
  deleteTodo,
  increment,
} from "./store/reducers/counterSlice";
import React from "react";
function Counter() {
  const dispatch = useAppDispatch();
  const [todos, setTodos] = React.useState("");
  //  Эта запись удобнее если будет много значений из редюсера в сторе.
  //   не придется писать state: RootState каждый раз
  // придется написать кастомный хук
  const count = useAppSelector((state) => state.conter.value);
  const todo = useAppSelector((state) => state.conter.todo);
  // для этой записи не придется писать кастомный хук
  // const count = useSelector((state: RootState ) => state.conter.value )

  const hangleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(todos));
    setTodos("");
  };
  const handleSetText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTodos(event.target.value);
  };

  const removeTOdo = (index: number) => {
    dispatch(deleteTodo(index));
    console.log(index);
  };

  console.log(todos, todo);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>

      <form onSubmit={hangleSubmit}>
        <input type="text" value={todos} onChange={handleSetText} />
        <button disabled={todos === ""}>ДОБАВИТЬ</button>
      </form>

      <div>
        {todo.map((item, index: number) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => removeTOdo(index)}>DELETE</button>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default Counter;
