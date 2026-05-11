import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH } from "../constants/playerconstants";

export class Player {
    static width = PLAYER_WIDTH;
    static height = PLAYER_HEIGHT;
    private x: number;
    private y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
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

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = PLAYER_COLOR;
        context.fillRect(this.x, this.y, Player.width, Player.height);
    }
}