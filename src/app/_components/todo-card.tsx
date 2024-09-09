"use client";
import React from "react";
import { deleteItem } from "@/service/mutation/delete-todo";

interface dataType {
  title: string;
  description: string;
  id: number;
}

export const TodoCard: React.FC<dataType> = ({ description, id, title }) => {
  const [loading, startTransition] = React.useTransition();

  const deleteTodo = () => {
    startTransition(() => deleteItem(id));
  };

  return (
    <div className="p-3 mx-auto max-w-[500px] bg-slate-200 mb-2 text-center flex justify-between rounded-xl">
      <div className="ml-9 text-start">
        <h2 className="font-bold text-3xl">{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <button
          onClick={deleteTodo}
          className="p-2 border-[2px] border-red-500 rounded-lg text-red-500 my-2 hover:bg-red-500 hover:text-white duration-300"
        >
          {loading ? "Loading..." : "Delete"}
        </button>
      </div>
    </div>
  );
};
