import Phaser from 'phaser';
import { MainMenuScene } from './scenes/MainMenuScene';
import { PlayerSelectScene } from './scenes/PlayerSelectScene';

export const GAME_WIDTH = 1280;
export const GAME_HEIGHT = 720;

export function createGameConfig(parent: HTMLElement): Phaser.Types.Core.GameConfig {
  return {
    type: Phaser.AUTO,
    parent,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    backgroundColor: '#0d0b08',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [MainMenuScene, PlayerSelectScene],
  };
}
