import { GameState } from "./interfaces/GameState";

export const VERSION = "even more logging";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const minimumRaise = gameState.minimum_raise;
    console.log(JSON.stringify(gameState));
    console.log('community cards: ', gameState.community_cards);

    betCallback(minimumRaise);
  }

  public showdown(gameState: any): void {
  }
};

export default Player;
