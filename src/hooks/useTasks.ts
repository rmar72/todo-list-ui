import { useState, useEffect } from 'react';
import taskAPI from '../utils/api';

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    taskAPI
      .get('/tasks')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error))
      .finally(() => setLoading(false));
  }, []);

  return { tasks, setTasks, loading };
};

export default useTasks;
