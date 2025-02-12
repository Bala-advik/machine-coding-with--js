import "./Tab.css";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Settings from "./components/Setttings";
import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabData = [
    {
      tabIndex: 1,
      tabName: "Profile",
      component: <Profile />,
    },
    {
      tabIndex: 2,
      tabName: "Interest",
      component: <Interest />,
    },
    {
      tabIndex: 3,
      tabName: "Settings",
      component: <Settings />,
    },
  ];

  const handleTabChange = (tabIndex: any) => {
    setActiveTab(tabIndex);
  }

  return (
    <div className="tab-container">
      {tabData.map((tab) => (
        <div key={tab.tabIndex} className="">
          <div className="tab-heading" onClick={() => handleTabChange(tab.tabIndex)}>{tab?.tabName}</div>
          <div className="tab-component">{activeTab === tab.tabIndex && tab.component}</div>
        </div>
      ))}
    </div>
  );
};
export default Tab;
