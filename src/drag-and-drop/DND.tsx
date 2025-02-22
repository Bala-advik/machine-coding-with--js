import { useState } from "react";
import "./dndstyles.css";
import DNDList from "./DNDList";

export interface tasksProp {
  id: number;
  title: string;
  column: string;
}

const DragAndDrop = () => {
  const [tasks, setTasks] = useState<tasksProp[]>([
    { id: 1, title: "Reading", column: "todo" },
    { id: 2, title: "Writing", column: "todo" },
    { id: 3, title: "Driving", column: "in-progress" },
    { id: 4, title: "Swimming", column: "todo" },
    { id: 5, title: "Cooking", column: "done" },
  ]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: number
  ) => {
    e.dataTransfer.setData("text/plain", taskId.toString());
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // TO DO for Single Column Drag And Drop

    // const [draggingIndex, setDraggingIndex] = useState(0);
    // setDraggingIndex(tasks.findIndex((value) => value.id === taskId)); IN DRAG START
    // if(draggingIndex === null) return;

    // const updatedTasks = [...tasks];
    // const draggedTask = updatedTasks[draggingIndex];
    // updatedTasks.slice(draggingIndex, 1);
    // updatedTasks.slice(index, 0, draggedTask);
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>, column: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const updatedTasks = tasks.map((task: tasksProp) =>
      task.id === parseInt(taskId) ? { ...task, column } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="dnd-container">
      <DNDList
        handleDragOver={handleDragOver}
        handleOnDrop={handleOnDrop}
        tasks={tasks}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        columnValue="todo"
        columnTitle="To-Do"
      />
      <DNDList
        handleDragOver={handleDragOver}
        handleOnDrop={handleOnDrop}
        tasks={tasks}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        columnValue="in-progress"
        columnTitle="In Progress"
      />
      <DNDList
        handleDragOver={handleDragOver}
        handleOnDrop={handleOnDrop}
        tasks={tasks}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        columnValue="done"
        columnTitle="Done"
      />
    </div>
  );
};

export default DragAndDrop;
