import { useState } from "react";

function Key({ letter, checkLetterInWord }) {
    const [selectStatus, setSelectStatus] = useState("unselected");

    function handleClick(letter) {
        const propLetter = letter.toLowerCase();
        checkLetterInWord(propLetter);
        setSelectStatus("selected");
    }

    return (
        <button
            onClick={() => {
                handleClick(letter);
            }}
            id={letter}
            className={selectStatus}
        >
            {letter}
        </button>
    );
}

export default Key;
