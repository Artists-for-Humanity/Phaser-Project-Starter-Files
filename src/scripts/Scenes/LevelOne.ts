import Phaser from 'phaser';

export default class LevelOne extends Phaser.Scene {
  constructor() {
    super({
      key: 'LevelOne',
    });
  }

  preload() {
    this.load.image('LevelCatu', new URL('../../assets/LevelCatu.png', import.meta.url).href);
    this.load.image('Level1o', new URL('../../assets/Level1o.png', import.meta.url).href);
    this.load.image('RightA', new URL('../../assets/RightA.png', import.meta.url).href);
    this.load.image('LeftA', new URL('../../assets/LeftA.png', import.meta.url).href);
  }

  create() {
    console.log('This is Level One');
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'LevelCatu');
    this.add.image(500, 425, 'Level1o');

    var Right = this.add.image(723, 430, 'RightA');
    Right.setInteractive();

    Right.on('pointerup', () => {
      this.scene.start('LevelTwo');
    });

    var Left = this.add.image(277, 431, 'LeftA');
    Left.setInteractive();

    Left.on('pointerup', () => {
      this.scene.start('GameScene');
    });

    var Start = this.add.text(473, 580, 'START');
    Start.setInteractive();

    Start.on('pointerup', () => {
      this.scene.start('ArrozConLeche');
    });

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('MenuScene');
    });

    this.input.keyboard.on('keydown-ENTER', () => {
      this.scene.start('ArrozConLeche');
    });
  }
}
