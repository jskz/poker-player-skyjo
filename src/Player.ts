import Game from "./Game";
import { GameState } from "./interfaces/GameState";
import Postflop from "./Postflop";
import Preflop from "./Preflop";

export const VERSION = "CAREFUL! TWICE NO QUARTER!";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const game = new Game(gameState);

    if (game.isPreflop()) {
      const preflop = new Preflop(gameState);

      let result = preflop.bet();
      betCallback(result);
      return;
    }

    let result = 0;

    if (game.isPostflop()) {
      const postflop = new Postflop(gameState);
      result = postflop.bet();
    }

    if (result > 0 && game.haveWeBetMoreThanQuarterOurMoney()) {
      // result = current_buy_in - players[in_action][bet]
      result = gameState.current_buy_in - gameState.players[gameState.in_action].bet;
      betCallback(result);
      return;
    }

    betCallback(result);
  }

  public showdown(gameState: any): void {
  }
};

export default Player;
