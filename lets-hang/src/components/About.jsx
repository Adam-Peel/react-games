import { Link } from "react-router";

function About() {
  return (
    <main>
      <section>
        {/* TODO - Route to home page */}
        <Link to="/">
          <button>Go back to game</button>
        </Link>
      </section>
      <section>
        <div>
          <h2>How to play</h2>
        </div>
        <div>
          <p>
            The overall object of the game is to guess a random word, either
            through guessing the letters in the word, or by guessing the whole
            word.
          </p>
          <p>
            The game is set up from the start, but you can choose to change your
            difficulty section using the dropdown near the top of the page. This
            does not change what word might be used in the game, but it sets the
            number of incorrect guesses that you are allowed to guess that word
            within.
          </p>
          <ul>
            <li>Easy: Gives 9 guesses</li>
            <li>Medium: Gives 7 guesses</li>
            <li>Hard: Gives 5 guesses</li>
          </ul>
        </div>
        <div>
          <h3>Game play</h3>
          <p>
            Within any one game, a player can either choose individual letters
            within a word, or try and guess the whole word itself.
          </p>
          <p>
            To guess a letter, simply click on the keyboard. If a word carries
            the chosen letter, it is then displayed in the position(s) where it
            stands in the word. However, if the chosen letter isn't part of the
            given word, you reduce your guesses remaining count by one.
          </p>
          <p>
            To guess the whole word, simply type in your guess in the search
            bar. If you guess the word correctly, the game ends and you win!
            However, if you guess incorrectly, you reduce your guesses remaining
            count by one.
          </p>
          <p>
            If at any stage a player wants a helping hand, then the button below
            the keyboard provides a given definition for each word.
          </p>
        </div>
        {/* <div>
          <h2>Scoring</h2>
          The scoring for this game is determined by how many
        </div> */}
      </section>
    </main>
  );
}

export default About;
