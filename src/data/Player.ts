import { CANVAS_HEIGHT } from "../constants/gameconstants";
import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_SPEED, PLAYER_WIDTH } from "../constants/playerconstants";

export class Player {
    static width = PLAYER_WIDTH;
    static height = PLAYER_HEIGHT;
    private x: number;
    private y: number;
    private movingUp: boolean;
    private movingDown: boolean;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
        this.movingUp = false;
        this.movingDown = false;
    }
    getX() {
        return this.x;
    }
    setX(x: number) {
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y: number) {
        this.y = y;
    }
    getMovingUp() {
        return this.movingUp;
    }
    setMovingUp(movingUp: boolean) {
        this.movingUp = movingUp;
    }
    getMovingDown() {
        return this.movingDown;
    }
    setMovingDown(movingDown: boolean) {
        this.movingDown = movingDown;
    }

    update() {
        if (this.movingUp) {
            this.y = Math.max(0, this.y - PLAYER_SPEED);
        }
        if (this.movingDown) {
            this.y = Math.min(CANVAS_HEIGHT - Player.height, this.y + PLAYER_SPEED);
        }
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = PLAYER_COLOR;
        context.fillRect(this.x, this.y, Player.width, Player.height);
    }
}