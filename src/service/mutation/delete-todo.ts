"use server";

import { revalidateTag } from "next/cache";

const url = process.env.APP_URL;

export const deleteItem = async (id: Number) => {
  try {
    const res = await fetch(`${url}/todos/${id}`, { method: "DELETE" });
    const data = await res.json();
    return data;
  } catch (error) {
    const err = (error as Error).message;
    throw new Error(err);
  } finally {
    revalidateTag("todos");
  }
};
