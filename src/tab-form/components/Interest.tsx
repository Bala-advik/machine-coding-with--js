const Interest = ({
  individualTabData,
  setIndividualTabData,
  errors,
}: {
  individualTabData: any;
  errors: any;
  setIndividualTabData: any;
}) => {
  const { interests } = individualTabData;
  const handleSetData = (e: any) => {
    setIndividualTabData((prevState: any) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i: any) => i !== e.target.name),
    }));
  };
  return (
    <div className="interest-container">
      <label>
        <input
          type="checkbox"
          checked={interests.includes("coding")}
          name={"coding"}
          onChange={handleSetData}
        />
        Coding
      </label>
      <label>
        <input
          type="checkbox"
          checked={interests.includes("trekking")}
          name={"trekking"}
          onChange={handleSetData}
        />
        Trekking
      </label>
      <label>
        <input
          type="checkbox"
          checked={interests.includes("swimming")}
          name={"swimming"}
          onChange={handleSetData}
        />
        Swimming
      </label>
      <span>
        <p className="error-text">{errors.interests}</p>
      </span>
    </div>
  );
};
export default Interest;
