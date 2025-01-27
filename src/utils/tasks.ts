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
