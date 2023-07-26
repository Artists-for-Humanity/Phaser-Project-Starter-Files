import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene',
    });
  }
  preload() {
    this.load.image('LevelCat', new URL('../../assets/LevelCat.png', import.meta.url).href);
    this.load.image('Levelso', new URL('../../assets/Levelso.png', import.meta.url).href);
    this.load.image('RightA', new URL('../../assets/RightA.png', import.meta.url).href);
    this.load.image('LeftA', new URL('../../assets/LeftA.png', import.meta.url).href);
  }
  create() {
    console.log('This is Level Cat 00');
    // console.log(this.temp);
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'LevelCat');
    this.add.image(500, 425, 'Levelso');

    var Right = this.add.image(723, 430, 'RightA');
    Right.setInteractive();
    Right.on('pointerup', () => {
      this.scene.start('LevelOne');
    });

    var Left = this.add.image(277, 431, 'LeftA');
    Left.setInteractive();
    Left.on('pointerup', () => {
      this.scene.start('MenuScene');
    });
    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('MenuScene');
    });
  }
}
