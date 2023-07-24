import Phaser from 'phaser';
import ArrozConLeche from './ArrozConLeche';

export default class Stove extends Phaser.Scene {
  //alllll the variables
  stoveArr: any;
  stoveGroup: any;
  constructor() {
    super({
      key: 'Stove',
    });
    this.stoveArr;
    this.stoveGroup;
  }
  preload() {
    this.load.image('burner', new URL('../../assets/burner.png', import.meta.url).href);
    this.load.image('burnerOn', new URL('../../assets/burnerOn.png', import.meta.url).href);
    console.log('preload end');
  }
  create() {
    console.log('stove should be running!');
    //represents the four burners
    this.stoveArr = ['', '', '', ''];
    for (let i = 0; i < 4; i++) {
      switch (i) {
        case 0:
          this.stoveArr[i] = {
            burner: this.add.sprite(140, 625, 'burner'),
            contains: '',
            isOn: false,
          };
          this.stoveArr[i].burner.setInteractive();
          this.stoveArr[i].burner.on('pointerup', () => {
            this.toggleBurner(i);
          });
          break;
        case 1:
          this.stoveArr[i] = {
            burner: this.add.sprite(140, 525, 'burner'),
            contains: '',
            isOn: false,
          };
          this.stoveArr[i].burner.setInteractive();
          this.stoveArr[i].burner.on('pointerup', () => {
            this.toggleBurner(i);
          });
          break;
        case 2:
          this.stoveArr[i] = {
            burner: this.add.sprite(260, 525, 'burner'),
            contains: '',
            isOn: false,
          };
          this.stoveArr[i].burner.setInteractive();
          this.stoveArr[i].burner.on('pointerup', () => {
            this.toggleBurner(i);
          });
          break;
        case 3:
          this.stoveArr[i] = {
            burner: this.add.sprite(260, 625, 'burner'),
            contains: '',
            isOn: false,
          };
          this.stoveArr[i].burner.setInteractive();
          this.stoveArr[i].burner.on('pointerup', () => {
            this.toggleBurner(i);
          });
          break;
      }
    }
  }
  toggleBurner(i) {
    if (this.stoveArr[i].burner.texture.key === 'burner') {
      this.stoveArr[i].burner.setTexture('burnerOn');
      this.stoveArr[i].isOn = true;
    } else {
      this.stoveArr[i].burner.setTexture('burner');
      this.stoveArr[i].isOn = false;
    }
  }
  update() {
    // console.log('update');
  }
  //add more functionality :eye:
}
