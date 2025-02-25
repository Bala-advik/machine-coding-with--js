import { useEffect, useRef, useState } from "react";

let RANDOM_WORD = "ZEBRA";

const InputContainer = ({ element }: { element: number }) => {
  const [character, setCharacter] = useState(Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(5).fill(null));

  const handleChange = (e: any, index: any) => {
    const { value } = e.target;

    const newCharacter = [...character];
    newCharacter[index] = value;
    setCharacter(newCharacter);

    if (index < character.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (index === newCharacter.length - 1) {
      let successCount = 0;
      let successLetters = "";
      for (let i in newCharacter) {
        if (RANDOM_WORD[i] === newCharacter[i]) {
          inputRefs.current[i]?.classList.add("correct");
          successCount += 1;
          successLetters += newCharacter[i];
        } else if (
          RANDOM_WORD.includes(newCharacter[i]) &&
          !successLetters.includes(newCharacter[i])
        ) {
          inputRefs.current[i]?.classList.add("exists");
        } else {
          inputRefs.current[i]?.classList.add("incorrect");
        }
      }
    }
  };

  const handleKeyDown = (e: any, index: any) => {
    if (e.key === "Backspace" && character[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  useEffect(() => {
    if (element === 0) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  return [...Array(5).keys()].map((elem, index) => {
    return (
      <input
        key={elem}
        value={character[index]}
        className="input-box"
        type="text"
        disabled={element !== 0}
        maxLength={1}
        onKeyDown={(e: any) => handleKeyDown(e, index)}
        onChange={(e: any) => handleChange(e, index)}
        ref={(el: any) => (inputRefs.current[index] = el)}
      />
    );
  });
};

export default InputContainer;
