import Phaser from 'phaser';

export default class LevelTwo extends Phaser.Scene {


  constructor() {
    super({
      key: 'LevelTwo',
    });
    
  }

  preload() {
    this.load.image('LevelCato', new URL('../../assets/LevelCat.png', import.meta.url).href);
    this.load.image('Level2o', new URL('../../assets/Level2o.png', import.meta.url).href);
    this.load.image('RightA', new URL('../../assets/RightA.png', import.meta.url).href);
    this.load.image('LeftA', new URL('../../assets/LeftA.png', import.meta.url).href);
  }

  create() {
    console.log('This is Level Cat 00');
    // console.log(this.temp);
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'LevelCat');
    this.add.image(500, 425, 'Level2o');


  //   var Right = this.add.image(723, 430, 'RightA')
  //   Right.setInteractive()

    
  //  Right.on('pointerup', () => {this.scene.start('LevelThree');})

   var Left = this.add.image(277, 431, 'LeftA')
    Left.setInteractive()

  Left.on('pointerup', () => {this.scene.start('LevelOne');})



    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('MenuScene');
    });
  }


}
