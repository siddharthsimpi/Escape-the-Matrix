
import { gameMap } from "./maps";

const tileSize = 80;

export function drawGame(ctx) {
  for (let row = 0; row < gameMap.length; row++) {
    for (let col = 0; col < gameMap[row].length; col++) {
      const tile = gameMap[row][col];

      // Floor
      if (tile === 0) {
        ctx.fillStyle = "lightgray";
      }

      // Water
      if (tile === 1) {
        ctx.fillStyle = "blue";
      }

      // Mountain
      if (tile === 2) {
        ctx.fillStyle = "brown";
      }

      // Exit
      if (tile === 3) {
        ctx.fillStyle = "green";
      }

      // Coin
      if (tile === 4) {
        ctx.fillStyle = "yellow";
      }

      ctx.fillRect(
        col * tileSize,
        row * tileSize,
        tileSize,
        tileSize
      );

      ctx.strokeStyle = "black";

      ctx.strokeRect(
        col * tileSize,
        row * tileSize,
        tileSize,
        tileSize
      );
    }
  }
}
