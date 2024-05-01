import React, { FC, useState } from "react";

interface TaskCardProps {
  task?: string;
  onDelete: (index: number) => void;
  index: number;
}

const TaskCard: FC<TaskCardProps> = ({ task, onDelete, index }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggleComplete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCompleted(!completed);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onDelete(index);
  };

  return (
    <div className="p-4 mb-4 bg-white rounded-md shadow-md">
      <div className="text-md flex justify-between items-center">
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</span>
        <div>
          <button onClick={handleToggleComplete} className="text-blue-500 hover:text-blue-700 mr-2">
            {completed ? "❎" : "✅"}
          </button>
          <button onClick={handleDelete} className="text-red-500 hover:text-red-700 ml-2">
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
