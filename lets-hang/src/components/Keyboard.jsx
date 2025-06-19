import Key from "./Keys";
import ResetButton from "./ResetButton";

function Keyboard({ checkLetterInWord }) {
  return (
    <div className="keyboard">
      <section>
        <Key letter={"Q"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"W"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"E"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"R"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"T"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"Y"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"U"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"I"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"O"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"P"} checkLetterInWord={checkLetterInWord} />
        <br />
        <Key letter={"A"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"S"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"D"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"F"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"G"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"H"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"J"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"K"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"L"} checkLetterInWord={checkLetterInWord} />
        <br />
        <Key letter={"Z"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"X"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"C"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"V"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"B"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"N"} checkLetterInWord={checkLetterInWord} />
        <Key letter={"M"} checkLetterInWord={checkLetterInWord} />
      </section>
      <section>
        <ResetButton />
      </section>
    </div>
  );
}

export default Keyboard;
