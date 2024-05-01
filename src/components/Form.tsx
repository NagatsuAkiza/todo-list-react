"use client";

import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import Todolist from "./Todolist";

const Form = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDelete = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-20">
      <div className="flex flex-col text-center w-72">
        <label htmlFor="item" className="mb-3 text-xl font-bold">
          New Task
        </label>
        <input
          type="text"
          id="item"
          className="w-full p-3 rounded-md shadow-md"
          placeholder="Add new task..."
          autoComplete="off"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center w-full gap-1 px-4 py-3 mt-4 font-bold rounded-md shadow-md bg-ascent">
          Add <Plus size={19} weight="bold" />
        </button>
        <div className="mt-5">
          <Todolist tasks={tasks} onDelete={handleDelete} />
        </div>
      </div>
    </form>
  );
};

export default Form;
