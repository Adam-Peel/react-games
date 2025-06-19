import { useState, useEffect } from "react";
import HangingMan from "./HangingMan";
import WordBox from "./WordBox";
import Keyboard from "./Keyboard";

function GameBox() {
  const inputWord = "TAUTOLOGY";
  const word = inputWord.toLowerCase();
  const initialLetterCheck = Array(word.length).fill(false);

  let [letterCheck, setLetterCheck] = useState(initialLetterCheck);
  let [badGuessLimit, setBadGuessLimit] = useState(9);
  let [badGuessCount, setBadGuessCount] = useState(0);
  let [gameState, setGameState] = useState("Let's play");
  let [gameOver, setGameOver] = useState(false);

  function disableGameButtons() {
    const buttons = document.getElementsByClassName("inputButton");
    const buttonsArray = Array.from(buttons);
    buttonsArray.forEach((button) => {
      button.disabled = true;
      button.classList.remove("selected");
    });
  }

  function checkLetterInWord(letter) {
    if (!word.includes(letter)) {
      //bad letter, poor mr hangman
      setBadGuessCount((prev) => prev + 1);

      if (badGuessCount === badGuessLimit) {
        //Game over point, handle end game
        // display correct word
        setGameOver(true);
        setGameState("Game Over! The word was: " + word);
        disableGameButtons();
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

  useEffect(() => {
    if (!letterCheck.includes(false)) {
      setGameOver(true);
      setGameState("You win!!");
      disableGameButtons();
    }
  }, [letterCheck, gameOver]);

  return (
    <>
      <HangingMan badGuessCount={badGuessCount} />
      <WordBox word={word} letterCheck={letterCheck} gameState={gameState} />
      <Keyboard
        checkLetterInWord={checkLetterInWord}
        setGameState={setGameState}
      />
    </>
  );
}

export default GameBox;
