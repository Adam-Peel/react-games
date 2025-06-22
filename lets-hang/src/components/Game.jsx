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
  setWinCount,
  setCumulativeGameScore,
  gameCount,
  scoreMultiplier,
}) {
  if (gameCount === 0) {
    return <h3>Set the difficulty and get a new word to start playing!</h3>;
  }

  let [word, setWord] = useState(gameWord);

  function winState() {
    setGameState("You win!!");
    setWinCount((prev) => prev + 1);
    disableGameButtons(true);
    document.getElementById("difficulty").disabled = false;
    setCumulativeGameScore((prev) => {
      return prev + scoreMultiplier;
    });
  }

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
    if (wordToCheck === word) {
      winState();
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
          document.getElementById("difficulty").disabled = false;
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
      winState();
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
        gameWordClue={gameWordClue}
      />
    </>
  );
}

export default GameBox;
