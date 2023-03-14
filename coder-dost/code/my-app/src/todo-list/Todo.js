import React, { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState(0);
  const takeInput = (e) => {
    setTask(e.target.value);
  };
  const addTask = () => {
    if (edit) {
      const editTodo = taskList.find((t, i) => i === edit);
      const updatedTodos = taskList.map((t) => {
        return t === editTodo ? (t = { task }) : (t = { t });
      });
      setTaskList(updatedTodos);
    }
    setTaskList(() => {
      const updatedTasks = [...taskList, task];
      console.log(updatedTasks);
      setTask('');
      return updatedTasks;
    });
  };

  const removeTask = (id) => {
    const filteredTasks = taskList.filter((task, i) => i !== id);
    setTaskList(filteredTasks);
    setEdit(id);
  };

  const editTask = (id) => {
    //know what to edit - using find and index value
    const editTodo = taskList.find((t, i) => i === id);
    //we want to display the todo we want to edit in the input box
    setTask(editTodo);
  };

  return (
    <div>
      <input type="text" value={task} onChange={takeInput} />
      <button onClick={addTask}>Add</button>
      {taskList.map((task, id) => (
        <div>
          <p>
            {task} - <button onClick={() => removeTask(id)}>Remove</button> -{' '}
            <button onClick={() => editTask(id)}>Edit</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
