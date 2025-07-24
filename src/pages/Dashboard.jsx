import { useEffect, useState } from 'react';
import API from '../api';
import TaskForm from '../components/TaskForm';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await API.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => { loadTasks(); }, []);

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm onTaskAdded={loadTasks} />
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title} - {task.completed ? '✅' : '❌'}
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
