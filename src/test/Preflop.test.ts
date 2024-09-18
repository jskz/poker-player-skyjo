import Preflop from "../Preflop";

describe('Preflop', () => {
  it('should return 0 if no pair or ace/king', () => {
    const state = {
      players: [
        {
          hole_cards: [
            { rank: '2', suit: 'hearts' },
            { rank: '3', suit: 'spades' },
          ],
        },
      ],
      in_action: 0,
      minimum_raise: 10,
      community_cards: [],
    };
    const preflop = new Preflop(state as any);
    const result = preflop.bet();

    expect(result).toBe(0);
  });

  it('should return minimum raise if ace or king', () => {
    const state = {
      players: [
        {
          hole_cards: [
            { rank: 'A', suit: 'hearts' },
            { rank: '3', suit: 'spades' },
          ],
        },
      ],
      in_action: 0,
      minimum_raise: 10,
      community_cards: [],
    };
    const preflop = new Preflop(state as any);
    const result = preflop.bet();

    expect(result).toBe(10);
  });

  it('should return minimum raise * 3 if pair', () => {
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
      minimum_raise: 10,
      community_cards: [],
    };
    const preflop = new Preflop(state as any);
    const result = preflop.bet();

    expect(result).toBe(30);
  });
});