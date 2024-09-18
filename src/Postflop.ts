import { GameState } from "./interfaces/GameState";
import Pocket from "./Pocket";

class Postflop {
    pocket: Pocket;
    state: GameState;

    constructor(state: GameState) {
      this.pocket = new Pocket(state);
      this.state = state;
    }

    bet(): number {
      if (this.pocket.isPair()) {
        return this.state.minimum_raise * 2;
      } else {
        return 0;
      }
    }
}

export default Postflop;