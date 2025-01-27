'use client';

import React, { createContext, useContext, useState } from 'react';

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

interface TaskContextProps {
  selectedTask: Task | null;
  setSelectedTask: (task: Task | null) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <TaskContext.Provider value={{ selectedTask, setSelectedTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
