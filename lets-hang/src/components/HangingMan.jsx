import Box from "./Box";

function HangingMan({ badGuessCount }) {
    const blockArray = [];
    for (let i = 0; i < badGuessCount; i++) {
        blockArray.push(<Box />);
    }

    return <div>{blockArray}</div>;
}

export default HangingMan;
