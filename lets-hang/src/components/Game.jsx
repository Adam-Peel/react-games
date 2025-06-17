import { useState } from "react";
import HangingMan from "./HangingMan";
import WordBox from "./WordBox";
import Keyboard from "./Keyboard";

function GameBox() {
    const inputWord = "SLIMEY";
    const word = inputWord.toLowerCase();
    const initialLetterCheck = Array(word.length).fill(false);

    let [letterCheck, setLetterCheck] = useState(initialLetterCheck);
    let [badGuessLimit, setBadGuessLimit] = useState(9);
    let [badGuessCount, setBadGuessCount] = useState(0);

    function checkLetterInWord(letter) {
        //If letter is not in word, add block to hangman
        //If letter is in word, add correctly placed letter in word

        if (!word.includes(letter)) {
            //bad letter, poor mr hangman
            setBadGuessCount(++badGuessCount);

            if (badGuessCount === badGuessLimit) {
                //Game over point, handle end game
                // display correct word
            }

            console.log("Bad Guess! Count = " + badGuessCount);
            return;
        } else {
            const letterCheckCopy = [...letterCheck];
            for (let i = 0; i < word.length; i++) {
                //loop through word, if index contains letter, update word visual
                if (word[i] === letter) {
                    letterCheckCopy[i] = true;
                }
            }
            setLetterCheck(letterCheckCopy);
        }
    }

    return (
        <>
            <HangingMan badGuessCount={badGuessCount} />
            <WordBox word={word} letterCheck={letterCheck} />
            <Keyboard checkLetterInWord={checkLetterInWord} />
        </>
    );
}

export default GameBox;
