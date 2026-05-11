import { useEffect, useRef, useState } from "react";
import { Player } from "../data/Player";
import { movePlayer } from "../service/player-mechanics";
import { BACKGROUND_COLOR, CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants/gameconstants";
import { PLAYER1_START_X, PLAYER1_START_Y, PLAYER2_START_X, PLAYER2_START_Y } from "../constants/playerconstants";

export const Game = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [player1, setPlayer1] = useState(new Player(PLAYER1_START_X, PLAYER1_START_Y));
    const [player2, setPlayer2] = useState(new Player(PLAYER2_START_X, PLAYER2_START_Y));

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "w":
                    setPlayer1(player1=>movePlayer(player1, "up"));
                    break;
                case "s":
                    setPlayer1(player1=>movePlayer(player1, "down"));
                    break;
                case "ArrowUp":
                    setPlayer2(player2=>movePlayer(player2, "up"));
                    break;
                case "ArrowDown":
                    setPlayer2(player2=>movePlayer(player2, "down"));
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {

        const context = canvasRef.current?.getContext("2d");
        if (context) {
            context.fillStyle = BACKGROUND_COLOR;
            context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            player1.draw(context);
            player2.draw(context);
        }

    }, [player1, player2]);
    return (
        <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
    )
}
