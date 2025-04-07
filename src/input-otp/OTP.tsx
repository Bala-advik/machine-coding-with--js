import { useState } from "react";
import "./otp.css";

const OTP = () => {
  const initInputArr = Array(6).fill(1);
  const [inputArr, setInputArr] = useState(initInputArr);
  return (
    <div className="otp-contianer">
      <h1>OTP Validation</h1>
      {inputArr.map((_, index) => (
        <input key={index} type="text" />
      ))}
    </div>
  );
};
export default OTP;
