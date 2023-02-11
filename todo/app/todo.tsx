"use client";

import { useRouter } from "next/navigation";

interface TodoProps {
  todo: any;
}

async function update(id: string, isDone: boolean, refresh: any) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

async function deleteTodo(id: string, refresh: any) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });
  refresh();
}

export default function Todo(props: TodoProps) {
  const { todo } = props;

  const router = useRouter();

  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </>
  );
}
