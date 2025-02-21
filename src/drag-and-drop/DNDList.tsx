import { tasksProp } from "./dnd";

const DNDList = ({
  handleDragOver,
  handleOnDrop,
  handleDragStart,
  tasks,
  handleDragEnd,
  column,
}: {
  handleDragOver: any;
  handleOnDrop: any;
  handleDragStart: any;
  tasks: tasksProp[];
  handleDragEnd: any;
  column: string;
}) => {
  return (
    <div
      className="column-container"
      onDragOver={handleDragOver}
      onDrop={(e) => handleOnDrop(e, column)}
    >
      <h4>To-Do</h4>
      {tasks
        .filter((task: tasksProp) => task.column === column)
        .map((task: tasksProp) => (
          <div
            draggable
            className="list-container"
            key={task.id}
            onDragStart={(e) => handleDragStart(e, task.id)}
            onDragEnd={handleDragEnd}
          >
            <span>{task.title}</span>
          </div>
        ))}
    </div>
  );
};

export default DNDList;
