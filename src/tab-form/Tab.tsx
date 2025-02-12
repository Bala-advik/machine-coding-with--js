import "./Tab.css";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Settings from "./components/Setttings";
import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [individualTabData, setIndividualTabData] = useState({
    name: "",
    age: "",
    email: "",
    interests: ["coding","swimming","trekking"],
    theme: false,
  });
  
  const tabData = [
    {
      tabIndex: 1,
      tabName: "Profile",
      component: Profile,
    },
    {
      tabIndex: 2,
      tabName: "Interest",
      component: Interest,
    },
    {
      tabIndex: 3,
      tabName: "Settings",
      component: Settings,
    },
  ];

  const handleTabChange = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  const ActiveTabComponent: any = tabData[activeTab - 1].component;

  return (
    <div>
      <div className="tab-container">
        {tabData.map((tab) => (
          <div key={tab.tabIndex}>
            <div
              className="tab-heading"
              onClick={() => handleTabChange(tab.tabIndex)}
            >
              {tab?.tabName}
            </div>
          </div>
        ))}
      </div>
      <div className="tab-component">
        <ActiveTabComponent
          individualTabData={individualTabData}
          setIndividualTabData={setIndividualTabData}
        />
      </div>
    </div>
  );
};
export default Tab;
