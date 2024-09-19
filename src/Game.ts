import { GameState } from "./interfaces/GameState";

class Game {
  state: GameState;

  constructor(state: GameState) {
    this.state = state;
  }

  haveWeBetMoreThanQuarterOurMoney(): boolean {
    const player = this.state.players[this.state.in_action];

    return player.bet > player.stack / 4;
  }

  isPreflop(): boolean {
    return this.state.community_cards.length === 0;
  }

  isPostflop(): boolean {
    return this.state.community_cards.length >= 3;
  }
}

export default Game;