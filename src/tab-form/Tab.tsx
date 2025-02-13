import "./Tab.css";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Settings from "./components/Setttings";
import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [individualTabData, setIndividualTabData] = useState({
    name: "",
    age: 0,
    email: "",
    interests: [],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});

  const tabData = [
    {
      tabIndex: 1,
      tabName: "Profile",
      component: Profile,
      validate: () => {
        const err: any = {};
        if (individualTabData.name === "") {
          err.name = "Enter a valid name";
        }
        if (individualTabData.age === 0 || individualTabData.age < 18) {
          err.age = "Enter a valid Age";
        }
        if (individualTabData.email === "") {
          err.email = "Enter a valid Email";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      tabIndex: 2,
      tabName: "Interest",
      component: Interest,
      validate: () => {
        const err: any = {};
        if (individualTabData.interests.length === 0) {
          err.interests = "Please select atleast one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      tabIndex: 3,
      tabName: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const handleTabChange = (tabIndex: any) => {
    if (
      tabData[activeTab - 1] &&
      tabData[activeTab - 1].validate &&
      tabData[activeTab - 1]?.validate()
    ) {
      setActiveTab(tabIndex);
    }
  };

  const handleNext = () => {
    if (
      tabData[activeTab - 1] &&
      tabData[activeTab - 1].validate &&
      tabData[activeTab - 1]?.validate()
    ) {
      setActiveTab((prevState) => prevState + 1);
    }
  };
  const handlePrevious = () => {
    if (
      tabData[activeTab - 1] &&
      tabData[activeTab - 1].validate &&
      tabData[activeTab - 1]?.validate()
    ) {
      setActiveTab((prevState) => prevState - 1);
    }
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
          errors={errors}
        />
      </div>

      <div className="buttons">
        {activeTab > 1 && <button onClick={handlePrevious}>Prev</button>}
      </div>
      <div className="buttons">
        {activeTab < tabData.length && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>

      <div className="buttons">
        {activeTab === tabData.length && <button>Submit</button>}
      </div>
    </div>
  );
};
export default Tab;
