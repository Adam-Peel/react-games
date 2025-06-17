function Key({ letter }) {
  return (
    <button id={letter} className={"unselected"}>
      {letter}
    </button>
  );
}

export default Key;
