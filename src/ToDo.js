import x from "./x.png";
import { useState } from "react";

function ToDo() {
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  //добавление строк в блок
  function click(event) {
    if (event.onClick === "click") return;
    const valueObj = { text: value, id, completed: false };
    setTodos([...todos, valueObj]);
    setValue("");
    setId(id + 1);
    console.log([...todos,valueObj]);
  }

  // удаление на крестик
  function del(id) {
    const filDel = todos.filter((todo) => todo.id !== id);
    setTodos(filDel);
    console.log(filDel);
  }

  // нажатие на checkbox
  function check(id) {
    const newfilDel = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    setTodos(newfilDel);
    console.log(newfilDel);
  }

  // удалить завершенные
  function delComplete(id) {
    const delComp = todos.filter((todo) => {
      if (!todo.completed == true) return todo.id !== id;
    });
    setTodos(delComp);
    console.log(delComp);
  }

  // удалить все
  function allDel(id) {
    setTodos((addList) => {
      return addList.filter((todo) => !todo.id == id);
    });
  }

  console.log();


  return (
    <>
      <div>
        <h1 className="title">ToDo List</h1>
      </div>
      <div className="header_up">
        <input
          className="input"
          placeholder="Введите текст для добавления"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button className="add" onClick={() => click({})}>
          Добавить
        </button>
      </div>
      <div className="header-down">
        <div className="all_mean">
          {todos.map((list) => (
            <div className="mean" key={list.id}>
              <input
                className="checkbox"
                type="checkbox"
                checked={list.completed}
                onChange={() => check(list.id)}
              />
              <p className={list.completed ? "text line" : "text"}>
                {list.text}
              </p>
              <button className="close" onClick={() => del(list.id)}>
                <img src={x} alt="x" />
              </button>
            </div>
          ))}
        </div>
        {todos.length > 0 && (
          <div className="delete_buttons">
            <button className="del__comlete" onClick={delComplete}>
              Удалить завершенные
            </button>
            <button className="del__add" onClick={allDel}>
              Удалить все
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ToDo;
