interface StatsBarProps {
  totalTasks: number;
  completedTasks: number;
}

const StatsBar: React.FC<StatsBarProps> = ({ totalTasks, completedTasks }) => {
  return (
    <div className="flex justify-between items-center w-[736px] h-[19px] gap-0 px-0 mb-6 mx-auto">
      <div className="text-lg flex items-center gap-2">
        <span className="font-semibold text-[#4EA8DE]">Tasks:</span>
        <span className="flex items-center justify-center px-2 py-[2px] gap-2 w-auto h-[19px] bg-[#333333] rounded-full text-white text-sm">
          {totalTasks}
        </span>
      </div>
      <div className="text-lg flex items-center gap-2">
        <span className="font-semibold text-[#8284FA]">Completed:</span>
        <span className="flex items-center justify-center px-2 py-[2px] gap-2 w-auto h-[19px] bg-[#333333] rounded-full text-white text-sm">
          {completedTasks} of {totalTasks}
        </span>
      </div>
    </div>
  );
};

export default StatsBar;
