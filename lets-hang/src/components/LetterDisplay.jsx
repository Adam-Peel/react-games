import Letter from "./Letter";

function LetterDisplay({ word, letterCheck }) {
  const wordArray = word.split("");
  return (
    <section id="LettersBox">
      {wordArray.map((letter, index) => (
        <Letter
          letter={letter}
          key={index}
          className={letterCheck[index] ? "letter visible" : "letter hidden"}
        />
      ))}
    </section>
  );
}

export default LetterDisplay;
