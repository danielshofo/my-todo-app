import styles from "./Footer.module.css";
function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.Footer}>
      <span>completedTodo:{completedTodos} </span>
      totalTodos:{totalTodos}
    </div>
  );
}

export default Footer;
