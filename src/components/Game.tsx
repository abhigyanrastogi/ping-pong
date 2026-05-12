import { useEffect, useRef } from "react";
import { Player } from "../data/Player";
import { BACKGROUND_COLOR, CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants/gameconstants";
import { PLAYER1_START_X, PLAYER1_START_Y, PLAYER2_START_X, PLAYER2_START_Y } from "../constants/playerconstants";
import { Ball } from "../data/Ball";

export type GameProps = {
    gameToggle: boolean;
}

export const Game = ({ gameToggle }: GameProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let interval: ReturnType<typeof setInterval> | null = null;;
    const player1 = new Player(PLAYER1_START_X, PLAYER1_START_Y);
    const player2 = new Player(PLAYER2_START_X, PLAYER2_START_Y);
    const ball = new Ball(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "w":
                    player1.setMovingUp(true);
                    break;
                case "s":
                    player1.setMovingDown(true);
                    break;
                case "ArrowUp":
                    player2.setMovingUp(true);
                    break;
                case "ArrowDown":
                    player2.setMovingDown(true);
                    break;
                default:
                    break;
            }
        };
        const handleKeyUp = (e: KeyboardEvent) => {
            switch (e.key) {
                case "w":
                    player1.setMovingUp(false);
                    break;
                case "s":
                    player1.setMovingDown(false);
                    break;
                case "ArrowUp":
                    player2.setMovingUp(false);
                    break;
                case "ArrowDown":
                    player2.setMovingDown(false);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [gameToggle]);

    useEffect(() => {
        const context = canvasRef.current?.getContext("2d");
        interval = !gameToggle ? setInterval(() => {
            if (context) {
                context.fillStyle = BACKGROUND_COLOR;
                context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                player1.draw(context);
                player2.draw(context);
                ball.draw(context);
            }
            
            ball.update(player1, player2);
            player1.update();
            player2.update();
        }, 80) : null;
        return () => {
            if(interval) clearInterval(interval);
        };
    }, [gameToggle]);

    return (
        <>
        <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
        </>
    )
}
