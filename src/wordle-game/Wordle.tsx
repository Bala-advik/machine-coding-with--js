import "./Wordle.css";
import InputContainer from "./InputContainter";

const Wordle = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          {[...Array(6).keys()].map((elem) => {
            return (
              <div key={elem} className="input-group">
                <InputContainer element={elem} />
              </div>
            );
          })}
        </div>

        <div className="rules">
          <img src="rules.svg" />
        </div>
        <div className="win-screen hide"></div>
      </div>

      <button className="submit hide"></button>
    </>
  );
};

export default Wordle;
