export interface Card {
  rank: string;
  suit: string;
}

export const getCardRank = (card: Card): number => {
  switch (card.rank) {
    case 'A':
      return 14;
    case 'K':
      return 13;
    case 'Q':
      return 12;
    case 'J':
      return 11;
    default:
      return parseInt(card.rank);
  }
}

export const getCardValue = (card: Card): number => {
  switch (card.rank) {
    case 'A':
      return 10;
    case 'K':
      return 8;
    case 'Q':
      return 7;
    case 'J':
      return 6;
    default:
      return parseInt(card.rank) / 2;
  }
};

export const createCard = (rank: string, suit: string): Card => ({ rank, suit });
