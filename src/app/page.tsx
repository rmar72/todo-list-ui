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
    <div className="bg-[#33333] text-white min-h-screen">
      <header className="bg-black text-center py-8">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/231/231138.png"
          alt="Rocket Icon"
          width={48}
          height={48}
          className="mx-auto mb-2"
        />
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-[#4EA8DE]">Todo</span>{' '}
          <span className="text-[#8284FA]">App</span>
        </h1>
      </header>

      <div className="text-center mb-8 mt-[-25]">
        <Link
          href="/tasks/create"
          className="bg-[#1E6F9F] hover:bg-[#155E80] text-white py-3 px-6 mb-6 rounded-lg text-lg w-[736px] h-[52px] inline-flex justify-center items-center gap-2 shadow-md"
        >
          Create Task +
        </Link>
      </div>

      {/* my taasks and completed count section */}
      <div className="flex justify-between items-center w-[736px] h-[19px] gap-0 px-0 mb-8 mx-auto">
        <div className="text-lg flex items-center gap-2">
          <span className="font-semibold text-[#4EA8DE]">Tasks:</span>
          <span>{tasks.length}</span>
        </div>
        <div className="text-lg flex items-center gap-2">
          <span className="font-semibold text-[#8284FA]">Completed:</span>
          <span>
            {completedTasks} of {tasks.length}
          </span>
        </div>
      </div>

      <div className="w-[736px] h-[1px] bg-gray-500 mx-auto mb-20"></div>

      {/* Task list section */}
      <div className="px-8 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-between items-center p-4 rounded-lg border ${
              task.completed ? 'bg-gray-800 text-gray-400' : 'bg-gray-900'
            }`}
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  const updatedTasks = tasks.map((taskItem) =>
                    taskItem.id === task.id ? { ...taskItem, completed: !taskItem.completed } : taskItem
                  );
                  setTasks(updatedTasks);
                }}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span
                className={`text-lg ${task.completed ? 'line-through' : ''}`}
              >
                {task.title}
              </span>
            </div>
            <button
              onClick={() => {
                taskAPI.delete(`/tasks/${task.id}`).then(() => {
                  setTasks(tasks.filter((t) => t.id !== task.id));
                });
              }}
              className="text-gray-500 hover:text-red-500"
            >
              🗑️
            </button>
          </div>
        ))}
        {tasks.length === 0 && !loading && (
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="flex justify-center mb-4">
              <Image
                src="https://s3-alpha-sig.figma.com/img/85c0/2079/0f716dd0d95262635b558603544a0316?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VHJCpTPa73oNmmeS6urjQQg10VOiemlJ35Ds9TqxV8bc-dQHZpkpzpSKUP5G2B~IPBsIYChY2X1LVnu3m5Tm5NVYiVqyGYWavrmnGaf5~9qnN7KUFobv2~6ZNcj5k2UlAeqapyEYhaqocqhLlgERQbJobDb86q4AcGRZZqvZtO468fFV95He6qIWzGCzhUU7Oaznlrr-ihArok1UMuZhqGWqpdRruo8a~eRqd4fNg~MZabfWoWqw5Jsc0vwpOnJFdJorjZ0wqC7KSr8Sl4oDRkhkEtKuKLB7Yp3v-YbPlu9ncwlqX8jA7684mCyuuKTu8SH45UT6PDNhGQJT43KLNA__"
                alt="Clipboard Icon"
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </div>
            <p
              className="font-inter text-[#808080] text-[18px] font-bold leading-[22.4px] decoration-transparent"
              style={{ textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}
            >
              You don&apos;t have any tasks registered yet.
            </p>
            <p
              className="font-inter text-[#808080] text-[16px] font-normal leading-[22.4px] decoration-transparent"
              style={{ textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}
            >
              Create tasks and organize your to-do items.
            </p>
          </div>
        )}
        {loading && (
          <div className="text-center text-gray-500 text-[20px] font-bold">
            Loading tasks...
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;