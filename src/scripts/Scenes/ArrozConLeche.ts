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
    this.load.image('down', new URL('../../assets/DownArrow.png', import.meta.url).href);
    this.load.image('up', new URL('../../assets/UpArrow.png', import.meta.url).href);

    //Assets
    this.load.image('Rice', new URL('../../assets/ingred/Rice.png', import.meta.url).href);
    this.load.image('Water', new URL('../../assets/ingred/Water.png', import.meta.url).href);
    this.load.image('Cinnamon', new URL('../../assets/ingred/Cinnamon.png', import.meta.url).href);
    this.load.image('CondensedMilk', new URL('../../assets/ingred/CondensedMilk.png', import.meta.url).href);
    this.load.image('Pot', new URL('../../assets/equip/Pot.png', import.meta.url).href);
    this.load.image('Bowl', new URL('../../assets/equip/Bowl.png', import.meta.url).href);
    this.load.image('WoodenSpoon', new URL('../../assets/equip/WoodenSpoon.png', import.meta.url).href);
    this.load.image('CuttingBoard', new URL('../../assets/equip/CuttingBoard.png', import.meta.url).href);
    this.load.image('ACL_Recipe', new URL('../../assets/recipes/ACL_Recipe.png', import.meta.url).href);
    this.load.image('ACL_Instructions', new URL('../../assets/recipes/ACL_Instructions.png', import.meta.url).href);
  }

  create() {
    console.log('This is Arroz Con Leche');
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'Background');
    var RecipeIndex = 1;

    var HomeButton = this.add.image(50, 61, 'HomeButton');
    HomeButton.setInteractive();

    HomeButton.on('pointerup', () => {this.scene.start('MenuScene');});

    var RecipeBar = this.add.image(225, 50, 'RecipeBar');
    RecipeBar.setInteractive();

    RecipeBar.on('pointerup', () => {
      var RBarC = this.add.image(460, 210, 'RecipeOpened'); 
      var recipe = this.add.image(250, 210, 'ACL_Recipe');
      var instructions = this.add.image(435, 210, 'ACL_Instructions');

      var RDownArrow = this.add.image(630, 210, 'down');
      RDownArrow.setInteractive();
      
      RDownArrow.on('pointerup', () => {
        RUpArrow.visible===false ? ()=>{RDownArrow.setVisible(true); RecipeIndex--;}:
        if (RecipeIndex<3){
          
          RecipeIndex++;
          RecipeIndex===3  ? RDownArrow.setVisible(false):
          this.cycleRecipe(RecipeIndex);
        }
        
        console.log(RecipeIndex);
        //gimme more recipe
      });
      var RUpArrow = this.add.image(700, 210, 'up');
      RUpArrow.setInteractive();
      RUpArrow.on('pointerup', () => {
        RDownArrow.visible===false ? ()=>{RDownArrow.setVisible(true); RecipeIndex--;}: 
        if (RecipeIndex>=1){
           
          RecipeIndex--;
          RecipeIndex===1  ? RUpArrow.setVisible(false):
          this.cycleRecipe(RecipeIndex);
        } 
        
        console.log(RecipeIndex);
        //gimme more recipe
      });

      var RBarO = this.add.image(225, 50, 'RecipeBarO');
      RBarO.setInteractive();
      RBarO.on('pointerup', () => {
        ACLi.setVisible(false);
        ACLr.setVisible(false);
        RBarC.setVisible(false);
        RDownArrow.setVisible(false);
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
  cycleRecipe(num){
    switch(num){
      case 1:
        
        //recipe.setFrame() ***to whatever image
        //instructions.setFrame()
        break;
      case 2:
      //recipe.setFrame() ***to whatever image
        //instructions.setFrame()
        break;
      case 3:
        
        //recipe.setFrame() ***to whatever image
        //instructions.setFrame()
        break;
    }
  }


  // update(time: number, delta: number): void {

  // }
  update() {
    
  }

}
