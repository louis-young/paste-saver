import React from "react";

import "./List.scss";

const List = ({ tasks, deleteTask }) => {
  return (
    <section>
      {tasks
        ? tasks.map((task) => (
            <li key={task.id} onClick={() => deleteTask(task.id)}>
              {task.text}
            </li>
          ))
        : null}
    </section>
  );
};

export default List;
