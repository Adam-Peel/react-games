import { useState, useEffect } from "react";
import HangingMan from "./HangingMan";
import WordBox from "./WordBox";
import Keyboard from "./Keyboard";
import Searchbar from "./Searchbar";

function GameBox({
  badGuessLimit,
  setBadGuessLimit,
  gameWord,
  gameWordClue,
  gameState,
  setGameState,
}) {
  let [inputWord, setWord] = useState(gameWord);
  const [resetCounter, setResetCounter] = useState(0);
  console.log(badGuessLimit);
  const word = inputWord.toLowerCase();
  function initialLetterCheck() {
    return Array(word.length).fill(false);
  }
  const [letterCheck, setLetterCheck] = useState(initialLetterCheck());

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
      return true;
    } else {
      setBadGuessLimit((prev) => {
        prev - 1;
      });
    }
  }

  function checkLetterInWord(letter) {
    if (!word.includes(letter)) {
      setBadGuessLimit((badGuessCount) => {
        const newLimit = badGuessCount - 1;
        if (newLimit === 0) {
          setGameState("Game Over! The word was: " + word);
          disableGameButtons(true);
        }
        return newLimit;
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

  return (
    <>
      <HangingMan
        badGuessLimit={badGuessLimit}
        word={word}
        setGameState={setGameState}
        disableGameButtons={disableGameButtons}
      />
      <WordBox word={word} letterCheck={letterCheck} gameState={gameState} />
      <Searchbar
        checkWord={checkWord}
        setBadGuessLimit={setBadGuessLimit}
        setGameState={setGameState}
        badGuessLimit={badGuessLimit}
      />
      <Keyboard
        checkLetterInWord={checkLetterInWord}
        setGameState={setGameState}
        resetCounter={resetCounter}
      />
    </>
  );
}

export default GameBox;
