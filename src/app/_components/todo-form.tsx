"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { createTodo } from "@/service/mutation/delete-todo";

interface dataType {
  title: string;
  description: string;
}

export const TodoForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<dataType>();
  const [loading, startTransition] = React.useTransition();
  const onSubmit = (data: dataType) => {
    startTransition(() => {
      createTodo(data);
    });
    reset();
  };
  return (
    <div>
      <form
        className="flex flex-col justify-between h-[180px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="bg-slate-300 p-4 rounded-xl"
          placeholder="Name"
          {...register("title")}
          type="text"
          name="title"
        />
        <input
          className="bg-slate-300 p-4 rounded-xl"
          placeholder="Description"
          {...register("description")}
          type="text"
          name="description"
        />
        <button
          className="bg-green-300 p-3 rounded-xl w-[100px] mx-auto font-bold border-[2px] border-transparent hover:border-black duration-300"
          type="submit"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
