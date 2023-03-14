import React, { useState } from 'react';

const TodoApp = () => {
  const [edit, setEdit] = useState(0);
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  function addTasks() {
    if (edit) {
      const edittodo = taskList.find((i) => i.id === edit);
      const updateTodos = taskList.map((t) =>
        t.id === edittodo.id
          ? (t = { id: t.id, todo: task })
          : { id: t.id, todo: t.todo }
      );
      setTaskList(updateTodos);
      setEdit(0);
      setTask('');
      return;
    }
    setTaskList(() => {
      const updatedTaskList = [
        ...taskList,
        { id: taskList.length + 1, todo: task },
      ];
      console.log(updatedTaskList);
      setTask('');
      return updatedTaskList;
    });
  }

  function takeInput(e) {
    e.preventDefault();
    setTask(e.target.value);
  }

  function removeTask(id) {
    const newTaskList = taskList.filter((t) => t.id !== id);
    console.log(newTaskList);
    setTaskList(newTaskList);
  }

  function editTask(id) {
    const t = taskList.find((t) => t.id === id);

    setTask(t.todo);
    setEdit(id);
  }
  return (
    <>
      <div>
        <input type="text" value={task} onChange={takeInput} />
        <button onClick={addTasks}>{edit ? 'Edit' : 'Add'}</button>
        {taskList.map((t) => {
          return (
            <div key={t.id}>
              <p>
                {t.todo} -{' '}
                <button onClick={() => removeTask(t.id)}>Remove</button> -{' '}
                <button onClick={() => editTask(t.id)}>Edit</button>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoApp;
