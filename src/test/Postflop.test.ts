import Postflop from "../Postflop";

describe('Postflop', () => {
  it('should return minimum raise * 2 if pair', () => {
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
      community_cards: [
        { rank: '2', suit: 'hearts' },
        { rank: '3', suit: 'spades' },
        { rank: '4', suit: 'hearts' },
      ],
    };
    const postflop = new Postflop(state as any);
    const result = postflop.bet();

    expect(result).toBe(20);
  });

  it('should return 0 if no pair', () => {
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
      community_cards: [
        { rank: '2', suit: 'hearts' },
        { rank: '3', suit: 'spades' },
        { rank: '4', suit: 'hearts' },
      ],
    };
    const postflop = new Postflop(state as any);
    const result = postflop.bet();

    expect(result).toBe(0);
  });
});