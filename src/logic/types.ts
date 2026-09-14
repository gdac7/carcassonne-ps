export type PlayerType = 'human' | 'cpu';

export interface PlayerSlot {
  id: number;
  name: string;
  type: PlayerType;
}

export const TOTAL_PLAYER_SLOTS = 5;
