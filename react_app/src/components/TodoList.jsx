import TodoIteams from "./TodoIteams";
import styles from "./TodoList.module.css";
function TodoList({ todos, settodos }) {
  const sortedtodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  console.log(sortedtodos);

  return (
    <div className={styles.list}>
      {sortedtodos.map((iteam) => (
        <TodoIteams
          key={iteam.id}
          iteam={iteam}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
