import Preflop from "../Preflop";

describe('Preflop', () => {
  it('should return 0 if no pair or ace/king', () => {
    const state = {
      players: [
        {
          stack: 300,
          bet: 10,
          hole_cards: [
            { rank: '2', suit: 'hearts' },
            { rank: '3', suit: 'spades' },
          ],
        },
      ],
      in_action: 0,
      minimum_raise: 10,
      current_buy_in: 30,
      small_blind: 15,
      big_blind: 30,
      community_cards: [],
    };
    const preflop = new Preflop(state as any);
    const result = preflop.bet();

    expect(result).toBe(0);
  });

  it('should return minimum raise if ace or king and we have a lot of money', () => {
    const state = {
      players: [
        {
          stack: 15,
          bet: 10,
          hole_cards: [
            { rank: 'A', suit: 'hearts' },
            { rank: '3', suit: 'spades' },
          ],
        },
      ],
      in_action: 0,
      minimum_raise: 10,
      current_buy_in: 30,
      small_blind: 15,
      big_blind: 30,
      community_cards: [],
    };
    const preflop = new Preflop(state as any);
    const result = preflop.bet();

    expect(result).toBe(0);
  });

  it('should return minimum raise * 3 if pair', () => {
    const state = {
      players: [
        {
          stack: 300,
          bet: 10,
          hole_cards: [
            { rank: '7', suit: 'hearts' },
            { rank: '7', suit: 'spades' },
          ],
        },
      ],
      in_action: 0,
      minimum_raise: 10,
      current_buy_in: 30,
      small_blind: 15,
      big_blind: 30,
      community_cards: [],
    };
    const preflop = new Preflop(state as any);
    const result = preflop.bet();

    expect(result).toBe(30);
  });
});