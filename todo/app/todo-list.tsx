import Todo from "./todo";

const getTodos = async () => {
  let todos = await fetch(`http://localhost:3001/api/todo/list`);
  return todos.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();
  console.log(todos);
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((obj: any, key: number) => {
          return (
            <li key={key}>
              <Todo todo={obj} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
