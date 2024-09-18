import { GameState } from '../interfaces/GameState';
import Pocket from '../Pocket';

describe('Pocket', () => {
  it('should detect if two cards are a pair', () => {
    const state = {
      players: [
        {
          hole_cards: [
            { rank: 'A', suit: 'hearts' },
            { rank: 'A', suit: 'spades' },
          ],
        },
      ],
      in_action: 0,
    };
    const pocket = new Pocket(state as GameState);
    const result = pocket.isPair();

    expect(result).toBe(true);
  });

  it('should return false if two cards are not a pair', () => {
    const state = {
      players: [
        {
          hole_cards: [
            { rank: 'A', suit: 'hearts' },
            { rank: 'B', suit: 'spades' },
          ],
        },
      ],
      in_action: 0,
    };
    const pocket = new Pocket(state as GameState);
    const result = pocket.isPair();

    expect(result).toBe(false);
  });
});