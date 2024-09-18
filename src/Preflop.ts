import { GameState } from "./interfaces/GameState";
import Pocket from "./Pocket";

class Preflop {
    pocket: Pocket;
    state: GameState;

    constructor(state: GameState) {
      if (state.community_cards.length > 0) {
        throw new Error('Invalid state: Community cards already dealt');
      }

      this.pocket = new Pocket(state);
      this.state = state;
    }

    bet(): number {
      if (this.pocket.isPair()) {
        return this.state.minimum_raise * 3;
      }

      if (this.pocket.hasAceOrKing()) {
        return this.state.minimum_raise;
      }

      return 0;
    }
}

export default Preflop;