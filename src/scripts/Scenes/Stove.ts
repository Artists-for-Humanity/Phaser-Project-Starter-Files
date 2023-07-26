import Phaser from 'phaser';
// console.log(acl.getYaMam());
export default class Stove extends Phaser.Scene {
  //alllll the variables
  public stoveArr: any;
  public stoveGroup: any;
  public knobArr: any;
  constructor() {
    super({
      key: 'Stove',
    });
    this.stoveArr;
    this.stoveGroup;
    this.knobArr;
    // this.pot;
  }
  preload() {
    console.log('preload S start');
    this.load.image('burner', new URL('../../assets/burner.png', import.meta.url).href);
    this.load.image('burnerOn', new URL('../../assets/burnerOn.png', import.meta.url).href);
    this.load.image('knob', new URL('../../assets/knob.png', import.meta.url).href);
    this.load.image('knobOn', new URL('../../assets/knobOn.png', import.meta.url).href);
    // this.load.json('pot', '/ArrozConLeche.ts')
    console.log('preload S end');
  }
  create() {
    console.log('create S start');
    this.knobArr = ['', '', '', ''];
    for (let i = 0; i < 4; i++) {
      //make knobs bigger later
      this.knobArr[i] = this.add.image(90, 685, 'knob');
      this.knobArr[i].setInteractive();
      this.knobArr[i].on('pointerup', () => {
        this.toggleBurner(i);
      });
      switch (i) {
        case 1:
          this.knobArr[i].x = 165;
          break;
        case 2:
          this.knobArr[i].x = 240;
          break;
        case 3:
          this.knobArr[i].x = 315;
          break;
      }
    }
    //represents the four burners
    this.stoveArr = ['', '', '', ''];
    for (let i = 0; i < 4; i++) {
      switch (i) {
        case 0:
          this.stoveArr[i] = {
            burner: this.add.image(140, 625, 'burner'),
            contains: '',
            isOn: false,
          };
          // this.stoveArr[i].burner.setInteractive();
          // this.stoveArr[i].burner.on('pointerup', () => {
          //   this.toggleBurner(i);
          // });
          break;
        case 1:
          this.stoveArr[i] = {
            burner: this.add.image(140, 525, 'burner'),
            contains: '',
            isOn: false,
          };
          // this.stoveArr[i].burner.setInteractive();
          // this.stoveArr[i].burner.on('pointerup', () => {
          //   this.toggleBurner(i);
          // });
          break;
        case 2:
          this.stoveArr[i] = {
            burner: this.add.image(260, 525, 'burner'),
            contains: '',
            isOn: false,
          };
          // this.stoveArr[i].burner.setInteractive();
          // this.stoveArr[i].burner.on('pointerup', () => {
          //   this.toggleBurner(i);
          // });
          break;
        case 3:
          this.stoveArr[i] = {
            burner: this.add.image(260, 625, 'burner'),
            contains: '',
            isOn: false,
          };
          // this.stoveArr[i].burner.setInteractive();
          // this.stoveArr[i].burner.on('pointerup', () => {
          //   this.toggleBurner(i);
          // });
          break;
      }
    }
    console.log('create S end');
    //end of burner and knobs
  }
  // public getStoveArr(): any {
  //   return this.stoveArr;
  // }
  toggleBurner(i) {
    if (this.stoveArr[i].burner.texture.key === 'burner') {
      this.stoveArr[i].burner.setTexture('burnerOn');
      this.knobArr[i].setTexture('knobOn');
      this.stoveArr[i].isOn = true;
    } else {
      this.stoveArr[i].burner.setTexture('burner');
      this.knobArr[i].setTexture('knob');
      this.stoveArr[i].isOn = false;
    }
  }
  update() {
    // console.log('update');
  }
  //add more functionality :eye:
}
// export class getmethodclass {
//   sdg: any;
//   constructor(pot) {
//     this.sdg = pot;
//   }
// }
