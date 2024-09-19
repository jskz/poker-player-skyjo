import { Card, getCardRank, getCardValue } from "./interfaces/Card";
import { GameState } from "./interfaces/GameState";

class Pocket {
  static of(firstCard: Card, secondCard: Card): Pocket {
    const state = {
      players: [
        {
          hole_cards: [firstCard, secondCard],
        },
      ],
      in_action: 0,
    };

    return new Pocket(state as GameState);
  }

  getHigherCard(): Card {
    return getCardValue(this.firstCard) > getCardValue(this.secondCard)
      ? this.firstCard
      : this.secondCard;
  }

  gapBetweenCards(): number {
    const value = getCardRank(this.firstCard) - getCardRank(this.secondCard);
    
    return value === 0 ? 0 : Math.abs(value) - 1;
  }

  chenScore(): number {
    let result = 0;
    let higherCard = this.getHigherCard();
    
    result = getCardValue(higherCard);
    if (this.isPair()) {
      result *= 2;
    }

    if (this.isSuited()) {
      result += 2;
    }

    const gap = this.gapBetweenCards();
    switch (gap) {
      case 0:
        break;
      case 1:
        result -= 1;
        break;
      case 2:
        result -= 2;
        break;
      case 3:
        result -= 4;
        break;
      default:
        result -= 5;
        break;
    }

    // Add 1 point if there is a 0 or 1 card gap and both cards are lower than a Q
    if (!this.isPair()
    && gap <= 1
    && getCardRank(this.firstCard) <= 12
    && getCardRank(this.secondCard) <= 12) {
      result += 1;
    }

    return Math.ceil(result);
  }

  isSuited() {
    return this.firstCard.suit === this.secondCard.suit;
  }

  isGoodPair() {
    return this.firstCard.rank === 'A' && this.secondCard.rank === 'A'
      || this.firstCard.rank === 'K' && this.secondCard.rank === 'K'
      || this.firstCard.rank === 'Q' && this.secondCard.rank === 'Q';
  }

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