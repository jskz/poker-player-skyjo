import { createCard } from "../interfaces/Card";
import Pocket from "../Pocket";

describe('ChenFormula', () => {
  it('should return 20 for AA', () => {
    const pocket = Pocket.of(
      createCard('A', 'hearts'),
      createCard('A', 'diamonds'),
    );
    
    const result = pocket.chenScore();

    expect(result).toEqual(20);
  });

  it('should return 16 for KK', () => {
    const pocket = Pocket.of(
      createCard('K', 'hearts'),
      createCard('K', 'spades'),
    );
    
    const result = pocket.chenScore();

    expect(result).toEqual(16);
  });

  it('should return 8 for two 8s', () => {
    const pocket = Pocket.of(
      createCard('8', 'hearts'),
      createCard('8', 'spades'),
    );
    
    const result = pocket.chenScore();

    expect(result).toEqual(8);
  });

  it('should return 7 for two 7s', () => {
    const pocket = Pocket.of(
      createCard('7', 'hearts'),
      createCard('7', 'spades'),
    );
    
    const result = pocket.chenScore();

    expect(result).toEqual(7);
  });

  it('should return 10 for an unsuited ace and king', () => {
    const pocket = Pocket.of(
      createCard('A', 'hearts'),
      createCard('K', 'spades'),
    );
    
    const result = pocket.chenScore();

    expect(result).toEqual(10);
  });

  it('should return 10 for an suited ace and king', () => {
    const pocket = Pocket.of(
      createCard('A', 'hearts'),
      createCard('K', 'hearts'),
    );
    
    const result = pocket.chenScore();

    expect(result).toEqual(12);
  });

  it('should return 3 for an unsuited queen and 8', () => {
    const pocket = Pocket.of(
      createCard('Q', 'hearts'),
      createCard('8', 'spades'),
    );
    
    const result = pocket.chenScore();

    expect(result).toEqual(3);
  });
});