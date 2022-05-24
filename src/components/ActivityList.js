import React from "react";
import styles from "./ActivityList.module.css";
import Activity from "./Activity";

function ActivityList(props) {
  return (
    <div>
      <h1>Sanity Check! - Activity List</h1>
      <Activity />
    </div>
  );
}

export default ActivityList;
