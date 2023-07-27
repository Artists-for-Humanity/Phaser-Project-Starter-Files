/* eslint-disable prettier/prettier */
import Phaser from 'phaser';
import WebFont from 'webfontloader';
import { colors } from '../constants';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    this.load.image('home', new URL('../../assets/home.png', import.meta.url).href);
    this.load.image('Play', new URL('../../assets/buttons/Play.png', import.meta.url).href);
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

    var Play = this.add.image(485, 550, 'Play');
   Play.setInteractive()

    
   Play.on('pointerup', () => {this.scene.start('GameScene');})

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('GameScene');
    });
  }
}
