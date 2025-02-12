const Interest = ({
    individualTabData,
    setIndividualTabData,
  }: {
    individualTabData: any;
    setIndividualTabData: any;
  }) => {
    const {interests} = individualTabData;
    const handleSetData = (e: any) => {
        // setIndividualTabData((prevState: any) => ({
        //     ...prevState,
        //     coding: [...prevState.coding, e.target.value]
        // }))
    }
    return (
        <div className="interest-container">
            <input type="checkbox" checked={interests.includes("coding")} value={"coding"} onChange={handleSetData}/>Coding
            <input type="checkbox" checked={interests.includes("trekking")} value={"trekking"} onChange={handleSetData}/>Trekking
            <input type="checkbox" checked={interests.includes("swimming")} value={"swimming"} onChange={handleSetData}/>Swimming
        </div>
    )
}
export default Interest;