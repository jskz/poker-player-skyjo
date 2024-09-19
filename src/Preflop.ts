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

    betLargerThanQuarterOfMoney(): boolean {
      return this.state.minimum_raise > this.state.players[this.state.in_action].stack / 4;
    }

    bet(): number {
      if (this.pocket.isGoodPair()) {
        return 10000;
      }

      if (this.pocket.isPair()) {
        return this.state.minimum_raise * 3;
      }

      if (this.pocket.hasAceOrKing()) {
        if (this.betLargerThanQuarterOfMoney()) {
          return 0;
        }

        return this.state.current_buy_in - this.state.players[this.state.in_action].bet;
      }

      return 0;
    }
}

export default Preflop;