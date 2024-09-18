import Pocket from '../Pocket';

describe('Pocket', () => {
  it('should detect if two cards are a pair', () => {
    const firstCard = { rank: 'A', suit: 'hearts' };
    const secondCard = { rank: 'A', suit: 'spades' };

    const pocket = new Pocket(firstCard, secondCard);

    const result = pocket.isPair();

    expect(result).toBe(true);
  });

  it('should return false if two cards are not a pair', () => {
    const firstCard = { rank: 'A', suit: 'hearts' };
    const secondCard = { rank: 'K', suit: 'spades' };

    const pocket = new Pocket(firstCard, secondCard);

    const result = pocket.isPair();

    expect(result).toBe(false);
  });
});