'use client';

import { useState } from 'react';
import { createTask } from '@/utils/tasks';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import TaskForm from '@/components/TaskForm';
import BackButton from '@/components/BackButton';


const CreateTaskPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSave = async (data: { title: string; color: string }) => {
    setLoading(true);
    try {
      await createTask(data);
      router.push('/');
    } catch (error) {
      console.error('Error creating task:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white min-h-screen">
      <Header />
      <div className="w-[736px] mx-auto mt-8">
        <BackButton />
        <TaskForm onSave={handleSave} loading={loading} />
      </div>
    </div>
  );
};

export default CreateTaskPage;
