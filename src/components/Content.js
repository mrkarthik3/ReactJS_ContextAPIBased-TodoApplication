import React from "react";
import styles from "./Content.module.css";
import ActivityList from "./ActivityList";

const Content = (props) => {
  return (
    <div>
      <h1>Content Sanity Check</h1>
      <ActivityList />
    </div>
  );
};

export default Content;
