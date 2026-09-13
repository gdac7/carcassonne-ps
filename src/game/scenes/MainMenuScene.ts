import Phaser from 'phaser';

const MENU_ITEMS = ['Jogar', 'Configurações', 'Histórico', 'Sair'] as const;

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  preload() {
    this.load.image('background', 'assets/images/background.jpg');
    this.load.audio('menu-theme', 'assets/audio/menu-theme.mp3');
  }

  create() {
    const { width, height } = this.scale;

    this.cameras.main.setBackgroundColor('#241a12');

    const background = this.add.image(width / 2, height / 2, 'background');
    const scale = (height * 0.94) / background.height;
    background.setScale(scale);

    this.add
      .rectangle(width / 2, height / 2, background.displayWidth + 8, background.displayHeight + 8)
      .setStrokeStyle(4, 0xf4e4bc, 0.6);

    this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.35);

    if (!this.sound.get('menu-theme')) {
      const music = this.sound.add('menu-theme', { loop: true, volume: 0.4 });
      music.play();
    }

    this.add
      .text(width / 2, height * 0.22, 'CARCASSONNE', {
        fontFamily: 'Georgia, serif',
        fontSize: '64px',
        color: '#f4e4bc',
        stroke: '#3b2a1a',
        strokeThickness: 6,
      })
      .setOrigin(0.5);

    const startY = height * 0.45;
    const spacing = 70;

    MENU_ITEMS.forEach((label, index) => {
      const itemText = this.add
        .text(width / 2, startY + index * spacing, label, {
          fontFamily: 'Georgia, serif',
          fontSize: '36px',
          color: '#f4e4bc',
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

      itemText.on('pointerover', () => itemText.setColor('#ffd166'));
      itemText.on('pointerout', () => itemText.setColor('#f4e4bc'));
      itemText.on('pointerdown', () => this.handleMenuSelect(label));
    });
  }

  private handleMenuSelect(label: (typeof MENU_ITEMS)[number]) {
    switch (label) {
      case 'Jogar':
        this.scene.start('PlayerSelectScene');
        break;
      case 'Configurações':
      case 'Histórico':
        // eslint-disable-next-line no-console
        console.log(`"${label}" ainda não implementado neste esboço.`);
        break;
      case 'Sair':
        // eslint-disable-next-line no-console
        console.log('Sair (stub) — em uma versão web não há o que fechar.');
        break;
    }
  }
}
