const Settings = ({
  individualTabData,
  setIndividualTabData,
}: {
  individualTabData: any;
  setIndividualTabData: any;
}) => {
  const { theme } = individualTabData;
  const hanldeDataChange = (e: any) => {
    setIndividualTabData((prevState: any) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div className="settings-container">
      <label>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={hanldeDataChange}
        />
        Dark
      </label>
      <label>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={hanldeDataChange}
        />
        Light
      </label>
    </div>
  );
};
export default Settings;
