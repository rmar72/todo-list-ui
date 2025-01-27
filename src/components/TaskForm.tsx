import { useState } from 'react';
import { allowedColors } from '@/utils/colors';
import ColorPicker from './ColorPicker';

interface TaskFormProps {
  onSave: (data: { title: string; color: string; completed: boolean }) => void;
  loading: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSave, loading }) => {
  const [title, setTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !selectedColor) {
      alert('Title and Color are required!');
      return;
    }
    onSave({ title, color: selectedColor, completed: false });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div style={{ marginBottom: '40px' }}>
        <label htmlFor="title" className="block text-lg text-[#4EA8DE] font-semibold mb-3">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-[52px] px-4 rounded-lg bg-[#333333] text-[#F2F2F2] border border-gray-600 shadow-sm shadow-[#0000000F] text-[14px] font-normal leading-[19.6px] text-left"
          placeholder="Enter task title"
        />
      </div>

      <div>
        <label className="block text-lg text-[#4EA8DE] font-semibold mb-3">Color</label>
        <ColorPicker
          allowedColors={allowedColors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>

      <div className="h-[3px]" />

      <button
        type="submit"
        disabled={loading}
        className={`w-full h-[52px] rounded-lg text-lg font-bold ${
          loading ? 'bg-gray-600' : 'bg-[#1E6F9F] hover:bg-[#155E80]'
        } text-white flex items-center justify-center shadow-sm shadow-[#0000000F]`}
      >
        {loading ? 'Saving...' : 'Save ✓'}
      </button>
    </form>
  );
};

export default TaskForm;
