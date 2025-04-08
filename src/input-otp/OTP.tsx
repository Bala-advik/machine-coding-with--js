import React, { useEffect, useState } from "react";
import "./otp.css";

const OTP = () => {
  const initInputArr = Array(6).fill("");
  const [inputArr, setInputArr] = useState(initInputArr);
  const inputRefs = Array(6)
    .fill(0)
    .map(() => React.createRef<HTMLInputElement>());
  console.log(inputRefs);
  const handleChange = (e: any, index: number) => {
    if (isNaN(e.target.value)) return;
    const updatedValue = e.target.value.trim().slice(-1);
    setInputArr((prev) => {
      const newInputArr = [...prev];
      newInputArr[index] = updatedValue;
      return newInputArr;
    });
    if (updatedValue && index < inputArr.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleDelete = (e: any, index: number) => {
    if (!e.target.value && e.key === "Backspace" && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  return (
    <div className="otp-contianer">
      <h1>OTP Validation</h1>
      {inputArr.map((_, index: number) => (
        <input
          key={index}
          type="text"
          value={inputArr[index]}
          ref={inputRefs[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleDelete(e, index)}
        />
      ))}
    </div>
  );
};
export default OTP;
