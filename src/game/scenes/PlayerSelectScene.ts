import Phaser from 'phaser';
import type { PlayerSlot, PlayerType } from '../../logic/types';
import { createDefaultPlayerSlots } from '../../logic/gameConfig';

const TYPE_LABEL: Record<PlayerType, string> = {
  human: 'Jogador',
  cpu: 'Computador',
};

function nextType(type: PlayerType): PlayerType {
  return type === 'human' ? 'cpu' : 'human';
}

export class PlayerSelectScene extends Phaser.Scene {
  private slots: PlayerSlot[] = [];

  constructor() {
    super('PlayerSelectScene');
  }

  create() {
    this.slots = createDefaultPlayerSlots();
    const { width, height } = this.scale;

    this.cameras.main.setBackgroundColor('#0d0b08');

    this.add
      .text(width / 2, height * 0.12, 'Selecione os jogadores', {
        fontFamily: 'Georgia, serif',
        fontSize: '44px',
        color: '#f4e4bc',
      })
      .setOrigin(0.5);

    const startY = height * 0.28;
    const rowHeight = 80;

    this.slots.forEach((slot, index) => {
      this.createPlayerRow(slot, width / 2, startY + index * rowHeight);
    });

    this.add
      .text(width / 2, height * 0.88, 'Voltar', {
        fontFamily: 'Georgia, serif',
        fontSize: '32px',
        color: '#f4e4bc',
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on('pointerover', function (this: Phaser.GameObjects.Text) {
        this.setColor('#ffd166');
      })
      .on('pointerout', function (this: Phaser.GameObjects.Text) {
        this.setColor('#f4e4bc');
      })
      .on('pointerdown', () => this.scene.start('MainMenuScene'));
  }

  private createPlayerRow(slot: PlayerSlot, centerX: number, y: number) {
    this.add
      .text(centerX - 260, y, slot.name, {
        fontFamily: 'Georgia, serif',
        fontSize: '30px',
        color: '#f4e4bc',
      })
      .setOrigin(0, 0.5);

    const typeBoxOffset = 90;
    const arrowGap = 150;

    const typeText = this.add
      .text(centerX + typeBoxOffset, y, TYPE_LABEL[slot.type], {
        fontFamily: 'Georgia, serif',
        fontSize: '28px',
        color: '#ffd166',
      })
      .setOrigin(0.5);

    const makeArrow = (label: string, offsetX: number) =>
      this.add
        .text(centerX + offsetX, y, label, {
          fontFamily: 'Georgia, serif',
          fontSize: '34px',
          color: '#f4e4bc',
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', function (this: Phaser.GameObjects.Text) {
          this.setColor('#ffd166');
        })
        .on('pointerout', function (this: Phaser.GameObjects.Text) {
          this.setColor('#f4e4bc');
        });

    const leftArrow = makeArrow('◀', typeBoxOffset - arrowGap);
    const rightArrow = makeArrow('▶', typeBoxOffset + arrowGap);

    const toggle = () => {
      slot.type = nextType(slot.type);
      typeText.setText(TYPE_LABEL[slot.type]);
    };

    leftArrow.on('pointerdown', toggle);
    rightArrow.on('pointerdown', toggle);
  }
}
