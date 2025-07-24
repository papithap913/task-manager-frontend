import { useState } from 'react';
import API from '../api';

function TaskForm({ onTaskAdded }) {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/tasks', task);
    setTask({ title: '', description: '' });
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Task title" value={task.title} onChange={e => setTask({...task, title: e.target.value})} />
      <input placeholder="Description" value={task.description} onChange={e => setTask({...task, description: e.target.value})} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
