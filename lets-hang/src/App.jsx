import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBox from "./components/Game";

function App() {
  const [awaitingAPI, setAwaitingAPI] = useState(false);
  const [gameState, setGameState] = useState("Let's play");
  const [gameWord, setGameWord] = useState("banana");
  const [gameWordClue, setGameWordClue] = useState("One of your 5 a day");
  const [badGuessLimit, setBadGuessLimit] = useState(9);

  function disableGameButtons(bool) {
    const buttons = document.getElementsByClassName("inputButton");
    const buttonsArray = Array.from(buttons);
    buttonsArray.forEach((button) => {
      button.disabled = bool;
    });
  }

  async function fetchWord() {
    try {
      const wordObject = await fetch(
        `https://random-words-api.vercel.app/word`
      );
      const formattedWord = await wordObject.json();
      const word = formattedWord.word.toLowerCase();
      const clue = formattedWord.definition;
      setGameWordClue(clue);
      setGameWord(word);
      setGameState("Let's play");
      disableGameButtons(false);
      document.getElementById("word-form").value = "";
      document.getElementById("word-form").disabled = false;
      const letters = document.getElementsByClassName("letter");
      const lettersArray = Array.from(letters);
      lettersArray.map((letter) => {
        letter.classList.remove("visible");
        letter.classList.add("hidden");
      });
      const inputButtons = document.getElementsByClassName("inputButton");
      const inputButtonArray = Array.from(inputButtons);
      inputButtonArray.forEach((button) => {
        button.classList.remove("selected");
        button.classList.add("unselected");
      });
      setAwaitingAPI(false);
    } catch (err) {
      setGameState("Sorry, there was an error retrieving a word");
      setAwaitingAPI(false);
      console.log(err);
    }
  }

  useEffect(() => {
    if (awaitingAPI) {
      fetchWord();
    }
  }, [awaitingAPI, badGuessLimit]);

  return (
    <>
      <div className="app">
        <Header
          badGuessLimit={badGuessLimit}
          setAwaitingAPI={setAwaitingAPI}
          setBadGuessLimit={setBadGuessLimit}
        />
        <GameBox
          key={gameWord}
          badGuessLimit={badGuessLimit}
          setBadGuessLimit={setBadGuessLimit}
          gameWord={gameWord}
          gameWordClue={gameWordClue}
          gameState={gameState}
          setGameState={setGameState}
        />
      </div>
    </>
  );
}

export default App;
