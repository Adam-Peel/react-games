import { useState, useEffect } from "react";
import HangingMan from "./HangingMan";
import WordBox from "./WordBox";
import Keyboard from "./Keyboard";

function GameBox() {
  const inputWord = "TAUTOLOGY";
  const word = inputWord.toLowerCase();
  function initialLetterCheck() {
    return Array(word.length).fill(false);
  }

  let [letterCheck, setLetterCheck] = useState(initialLetterCheck());
  let [badGuessLimit, setBadGuessLimit] = useState(9);
  let [badGuessCount, setBadGuessCount] = useState(0);
  let [gameState, setGameState] = useState("Let's play");

  function disableGameButtons() {
    const buttons = document.getElementsByClassName("inputButton");
    const buttonsArray = Array.from(buttons);
    buttonsArray.forEach((button) => {
      button.disabled = true;
    });
  }

  function checkLetterInWord(letter) {
    if (!word.includes(letter)) {
      //bad letter, poor mr hangman
      setBadGuessCount((badGuessCount) => {
        const newCount = badGuessCount + 1;
        if (newCount === badGuessLimit) {
          //Game over point, handle end gameover
          // display correct word
          setGameState("Game Over! The word was: " + word);
          disableGameButtons();
        }
        return newCount;
      });
      return;
    }
    const letterCheckCopy = [...letterCheck];
    for (let i = 0; i < word.length; i++) {
      //loop through word, if index contains letter, update word visual
      if (word[i] === letter) {
        letterCheckCopy[i] = true;
      }
    }
    setLetterCheck(letterCheckCopy);
  }

  useEffect(() => {
    if (!letterCheck.includes(false)) {
      setGameState("You win!!");
      disableGameButtons();
    }
  }, [letterCheck]);

  function resetGame() {
    setLetterCheck(initialLetterCheck());
    setBadGuessCount(0);
    setGameState("Let's play");
    const buttons = document.getElementsByClassName("inputButton");
    const buttonsArray = Array.from(buttons);
    buttonsArray.forEach((button) => {
      button.disabled = false;
    });
  }

  return (
    <>
      <HangingMan badGuessCount={badGuessCount} />
      <WordBox word={word} letterCheck={letterCheck} gameState={gameState} />
      <Keyboard
        checkLetterInWord={checkLetterInWord}
        resetGame={resetGame}
        setGameState={setGameState}
        gameState={gameState}
      />
    </>
  );
}

export default GameBox;
