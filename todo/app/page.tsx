import AddItem from "./add-new-todo";
import TodoList from "./todo-list";

/***
 * step 1.
 * - Add todo component
 * - todo list component
 */
export default function Page() {
  return (
    <div>
      <AddItem />
      <TodoList />
    </div>
  );
}
