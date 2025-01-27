import { useState } from 'react';
import { allowedColors } from '@/utils/colors';
import ColorPicker from './ColorPicker';

interface TaskFormProps {
  onSave: (data: { title: string; color: string; completed: boolean }) => void;
  loading: boolean;
  initialData?: { title: string; color: string; completed: boolean }; // Optional for edit mode
}

const TaskForm: React.FC<TaskFormProps> = ({ onSave, loading, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [selectedColor, setSelectedColor] = useState<string | null>(initialData?.color || null);
  const [completed, setCompleted] = useState(initialData?.completed || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !selectedColor) {
      alert('Title and Color are required!');
      return;
    }
    onSave({ title, color: selectedColor, completed });
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

      {initialData && (
        <div>
          <label className="block text-lg text-[#4EA8DE] font-semibold mb-3">Completed</label>
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="appearance-none w-[17.45px] h-[17.45px] rounded-full border-2 border-[#4EA8DE] checked:bg-[#8284FA] checked:border-[#8284FA] flex items-center justify-center relative
                before:content-[''] before:absolute before:mb-1 before:w-[5px] before:h-[10px] before:translate-x-[0.5px] before:translate-y-[1px] before:border-b-2 before:border-r-2 before:border-white before:rotate-45 before:opacity-0 checked:before:opacity-100"
            />
            <span className="text-lg text-[#F2F2F2]">{completed ? 'Completed' : 'Not Completed'}</span>
          </div>
        </div>
      )}

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
