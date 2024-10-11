import { useState } from "react";
import styles from "./Form.module.css";
function Form({ settodos }) {
  // const [todo, settodo] = useState("");
  const [todo, settodo] = useState("");

  function handelsubmit(e) {
    e.preventDefault(); //prevents the action of the form which is to refreash the page adds the todo items to the todos array
    settodo("");
    settodos((prev) => [
      ...prev,
      { id: prev.length < 1 ? 1 : ++prev.length, name: todo, done: false },
    ]); //sets the nane of the todo and the done value to flase
  }
  return (
    <div className={styles.container}>
      <form className={styles.todoForm} onSubmit={handelsubmit}>
        <input
          className={styles.formInput}
          onChange={(e) => settodo(e.target.value)} //use to collet data from the user input
          type="text"
          value={todo} //assing  the valu of the input field to todo.name
          placeholder="enter todo item...... "
        ></input>
        <button className={styles.button} type="submit">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Form;
