import React, { useState } from "react";
import styles from "./TodoIteams.module.css";

function TodoIteams({ iteam, todos, settodos }) {
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [text, setText] = useState("");

  function handleDelete(iteam) {
    console.log("you cliked me ooooo", iteam);
    settodos(todos.filter((todo) => todo !== iteam));
  }
  function handleClick(name) {
    console.log(name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    settodos(newArray);
  }
  function handleEdit() {
    settodos((prev) =>
      prev.map((todo) =>
        todo.id === todoToEdit ? { ...todo, name: text } : todo
      )
    );
    console.log(text, todoToEdit);
    setTodoToEdit(null);
  }
  const line = iteam.done ? styles.completed : "";
  return (
    <div className={styles.iteams}>
      {todoToEdit ? (
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleEdit}>submit</button>
        </div>
      ) : (
        <div className={styles.iteamsName}>
          <span className={line} onClick={() => handleClick(iteam.name)}>
            {iteam.name}
          </span>
          <span>
            <button
              onClick={(e) => {
                setTodoToEdit(iteam.id);
                setText(iteam.name);
              }}
              className={styles.Ebutton}
            >
              EDIT
            </button>
            <button
              onClick={() => handleDelete(iteam)}
              className={styles.Dbutton}
            >
              x
            </button>
          </span>
        </div>
      )}

      <hr className={styles.hr} />
    </div>
  );
}

export default TodoIteams;
