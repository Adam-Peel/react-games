import { useState } from "react";

function Key({ setGameState, letter, checkLetterInWord }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSelected, setIsSelected] = useState("unselected");

  function handleClick(letter) {
    const propLetter = letter.toLowerCase();
    checkLetterInWord(propLetter);
    setIsDisabled(true);
    setIsSelected("selected");
    setGameState("Keep guessing...");
  }

  return (
    <button
      onClick={() => {
        handleClick(letter);
      }}
      id={letter}
      className={`inputButton ${isSelected}`}
      disabled={isDisabled}
    >
      {letter}
    </button>
  );
}

export default Key;
