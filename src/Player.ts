import { GameState } from "./interfaces/GameState";
import Pocket from "./Pocket";
import Postflop from "./Postflop";
import Preflop from "./Preflop";

export const VERSION = "testy postflop :D";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const minimumRaise = gameState.minimum_raise;

    if (!gameState.community_cards.length) {
      const preflop = new Preflop(gameState);
      betCallback(preflop.bet());
      return;
    }

    if (gameState.community_cards.length >= 3) {
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
