import { useState } from "react";

function Key({ letter, checkLetterInWord }) {
  const [selectStatus, setSelectStatus] = useState("unselected");
  const [buttonStatus, setButtonStatus] = useState(false);

  function handleClick(letter) {
    const propLetter = letter.toLowerCase();
    checkLetterInWord(propLetter);
    setSelectStatus("selected");
    setButtonStatus(true);
  }

  return (
    <button
      onClick={() => {
        handleClick(letter);
      }}
      id={letter}
      className={selectStatus + " inputButton"}
      disabled={buttonStatus}
    >
      {letter}
    </button>
  );
}

export default Key;
