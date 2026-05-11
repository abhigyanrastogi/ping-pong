import { PLAYER_SPEED } from "../constants/playerconstants";
import { Player } from "../data/Player";

export function movePlayer(player: Player, direction: "up" | "down") {
    const newY = direction === "up" ? player.getY() - PLAYER_SPEED : player.getY() + PLAYER_SPEED;
    return new Player(player.getX(), newY);
}