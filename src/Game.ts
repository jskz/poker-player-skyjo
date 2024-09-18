import { GameState } from "./interfaces/GameState";

class Game {
  state: GameState;

  constructor(state: GameState) {
    this.state = state;
  }

  isPreflop(): boolean {
    return this.state.community_cards.length === 0;
  }

  isPostflop(): boolean {
    return this.state.community_cards.length >= 3;
  }
}

export default Game;