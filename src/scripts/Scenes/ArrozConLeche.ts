import Phaser from 'phaser';

export default class ArrozConLeche extends Phaser.Scene {


  constructor() {
    super({
      key: 'ArrozConLeche',
    });

  }

  preload() {
    this.load.image('Background', new URL('../../assets/Background.png', import.meta.url).href);
    this.load.image('HomeButton', new URL('../../assets/HomeButton.png', import.meta.url).href);
    this.load.image('RecipeBar', new URL('../../assets/RecipeBar.png', import.meta.url).href);
    this.load.image('RecipeBarO', new URL('../../assets/RecipeBarO.png', import.meta.url).href);
    this.load.image('RecipeOpened', new URL('../../assets/RecipeOpened.png', import.meta.url).href);
    this.load.image('IngredientsBar', new URL('../../assets/IngredientsBar.png', import.meta.url).href);
    this.load.image('IngredientsBarO', new URL('../../assets/IngredientsBarO.png', import.meta.url).href);
    this.load.image('EquipmentBar', new URL('../../assets/EquipmentBar.png', import.meta.url).href);
    this.load.image('EquipmentBarO', new URL('../../assets/EquipmentBarO.png', import.meta.url).href);
    this.load.image('I&EOpened', new URL('../../assets/I&EOpened.png', import.meta.url).href);
    this.load.image('Arrow', new URL('../../assets/Arrow.png', import.meta.url).href);

    //Assets
    this.load.image('Rice', new URL('../../assets/Rice.png', import.meta.url).href);
    this.load.image('Water', new URL('../../assets/Water.png', import.meta.url).href);
    this.load.image('Cinnamon', new URL('../../assets/Cinnamon.png', import.meta.url).href);
    this.load.image('CondensedMilk', new URL('../../assets/CondensedMilk.png', import.meta.url).href);
    this.load.image('Pot', new URL('../../assets/equip/Pot.png', import.meta.url).href);
    this.load.image('Bowl', new URL('../../assets/equip/Bowl.png', import.meta.url).href);
    this.load.image('WoodenSpoon', new URL('../../assets/equip/WoodenSpoon.png', import.meta.url).href);
    this.load.image('CuttingBoard', new URL('../../assets/equip/CuttingBoard.png', import.meta.url).href);
  }

  create() {
    console.log('This is Arroz Con Leche');
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'Background');
    

    var HomeButton = this.add.image(50, 61, 'HomeButton');
    HomeButton.setInteractive();

    HomeButton.on('pointerup', () => {this.scene.start('MenuScene');});

    var RecipeBar = this.add.image(225, 50, 'RecipeBar');
    RecipeBar.setInteractive();

    RecipeBar.on('pointerup', () => {
      var RBarC = this.add.image(460, 210, 'RecipeOpened'); 
      var RArrow = this.add.image(650, 210, 'Arrow');
      RArrow.setInteractive();
      RArrow.on('pointerup', () => {
        console.log("r arrow click");
        //gimme more recipe
      });
      var RBarO = this.add.image(225, 50, 'RecipeBarO');
      RBarO.setInteractive();
      RBarO.on('pointerup', () => {
        RBarC.setVisible(false);
        RArrow.setVisible(false);
        RBarO.setVisible(false);     
      });
    })

    var IngredientsBar = this.add.image(525, 50, 'IngredientsBar');
    IngredientsBar.setInteractive();

    IngredientsBar.on('pointerup', () => {
      
      var IBarC = this.add.image(515, 205, 'I&EOpened'); 
      var Rice = this.add.image(255, 145, 'Rice');
      Rice.setInteractive();
      var Water = this.add.image(388, 150, 'Water');
      Water.setInteractive();
      var Cinnamon = this.add.image(515, 145, 'Cinnamon');
      Cinnamon.setInteractive();
      var CondensedMilk = this.add.image(250, 260, 'CondensedMilk');
      CondensedMilk.setInteractive();
      var IArrow = this.add.image(700, 210, 'Arrow');
      IArrow.setInteractive();
      IArrow.on('pointerup', () => {
        console.log("i arrow click");
        //gimme more recipes
      });
      var IBarO = this.add.image(525, 50, 'IngredientsBarO');
      IBarO.setInteractive();
      IBarO.on('pointerup', () => {
         //arrow stuff -> previous assets set false -> next assets set true
         console.log('wut')
        IBarC.setVisible(false); 
        IBarO.setVisible(false);
        Rice.setVisible(false); 
        Water.setVisible(false); 
        Cinnamon.setVisible(false); 
        CondensedMilk.setVisible(false);
        IArrow.setVisible(false);
      });
  })



  var EquipmentBar = this.add.image(825, 50, 'EquipmentBar');
  EquipmentBar.setInteractive();

  EquipmentBar.on('pointerup', () => {
    var EBarC = this.add.image(590, 210, 'I&EOpened'); 
    var Pot = this.add.image(331, 150, 'Pot');
    Pot.setInteractive();
    var Bowl = this.add.image(458, 150, 'Bowl');
    Bowl.setInteractive();
    var WoodenSpoon = this.add.image(585, 150, 'WoodenSpoon');
    WoodenSpoon.setInteractive();
    var CuttingBoard = this.add.image(338, 268, 'CuttingBoard');
    CuttingBoard.setInteractive();
    var EArrow = this.add.image(775, 210, 'Arrow');
      EArrow.setInteractive();
      EArrow.on('pointerup', () => {
        console.log("e arrow click");
        //gimme more recipes
      });
    var EBarO = this.add.image(825, 50, 'EquipmentBarO');
    EBarO.setInteractive();
    EBarO.on('pointerup', () => {
      EArrow.setVisible(false);
      EBarC.setVisible(false); 
      EBarO.setVisible(false);
      Pot.setVisible(false);
      Bowl.setVisible(false);
      WoodenSpoon.setVisible(false);
      CuttingBoard.setVisible(false);
      });
  })


  this.input.keyboard.on('keydown-SPACE', () => {this.scene.start('MenuScene');});

  }


  update(time: number, delta: number): void {
    

  }

}
