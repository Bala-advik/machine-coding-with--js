import { useState } from "react";
import json from "./data.json";
import "./filefolderstructure.css";

interface fileFolderType {
  id: string;
  name: string;
  isFolder: boolean;
  children?: fileFolderType[];
}

const List = ({
  data,
  addFolderToList,
  handleDeleteFromList,
}: {
  data: fileFolderType[];
  addFolderToList: (parentId: string) => void;
  handleDeleteFromList: (parentId: string) => void;
}) => {
  const [expandedData, setExpandedData] = useState<Record<string, boolean>>({});
  return data.map((node: fileFolderType) => {
    return (
      <div className="file-folder-container" key={node.id}>
        {node.isFolder && node.children && (
          <span
            className="file-folder-expand-item"
            onClick={() =>
              setExpandedData((prev) => ({
                ...prev,
                [node.name]: !prev[node.name],
              }))
            }
          >
            {expandedData[node.name] ? "-" : "+"}
          </span>
        )}
        {node.name}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPg1ZU4cZGwQEWhhF7lXPxfJl1pS9Kd2Ik5w&s"
          style={{
            height: "20px",
            width: "20px",
            marginLeft: "20px",
            marginTop: "2px",
          }}
          alt="add-folder-icon"
          onClick={() => addFolderToList(node.id)}
        />

        <img
          src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png"
          style={{
            height: "20px",
            width: "20px",
            marginLeft: "10px",
          }}
          onClick={() => handleDeleteFromList(node.id)}
          alt="add-folder-icon"
        />

        {expandedData[node.name] && node.children && (
          <List
            data={node.children}
            addFolderToList={addFolderToList}
            handleDeleteFromList={handleDeleteFromList}
          />
        )}
      </div>
    );
  });
};

const FileFolderStructure = () => {
  const [data, setData] = useState<fileFolderType[]>(json);

  const addFolderToList = (parentId: string) => {
    const name = prompt("Provide Folder Name");
    const updatedList = (list: fileFolderType[]) => {
      if (name) {
        return list.map((node: fileFolderType): fileFolderType => {
          if (node.id === parentId) {
            return {
              ...node,
              children: [
                ...(node.children || []),
                { id: Date.now.toString(), name: name || "", isFolder: true },
              ],
            };
          }
          if (node.children) {
            return { ...node, children: updatedList(node.children) };
          }
          return node;
        });
      } else {
        return list;
      }
    };
    setData((prev) => updatedList(prev));
  };

  const handleDeleteFromList = (parentId: string) => {
    const handleDelete = (list: fileFolderType[]) => {
      return list
        .filter((node: fileFolderType) => node.id !== parentId)
        .map((node: fileFolderType): fileFolderType => {
          if (node.children) {
            return { ...node, children: handleDelete(node.children) };
          }
          return node;
        });
    };
    setData((prev) => handleDelete(prev));
    console.log(parentId);
  };

  return (
    <div className="file-folder-page">
      <h1>File/Folder Structure</h1>
      <List
        data={data}
        addFolderToList={addFolderToList}
        handleDeleteFromList={handleDeleteFromList}
      />
    </div>
  );
};

export default FileFolderStructure;
