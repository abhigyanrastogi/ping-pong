import { useState } from "react";
import { Game } from "./Game";

export const GameContainer = () => {
    const [gameToggle, setGameToggle] = useState(false);
    const handleStop = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setGameToggle(true);
    }

    const handleRestart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setGameToggle(p => !p);
    }
    return (
        <>
            <Game gameToggle={gameToggle}/>
            <button onClick={handleRestart}>Restart</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}
