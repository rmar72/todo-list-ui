import Image from 'next/image';
import Link from 'next/link';
import { useTaskContext } from '@/context/TaskContext';

interface TaskCardProps {
  task: {
    id: number;
    title: string;
    color: string;
    completed: boolean;
  };
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onDelete }) => {
  const { setSelectedTask } = useTaskContext();

  return (
    <div
      className={`flex justify-between items-center w-[736px] h-[72px] px-4 rounded-t-lg border-t border-gray-700 ${
        task.completed ? 'bg-gray-800 text-gray-400' : 'bg-[#333333]'
      } mx-auto`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id, !task.completed)}
          className="appearance-none w-[17.45px] h-[17.45px] rounded-full border-2 border-[#4EA8DE] checked:bg-[#8284FA] checked:border-[#8284FA] flex items-center justify-center relative
          before:content-[''] before:absolute before:mb-1 before:w-[5px] before:h-[10px] before:translate-x-[0.5px] before:translate-y-[1px] before:border-b-2 before:border-r-2 before:border-white before:rotate-45 before:opacity-0 checked:before:opacity-100"
        />
        <span
          className={`text-lg ${task.completed ? 'line-through' : ''}`}
          onClick={() => setSelectedTask(task)}
        >
          <Link href={`/task/edit/${task.id}`}>
            {task.title}
          </Link>
        </span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
      >
        <div className="w-6 h-6 flex items-center justify-center text-gray-400">
          <Image
            src="https://static-00.iconduck.com/assets.00/trash-bin-delete-icon-1919x2048-pm5v6la4.png"
            alt="Trash Icon"
            width={20}
            height={20}
          />
        </div>
      </button>
    </div>
  );
};

export default TaskCard;
