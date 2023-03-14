import React, { useState } from 'react';

const CRUD = () => {
  const [edit, setEdit] = useState(0);
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const readTask = (e) => {
    setTask(e.target.value);
  };

  const addTasks = () => {
    if (edit) {
      const reqTask = taskList.find((t) => t.id === edit);
      const updateTasks = taskList.map((t) =>
        t.id === reqTask.id
          ? { id: t.id, todo: task }
          : { id: t.id, todo: t.todo }
      );
      setTaskList(updateTasks);
      setTask('');
      setEdit(0);
      return;
    }
    setTaskList(() => {
      const updatedtasks = [
        ...taskList,
        { id: taskList.length + 1, todo: task },
      ];

      setTask('');
      console.log(updatedtasks);
      return updatedtasks;
    });
  };

  const deleteTask = (id) => {
    const newTasks = taskList.filter((t) => t.id !== id);
    setTaskList(newTasks);
  };

  const editTask = (id) => {
    const t = taskList.find((t) => t.id === id);
    setTask(t.todo);
    setEdit(id);
  };
  return (
    <div>
      <input type="text" value={task} onChange={readTask} />
      <button onClick={addTasks}>{edit ? 'Edit' : 'Add'}</button>
      {taskList.map((t) => {
        return (
          <div key={t.id}>
            <p>
              {t.todo} - <button onClick={() => editTask(t.id)}>Edit</button> -{' '}
              <button onClick={() => deleteTask(t.id)}>Remove</button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CRUD;
