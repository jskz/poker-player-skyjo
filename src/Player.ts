import { GameState } from "./interfaces/GameState";
import Pocket from "./Pocket";

export const VERSION = "smarter early play";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const minimumRaise = gameState.minimum_raise;
    console.log(JSON.stringify(gameState));
    console.log('community cards: ', gameState.community_cards);

    const pocket = new Pocket(gameState);
    if (!gameState.community_cards.length && pocket.isPair()) {
      betCallback(minimumRaise * 3);
      return;
    }

    if (gameState.community_cards.length === 3) {
      // if we have a pair (use Pocket class), then we raise
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
