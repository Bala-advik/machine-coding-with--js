import { useState } from "react";
import "./nestedcheckboxes.css";

interface checkBoxType {
  id: number;
  name: string;
  children?: checkBoxType[];
}

const defaultcheckBoxes: checkBoxType[] = [
  {
    id: 1,
    name: "tv",
    children: [
      { id: 2, name: "sony" },
      { id: 3, name: "apple" },
    ],
  },
  {
    id: 4,
    name: "gaming",
    children: [
      {
        id: 5,
        name: "pc",
        children: [
          {
            id: 10,
            name: "dying-light2",
          },
          {
            id: 11,
            name: "ac-blackflag",
          },
        ],
      },
      { id: 6, name: "ps4" },
    ],
  },
  {
    id: 7,
    name: "bike",
    children: [{ id: 8, name: "fazer" }],
  },
  {
    id: 9,
    name: "stove",
  },
];

const CheckBoxComp = ({
  checkBoxes,
  checkedData,
  setCheckedData,
}: {
  checkBoxes: checkBoxType[];
  checkedData: any;
  setCheckedData: any;
}) => {
  {
    const handleChange = (isChecked: any, node: checkBoxType) => {
      const newState = { ...checkedData };

      const updateChildren = (node: checkBoxType, isChecked: Boolean) => {
        newState[node.id] = isChecked;
        node.children?.forEach((childNode: any) => {
          updateChildren(childNode, isChecked);
        });
      };
      updateChildren(node, isChecked);

      const updateAncestorStates = (checkBoxItems: checkBoxType[]) => {
        checkBoxItems.forEach((nodes: checkBoxType) => {
          if (nodes.children) {
            updateAncestorStates(nodes.children);
          }
          if (nodes.children && nodes.children.length > 0) {
            const allChildrenChecked = nodes.children.every(
              (child) => newState[child.id]
            );
            newState[nodes.id] = allChildrenChecked;
          }
        });
      };

      updateAncestorStates(defaultcheckBoxes);
      setCheckedData(newState);
    };
    return checkBoxes.map((node: checkBoxType) => (
      <div key={node.id} className="parent-node">
        <input
          type="checkbox"
          checked={checkedData[node.id] || false}
          onChange={(e) => handleChange(e.target.checked, node)}
        />
        <label>{node.name}</label>
        {node.children && (
          <CheckBoxComp
            checkedData={checkedData}
            checkBoxes={node.children}
            setCheckedData={setCheckedData}
          />
        )}
      </div>
    ));
  }
};

const NestedCheckbox = () => {
  const [checkedData, setCheckedData] = useState({});
  return (
    <div>
      <CheckBoxComp
        checkBoxes={defaultcheckBoxes}
        checkedData={checkedData}
        setCheckedData={setCheckedData}
      />
    </div>
  );
};

export default NestedCheckbox;
