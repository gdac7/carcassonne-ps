import Phaser from 'phaser';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  preload() {
    this.load.image('background', 'assets/images/background.jpg');
  }

  create() {
    this.add.image(this.scale.width / 2, this.scale.height / 2, 'background');
    this.add
      .text(this.scale.width / 2, this.scale.height / 2, 'Carrossonne - esboco', {
        fontSize: '32px',
        color: '#ffffff',
      })
      .setOrigin(0.5);
  }
}
