import { tasksProp } from "./DND";

type DNDListProps = {
  handleDragOver: React.DragEventHandler;
  handleOnDrop: (
    e: React.DragEvent<HTMLDivElement>,
    columnValue: string
  ) => void;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: number) => void;
  tasks: tasksProp[];
  handleDragEnd: React.DragEventHandler;
  columnValue: string;
  columnTitle: string;
};

const DNDList = ({
  handleDragOver,
  handleOnDrop,
  handleDragStart,
  tasks,
  handleDragEnd,
  columnValue,
  columnTitle,
}: DNDListProps) => {
  return (
    <div
      className="column-container"
      onDragOver={handleDragOver}
      onDrop={(e) => handleOnDrop(e, columnValue)}
    >
      <h4>{columnTitle}</h4>
      {tasks
        .filter((task: tasksProp) => task.column === columnValue)
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
