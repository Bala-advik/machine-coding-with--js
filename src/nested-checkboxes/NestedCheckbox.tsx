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
      setCheckedData((prev: any) => {
        const newState = { ...prev };
        newState[node.id] = isChecked;

        // Handling Top to Bottom Click Actions
        const handleParentClick = (node: checkBoxType) => {
          newState[node.id] = isChecked;
          node.children?.forEach((childNode: any) => {
            handleParentClick(childNode);
          });
        };
        handleParentClick(node);

        // Handling Bottom to Top Click Actions
        const validateChildFilled = (node: checkBoxType) => {
          if (!node.children) {
            return newState[node.id] || false;
          }
          const allChildrenChecked = node.children.every(
            (elem): Boolean => validateChildFilled(elem)
          );
          newState[node.id] = allChildrenChecked;
          return allChildrenChecked;
        };
        checkBoxes.forEach((node: checkBoxType) => validateChildFilled(node));
        return newState;
      });
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
