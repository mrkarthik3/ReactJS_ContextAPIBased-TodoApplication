import React from "react";
import styles from "./App.module.css";
import TodoPage from "./TodoPage";

const App = (props) => {
  return (
    <div className={styles.App}>
      <h1>Sanity Check - App</h1>
      <TodoPage />
    </div>
  );
};

export default App;
