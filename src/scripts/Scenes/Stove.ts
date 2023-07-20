import Phaser from 'phaser';

export default class Stove extends Phaser.Scene {
  //alllll the variables
  stoveArr: any;
  constructor() {
    super({
      key: 'Stove',
    });
    this.stoveArr;
  }
  preload() {
    this.load.image('burner', new URL('../../assets/burner.png', import.meta.url).href);
  }
  create() {
    console.log("i'm running!");
    //represents the four burners
    this.stoveArr = ['', '', '', ''];
    this.stoveArr[0] = {
      burner: this.add.image(125, (this.game.config.height as number) - 125, 'burner'),
      contains: '',
      isOn: false,
    };
    this.stoveArr[1] = {
      burner: this.add.image(125, (this.game.config.height as number) - 225, 'burner'),
      contains: '',
      isOn: false,
    };
    this.stoveArr[2] = {
      burner: this.add.image(275, (this.game.config.height as number) - 125, 'burner'),
      contains: '',
      isOn: false,
    };
    this.stoveArr[3] = {
      burner: this.add.image(275, (this.game.config.height as number) - 225, 'burner'),
      contains: '',
      isOn: false,
    };
  }
  update() {}
}
