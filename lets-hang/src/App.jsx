import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBox from "./components/Game";

function App() {
  const [awaitingAPI, setAwaitingAPI] = useState(false);
  const [wordLength, setWordLength] = useState(7);
  const [gameState, setGameState] = useState("Let's play");
  const [gameWord, setGameWord] = useState("banana");

  async function fetchWord(wordLength) {
    try {
      const word = await fetch(
        `https://random-word-api.vercel.app/api?words=1&length=${wordLength}`
      );
      const formattedWord = await word.json();
      setGameWord(formattedWord);
      setGameState("Let's play");
      setAwaitingAPI(false);
    } catch (err) {
      setGameState("Sorry, there was an error retrieving a word");
      setAwaitingAPI(false);
      console.log(err);
    }
  }

  useEffect(() => {
    if (awaitingAPI) {
      fetchWord(wordLength);
    }
  }, [awaitingAPI, wordLength]);

  return (
    <>
      <div className="app">
        <Header
          setAwaitingAPI={setAwaitingAPI}
          wordLength={wordLength}
          setWordLength={setWordLength}
        />
        <GameBox
          key={gameWord}
          gameWord={gameWord}
          gameState={gameState}
          setGameState={setGameState}
        />
      </div>
    </>
  );
}

export default App;
