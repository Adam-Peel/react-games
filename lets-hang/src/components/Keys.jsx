import { useState } from "react";

function Key({ letter, checkLetterInWord }) {
  const [isDisabled, setIsDisabled] = useState(false);

  function handleClick(letter) {
    console.log("Key pressed");
    const propLetter = letter.toLowerCase();
    checkLetterInWord(propLetter);
    setIsDisabled(true);
  }

  return (
    <button
      onClick={() => {
        handleClick(letter);
      }}
      id={letter}
      className={"inputButton"}
      disabled={isDisabled}
    >
      {letter}
    </button>
  );
}

export default Key;
