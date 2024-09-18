import { Card } from "./interfaces/Card";
import { GameState } from "./interfaces/GameState";

class Pocket {
  public firstCard: Card;
  public secondCard: Card;

  hasAceOrKing(): boolean {
    return this.firstCard.rank === 'A'
      || this.firstCard.rank === 'K'
      || this.secondCard.rank === 'A'
      || this.secondCard.rank === 'K';
  }

  constructor(state: GameState) {
    const player = state.players?.[state.in_action];
    const holeCards = player?.hole_cards;

    if (!holeCards || holeCards.length < 2) {
      throw new Error('Invalid state: Not enough hole cards');
    }

    this.firstCard = holeCards[0];
    this.secondCard = holeCards[1];
  }

  isPair(): boolean {
    return this.firstCard.rank === this.secondCard.rank;
  }
}

export default Pocket;