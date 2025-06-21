import { useState, useEffect } from "react";
import HangingMan from "./HangingMan";
import WordBox from "./WordBox";
import Keyboard from "./Keyboard";
import Searchbar from "./Searchbar";

function GameBox() {
  const [inputWord, setWord] = useState("hangman");

  const word = inputWord.toLowerCase();
  function initialLetterCheck() {
    return Array(word.length).fill(false);
  }

  let [letterCheck, setLetterCheck] = useState(initialLetterCheck());
  let [badGuessLimit, setBadGuessLimit] = useState(9);
  let [badGuessCount, setBadGuessCount] = useState(0);
  let [gameState, setGameState] = useState("Let's play");
  let [resetCounter, setResetCounter] = useState(0);

  function disableGameButtons(bool) {
    const buttons = document.getElementsByClassName("inputButton");
    const buttonsArray = Array.from(buttons);
    buttonsArray.forEach((button) => {
      button.disabled = bool;
    });
  }

  function checkWord(wordToCheck) {
    if (wordToCheck === inputWord) {
      setGameState("You win!!");
      disableGameButtons(true);
      setBadGuessCount(0);
      return true;
    } else {
      setBadGuessCount((prev) => {
        prev + 1;
      });
    }

    if (badGuessCount === badGuessLimit) {
      setGameState("Game Over! The word was: " + word);
      disableGameButtons(true);
    }
  }

  function checkLetterInWord(letter) {
    if (!word.includes(letter)) {
      setBadGuessCount((badGuessCount) => {
        const newCount = badGuessCount + 1;
        if (newCount === badGuessLimit) {
          setGameState("Game Over! The word was: " + word);
          disableGameButtons(true);
        }
        return newCount;
      });
      return;
    }
    const letterCheckCopy = [...letterCheck];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        letterCheckCopy[i] = true;
      }
    }
    setLetterCheck(letterCheckCopy);
  }

  useEffect(() => {
    if (!letterCheck.includes(false)) {
      setGameState("You win!!");
      disableGameButtons(true);
    }
  }, [letterCheck]);

  function resetGame() {
    const letters = document.getElementsByClassName("letter");
    const lettersArray = Array.from(letters);
    lettersArray.map((letter) => {
      letter.classList.remove("visible");
      letter.classList.add("hidden");
    });
    setLetterCheck(initialLetterCheck());
    setBadGuessCount(0);
    setGameState("Let's play");
    setResetCounter((prev) => prev + 1);
    disableGameButtons(false);
  }

  return (
    <>
      <HangingMan badGuessCount={badGuessCount} />
      <WordBox word={word} letterCheck={letterCheck} gameState={gameState} />
      <Searchbar
        checkWord={checkWord}
        setBadGuessCount={setBadGuessCount}
        setGameState={setGameState}
        badGuessCount={badGuessCount}
      />
      <Keyboard
        checkLetterInWord={checkLetterInWord}
        resetGame={resetGame}
        setGameState={setGameState}
        resetCounter={resetCounter}
        checkWord={checkWord}
      />
    </>
  );
}

export default GameBox;
