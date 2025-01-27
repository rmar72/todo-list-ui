import taskAPI from './api';

export const toggleTaskCompletion = async (id: number, completed: boolean) => {
  try {
    await taskAPI.put(`/tasks/${id}`, { completed });
  } catch (error) {
    console.error('Error toggling task completion:', error);
    throw error;
  }
};

export const deleteTask = async (id: number) => {
  try {
    await taskAPI.delete(`/tasks/${id}`);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

export const createTask = async (data: { title: string; color: string }) => {
  try {
    await taskAPI.post('/tasks', data);
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (id: number, data: { title: string; color: string; completed: boolean }) => {
  try {
    await taskAPI.put(`/tasks/${id}`, data);
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};