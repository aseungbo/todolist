"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name: string, refresh: any) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddTodo() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        placeholder="Type todo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
}
