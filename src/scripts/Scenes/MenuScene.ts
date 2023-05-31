import Phaser from 'phaser';
import WebFont from 'webfontloader';
import { colors } from '../constants';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    this.load.image(
      'home',
      new URL('../../assets/home.png', import.meta.url).href
    );
  }

  create() {
    console.log('This is Dolly Cooks')
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'home');
   

    WebFont.load({
      custom: {
        families: ['Space Mono'],
      },
     
    });

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('GameScene');
    });
  }
}
