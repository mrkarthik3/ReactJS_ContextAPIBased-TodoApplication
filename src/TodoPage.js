import React from "react";
import styles from "./TodoPage.module.css";
import Header from "./components/Header";
import Content from "./components/Content";

const TodoPage = (props) => {
  return (
    <div className={styles.App}>
      <h1>Sanity Check - TodoPage</h1>
      <Header />
      <Content />
    </div>
  );
};

export default TodoPage;
