import Phaser from 'phaser';

export default class LevelOne extends Phaser.Scene {


  constructor() {
    super({
      key: 'LevelOne',
    });
  }

  preload() {
    this.load.image('LevelCat', new URL('../../assets/LevelCat.png', import.meta.url).href);
  }

  create() {
    console.log('This is Level One')
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'LevelCat');
    
    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('GameScene');
    });
  }


}
