import { Card } from "./Card";
import { Player } from "./Player";

export interface GameState {
  tournament_id:   string;
  game_id:         string;
  round:           number;
  players:         Player[];
  small_blind:     number;
  big_blind:       number;
  orbits:          number;
  dealer:          number;
  community_cards: Card[];
  current_buy_in:  number;
  pot:             number;
  in_action:       number;
  minimum_raise:   number;
  bet_index:       number;
}
