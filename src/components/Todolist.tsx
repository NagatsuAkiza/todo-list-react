import React from "react";
import TaskCard from "./TaskCard";

interface TodolistProps {
  tasks: string[];
  onDelete: (index: number) => void;
}

const Todolist: React.FC<TodolistProps> = ({ tasks, onDelete }) => {
  return (
    <>
      <div className="flex items-center justify-center my-3">
        <h2 className="text-xl font-bold">Your Task</h2>
      </div>
      {tasks.length === 0 ? (
        <div className="flex items-center justify-center">
          <div>No tasks found.</div>
        </div>
      ) : (
        <div className="max-h-64 overflow-y-auto">
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="mb-2">
                <TaskCard task={task} onDelete={onDelete} index={index} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Todolist;
