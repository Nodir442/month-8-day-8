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
    <div className="p-3 mx-auto max-w-[500px] bg-slate-200 mb-2 text-center rounded-xl">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{description}</p>
      <button
        onClick={deleteTodo}
        className="p-2 border border-red-500 rounded-lg text-red-500 my-2"
      >
        {loading ? "Loading..." : "Delete"}
      </button>
    </div>
  );
};
