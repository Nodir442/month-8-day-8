import { getData } from "@/service/query/get-todos";
import { TodoCard } from "./_components/todo-card";

export default async function Home() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-4">Todo-list</h1>
      {data.map((item) => (
        <TodoCard key={item.id} {...item} />
      ))}
    </div>
  );
}
