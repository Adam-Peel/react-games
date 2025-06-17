import Letter from "./Letter";

function LetterDisplay({ word }) {
  const wordArray = word.split("");

  return (
    <section id="LettersBox">
      {wordArray.map((letter) => (
        <Letter letter={letter} key={letter} />
      ))}
    </section>
  );
}

export default LetterDisplay;
