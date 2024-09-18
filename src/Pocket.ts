import { Card } from "./interfaces/Card";

class Pocket {
  public firstCard: Card;
  public secondCard: Card;

  constructor(firstCard: Card, secondCard: Card) {
    this.firstCard = firstCard;
    this.secondCard = secondCard;
  }

  isPair(): boolean {
    return this.firstCard.rank === this.secondCard.rank;
  }
}

export default Pocket;