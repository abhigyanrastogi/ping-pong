import {
  BALL_COLOR,
  BALL_RADIUS,
  BALL_SPEED,
} from "../constants/gameconstants";
import {
  PLAYER1_START_X,
  PLAYER2_START_X,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
} from "../constants/playerconstants";
import type { Player } from "./Player";

export class Ball {
  private x: number;
  private y: number;
  private vx: number;
  private vy: number;
  private angle: number;
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.vx = BALL_SPEED * Math.cos(this.angle);
    this.vy = BALL_SPEED * Math.sin(this.angle);
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
  getAngle() {
    return this.angle;
  }
  setAngle(angle: number) {
    this.angle = angle;
    this.vx = BALL_SPEED * Math.cos(this.angle);
    this.vy = BALL_SPEED * Math.sin(this.angle);
  }
  getVx() {
    return this.vx;
  }
  getVy() {
    return this.vy;
  }

  update(player1: Player, player2: Player) {
    if (this.y - BALL_RADIUS <= 0 || this.y + BALL_RADIUS >= 600) {
      this.setAngle(-this.angle);
      this.y = Math.max(BALL_RADIUS, Math.min(600 - BALL_RADIUS, this.y));
    } else if (
      this.x - BALL_RADIUS <= PLAYER1_START_X + PLAYER_WIDTH &&
      this.y >= player1.getY() &&
      this.y <= player1.getY() + PLAYER_HEIGHT
    ) {
      this.setAngle(Math.PI - this.angle + (player1.getMovingDown()?15*Math.PI/180:0) + (player1.getMovingUp()?-15*Math.PI/180:0));
      this.x = Math.max(BALL_RADIUS, Math.min(800 - BALL_RADIUS, this.x));
    } else if (
      this.x + BALL_RADIUS >= PLAYER2_START_X &&
      this.y >= player2.getY() &&
      this.y <= player2.getY() + PLAYER_HEIGHT
    ) {
      this.setAngle(Math.PI - this.angle + (player2.getMovingDown()?15*Math.PI/180:0) + (player2.getMovingUp()?-15*Math.PI/180:0));
      this.x = Math.max(BALL_RADIUS, Math.min(800 - BALL_RADIUS, this.x));
    }
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = BALL_COLOR;
    context.beginPath();
    context.arc(this.x, this.y, BALL_RADIUS, 0, Math.PI * 2);
    context.fill();
  }
}
