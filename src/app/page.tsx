'use client';

import { useEffect, useState } from 'react';
import API from '../utils/api';

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/tasks')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="p-4 border rounded mb-4">
              <h2 className="font-semibold">{task.title}</h2>
              <p>Color: {task.color}</p>
              <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default HomePage;
