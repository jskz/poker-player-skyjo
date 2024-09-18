import { GameState } from "./interfaces/GameState";

export const VERSION = "game state typing";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const minimumRaise = gameState.minimum_raise;
    console.log(JSON.stringify(gameState));
    console.log(`Minimum raise: ${minimumRaise}`);
    betCallback(minimumRaise);
  }

  public showdown(gameState: any): void {
  }
};

export default Player;
