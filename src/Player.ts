import Game from "./Game";
import { GameState } from "./interfaces/GameState";
import Postflop from "./Postflop";
import Preflop from "./Preflop";

export const VERSION = "GOOD-ER!";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const game = new Game(gameState);
    const minimumRaise = gameState.minimum_raise;

    if (game.isPreflop()) {
      const preflop = new Preflop(gameState);
      betCallback(preflop.bet());
      return;
    }

    if (game.isPostflop()) {
      const postflop = new Postflop(gameState);
      betCallback(postflop.bet());
      return;
    }

    betCallback(minimumRaise);
  }

  public showdown(gameState: any): void {
  }
};

export default Player;
