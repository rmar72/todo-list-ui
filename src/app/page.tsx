'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import taskAPI from '../utils/api';

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
    taskAPI.get('/tasks')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error))
      .finally(() => setLoading(false));
  }, []);

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <div className="text-center">
          <Link
            href="/tasks/create"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600"
          >
            Create Task +
          </Link>
          <div className="flex justify-between items-center mt-6 px-6 py-4 border rounded-md">
            <p className="text-lg font-semibold">Tasks: 0</p>
            <p className="text-lg font-semibold">Completed: 0</p>
          </div>
          <div className="mt-6">
          <div className="flex justify-center mb-4">
            <Image
              src="https://s3-alpha-sig.figma.com/img/85c0/2079/0f716dd0d95262635b558603544a0316?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VHJCpTPa73oNmmeS6urjQQg10VOiemlJ35Ds9TqxV8bc-dQHZpkpzpSKUP5G2B~IPBsIYChY2X1LVnu3m5Tm5NVYiVqyGYWavrmnGaf5~9qnN7KUFobv2~6ZNcj5k2UlAeqapyEYhaqocqhLlgERQbJobDb86q4AcGRZZqvZtO468fFV95He6qIWzGCzhUU7Oaznlrr-ihArok1UMuZhqGWqpdRruo8a~eRqd4fNg~MZabfWoWqw5Jsc0vwpOnJFdJorjZ0wqC7KSr8Sl4oDRkhkEtKuKLB7Yp3v-YbPlu9ncwlqX8jA7684mCyuuKTu8SH45UT6PDNhGQJT43KLNA__"
              alt="Clipboard Icon"
              width={48} // Adjust the width as needed
              height={48} // Adjust the height as needed
              className="h-12 w-12"
            />
          </div>
            <p className="text-xl font-semibold">You don&apos;t have any tasks registered</p>
            <p className="text-gray-600 text-base mt-2">Create tasks and organize your todo-items.</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center px-6 py-4 border rounded-md mb-4">
            <p className="text-lg font-semibold">Tasks: {tasks.length}</p>
            <p className="text-lg font-semibold">Completed: {completedTasks}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4">
            {tasks.map((task) => (
              <li key={task.id} className="p-4 border rounded">
                <h2 className="font-semibold">{task.title}</h2>
                <p>Color: {task.color}</p>
                <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;