import { useState } from "react";

function Key({ setGameState, letter, checkLetterInWord }) {
  const [isDisabled, setIsDisabled] = useState(false);

  function handleClick(letter) {
    const propLetter = letter.toLowerCase();
    checkLetterInWord(propLetter);
    setIsDisabled(true);
    setGameState("Keep guessing...");
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
