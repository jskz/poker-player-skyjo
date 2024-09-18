import { GameState } from "./interfaces/GameState";
import Pocket from "./Pocket";
import Preflop from "./Preflop";

export const VERSION = "smarter preflop";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const minimumRaise = gameState.minimum_raise;

    const pocket = new Pocket(gameState);

    if (!gameState.community_cards.length) {
      const preflop = new Preflop(gameState);
      betCallback(preflop.bet());
      return;
    }

    if (gameState.community_cards.length === 3) {
      if (pocket.isPair()) {
        betCallback(minimumRaise * 2);
        return;
      } else {
        betCallback(0);
        return;
      }
    }

    betCallback(minimumRaise);
  }

  public showdown(gameState: any): void {
  }
};

export default Player;
