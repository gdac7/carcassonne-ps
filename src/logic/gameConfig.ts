import type { PlayerSlot } from './types';
import { TOTAL_PLAYER_SLOTS } from './types';

export function createDefaultPlayerSlots(): PlayerSlot[] {
  return Array.from({ length: TOTAL_PLAYER_SLOTS }, (_, index) => ({
    id: index,
    name: `Jogador ${index + 1}`,
    type: index === 0 ? 'human' : 'cpu',
  }));
}
