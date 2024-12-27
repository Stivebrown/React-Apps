import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import Edit from "./Edit";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const Todolist = () => {

  const [todoValue, setTodo] = useState([]);

  const createTodo = (todo) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };
  const deleteTodo = (id) => {
    setTodo(todoValue.filter((todo) => todo.id !== id));
  };
  const editTodo = id => {
    setTodo(
      todoValue.map(
        todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
    )
  };
  const editTask = (task, id) => {
    setTodo(
      todoValue.map(todo =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="container p-8 bg-gray-700 mt-20 rounded-md mx-auto">
      <Form createTodo={createTodo} />
      {todoValue.map((todo, idx) =>
        todo.isEditing ? (
          <Edit key={idx} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={idx}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default Todolist;
