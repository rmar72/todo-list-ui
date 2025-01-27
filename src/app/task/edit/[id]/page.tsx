'use client';

import { useRouter } from 'next/navigation';
import { useTaskContext } from '@/context/TaskContext';
import Header from '@/components/Header';
import TaskForm from '@/components/TaskForm';
import { updateTask } from '@/utils/tasks';
import { useEffect, useState } from 'react';
import BackButton from '@/components/BackButton';

const EditTaskPage = () => {
  const router = useRouter();
  const { selectedTask } = useTaskContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedTask) {
      router.push('/');
    }
  }, [selectedTask, router]);

  if (!selectedTask) return null;

  const handleSave = async (data: { title: string; color: string; completed: boolean }) => {
    setLoading(true);
    try {
      await updateTask(selectedTask.id, data);
      router.push('/');
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white min-h-screen">
      <Header />
      <div className="w-[736px] mx-auto mt-8">
        <BackButton />
        <TaskForm
          onSave={handleSave}
          loading={loading}
          initialData={{
            title: selectedTask.title,
            color: selectedTask.color,
            completed: selectedTask.completed,
          }}
        />
      </div>
    </div>
  );
};

export default EditTaskPage;
