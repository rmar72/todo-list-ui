'use client';

import Link from 'next/link';
import Header from '../components/Header';
import StatsBar from '../components/StatsBar';
import TaskCard from '../components/TaskCard';
import EmptyState from '../components/EmptyState';
import LoadingState from '../components/LoadingState';
import useTasks from '../hooks/useTasks';
import { toggleTaskCompletion, deleteTask } from '../utils/tasks';

const HomePage = () => {
  const { tasks, setTasks, loading } = useTasks();

  const handleToggle = async (id: number, completed: boolean) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
    try {
      await toggleTaskCompletion(id, completed);
    } catch {
      // this will revert on failure (fallback best practice)
      setTasks(tasks);
    }
  };

  const handleDelete = async (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    try {
      await deleteTask(id);
    } catch {
      setTasks(tasks);
    }
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="text-white min-h-screen">
      <Header />
      <div className="text-center mb-8 mt-[-25]">
        <Link
          href="/task/create"
          className="bg-[#1E6F9F] hover:bg-[#155E80] text-white py-3 px-6 mb-6 rounded-lg text-lg w-[736px] h-[52px] inline-flex justify-center items-center gap-2 shadow-md"
        >
          Create Task +
        </Link>
      </div>
      <StatsBar totalTasks={tasks.length} completedTasks={completedTasks} />
      <div className={`w-[736px] h-[1px] bg-gray-500 mx-auto ${tasks.length ? 'mb-10' : 'mb-20'}`} />
      <div className="px-8 space-y-4">
        {loading ? (
          <LoadingState />
        ) : tasks.length === 0 ? (
          <EmptyState />
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
