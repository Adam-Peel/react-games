import { useState } from "react";
import HangingMan from "./HangingMan";
import WordBox from "./WordBox";
import Keyboard from "./Keyboard";

function GameBox() {
    const word = "SLIMEY";

    let [badGuessCount, setBadGuessCount] = useState(0);

    function checkLetterInWord(letter) {
        //If letter is not in word, add block to hangman
        //If letter is in word, add correctly placed letter in word

        if (!word.includes(letter)) {
            //bad letter, poor mr hangman
            setBadGuessCount(++badGuessCount);
            console.log("Bad Guess! Count = " + badGuessCount);
            return;
        } else {
            for (let i = 0; i < word.length; i++) {}
        }
    }

    return (
        <>
            <HangingMan badGuessCount={badGuessCount} />
            <WordBox word={word} />
            <Keyboard checkLetterInWord={checkLetterInWord} />
        </>
    );
}

export default GameBox;
