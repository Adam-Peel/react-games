import Key from "./Keys";
import ResetButton from "./ResetButton";

function Keyboard() {
  return (
    <div className="keyboard">
      <section>
        <Key letter={"Q"} />
        <Key letter={"W"} />
        <Key letter={"E"} />
        <Key letter={"R"} />
        <Key letter={"T"} />
        <Key letter={"Y"} />
        <Key letter={"U"} />
        <Key letter={"I"} />
        <Key letter={"O"} />
        <Key letter={"P"} />
        <br />
        <Key letter={"A"} />
        <Key letter={"S"} />
        <Key letter={"D"} />
        <Key letter={"F"} />
        <Key letter={"G"} />
        <Key letter={"H"} />
        <Key letter={"J"} />
        <Key letter={"K"} />
        <Key letter={"L"} />
        <br />
        <Key letter={"Z"} />
        <Key letter={"X"} />
        <Key letter={"C"} />
        <Key letter={"V"} />
        <Key letter={"B"} />
        <Key letter={"N"} />
        <Key letter={"M"} />
      </section>
      <section>
        <ResetButton />
      </section>
    </div>
  );
}

export default Keyboard;
