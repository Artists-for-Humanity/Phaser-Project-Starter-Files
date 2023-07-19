import Phaser from 'phaser';

export default class ArrozConLeche extends Phaser.Scene {
  homeButton: any;
  recipeBar: any;
  rBarC: any;
  rBarO: any;
  rDownArrow: any;
  rUpArrow: any;
  recipe: any;
  instructions: any;
  iUpArrow: any;
  iDownArrow: any;
  ingredientsBar: any;
  iBarC: any;
  iBarO: any;
  rice: any;
  water: any;
  cinnamon: any;
  condensedMilk: any;
  recipeIndex: number;
  equipmentBar: any;
  eBarC: any;
  pot: any;
  bowl: any;
  woodenSpoon: any;
  cuttingBoard: any;
  eUpArrow: any;
  eDownArrow: any;
  eBarO: any;
  constructor() {
    console.log('bruh');
    super({
      key: 'ArrozConLeche',
    });
    this.homeButton;
    //recipe
    this.recipeBar;
    this.rBarC;
    this.rBarO;
    this.rDownArrow;
    this.rUpArrow;
    this.recipe;
    this.instructions;
    this.recipeIndex = 0;
    //ingredients
    this.ingredientsBar;
    this.iDownArrow;
    this.iUpArrow;
    this.iBarC;
    this.iBarO;
    this.rice;
    this.water;
    this.cinnamon;
    this.condensedMilk;
    //equip
    this.equipmentBar;
    this.eBarC;
    this.pot;
    this.bowl;
    this.woodenSpoon;
    this.cuttingBoard;
    this.eUpArrow;
    this.eDownArrow;
    this.eBarO;
  }
  preload() {
    console.log('wtf');
    this.load.image('Background', new URL('../../assets/Background.png', import.meta.url).href);
    this.load.image('HomeButton', new URL('../../assets/HomeButton.png', import.meta.url).href);
    this.load.image('RecipeBar', new URL('../../assets/RecipeBar.png', import.meta.url).href);
    this.load.image('RecipeBarO', new URL('../../assets/RecipeBarO.png', import.meta.url).href);
    this.load.image('RecipeOpened', new URL('../../assets/RecipeOpened.png', import.meta.url).href);
    this.load.image(
      'IngredientsBar',
      new URL('../../assets/IngredientsBar.png', import.meta.url).href
    );
    this.load.image(
      'IngredientsBarO',
      new URL('../../assets/IngredientsBarO.png', import.meta.url).href
    );
    this.load.image('EquipmentBar', new URL('../../assets/EquipmentBar.png', import.meta.url).href);
    this.load.image(
      'EquipmentBarO',
      new URL('../../assets/EquipmentBarO.png', import.meta.url).href
    );
    this.load.image('I&EOpened', new URL('../../assets/I&EOpened.png', import.meta.url).href);
    this.load.image('down', new URL('../../assets/DownArrow.png', import.meta.url).href);
    this.load.image('up', new URL('../../assets/UpArrow.png', import.meta.url).href);
    //ingredients
    this.load.image('Rice', new URL('../../assets/ingred/Rice.png', import.meta.url).href);
    this.load.image('Water', new URL('../../assets/ingred/Water.png', import.meta.url).href);
    this.load.image('Cinnamon', new URL('../../assets/ingred/Cinnamon.png', import.meta.url).href);
    this.load.image(
      'CondensedMilk',
      new URL('../../assets/ingred/CondensedMilk.png', import.meta.url).href
    );
    this.load.image('Pot', new URL('../../assets/equip/Pot.png', import.meta.url).href);
    //equip
    this.load.image('Bowl', new URL('../../assets/equip/Bowl.png', import.meta.url).href);
    this.load.image(
      'WoodenSpoon',
      new URL('../../assets/equip/WoodenSpoon.png', import.meta.url).href
    );
    this.load.image(
      'CuttingBoard',
      new URL('../../assets/equip/CuttingBoard.png', import.meta.url).href
    );
    this.load.image(
      'ACL_Recipe',
      new URL('../../assets/recipes/ACL_Recipe.png', import.meta.url).href
    );
    this.load.image(
      'ACL_Instructions',
      new URL('../../assets/recipes/ACL_Instructions.png', import.meta.url).href
    );
    console.log('all the goddamn pictures should be here >:(');
  }
  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.homeButton = this.add.image(50, 61, 'HomeButton');
    //recipe
    this.recipeBar = this.add.image(225, 50, 'RecipeBar');
    console.log(this.recipeBar);
    this.rBarC = this.add.image(460, 210, 'RecipeOpened');
    this.rBarC.setVisible(false);
    this.rBarO = this.add.image(225, 50, 'RecipeBarO');
    this.rBarO.setVisible(false);
    this.rDownArrow = this.add.image(630, 210, 'down');
    this.rDownArrow.setVisible(false);
    this.rUpArrow = this.add.image(700, 210, 'up');
    this.rUpArrow.setVisible(false);
    this.recipe = this.add.image(250, 210, 'ACL_Recipe');
    this.recipe.setVisible(false);
    this.instructions = this.add.image(435, 210, 'ACL_Instructions');
    this.instructions.setVisible(false);
    this.recipeIndex = 0;
    //ingredients
    this.ingredientsBar = this.add.image(525, 50, 'IngredientsBar');
    this.iDownArrow = this.add.image(700, 210, 'down');
    this.iDownArrow.setVisible(false);
    this.iUpArrow = this.add.image(700, 210, 'up');
    this.iUpArrow.setVisible(false);
    this.iBarC = this.add.image(515, 205, 'I&EOpened');
    this.iBarC.setVisible(false);
    this.iBarO = this.add.image(525, 50, 'IngredientsBarO');
    this.iBarO.setVisible(false);
    this.rice = this.add.image(255, 145, 'Rice');
    this.rice.setVisible(false);
    this.water = this.add.image(388, 150, 'Water');
    this.water.setVisible(false);
    this.cinnamon = this.add.image(515, 145, 'Cinnamon');
    this.cinnamon.setVisible(false);
    this.condensedMilk = this.add.image(250, 260, 'CondensedMilk');
    this.condensedMilk.setVisible(false);
    //equip
    this.equipmentBar = this.add.image(825, 50, 'EquipmentBar');
    this.eBarC = this.add.image(590, 210, 'I&EOpened');
    this.eBarC.setVisible(false);
    this.pot = this.add.image(331, 150, 'Pot');
    this.pot.setVisible(false);
    this.bowl = this.add.image(458, 150, 'Bowl');
    this.bowl.setVisible(false);
    this.woodenSpoon = this.add.image(585, 150, 'WoodenSpoon');
    this.woodenSpoon.setVisible(false);
    this.cuttingBoard = this.add.image(338, 268, 'CuttingBoard');
    this.cuttingBoard.setVisible(false);
    this.eUpArrow = this.add.image(775, 210, 'up');
    this.eUpArrow.setVisible(false);
    this.eDownArrow = this.add.image(775, 210, 'down');
    this.eDownArrow.setVisible(false);
    this.eBarO = this.add.image(825, 50, 'EquipmentBarO');
    this.eBarO.setVisible(false);
    console.log('This is Arroz Con Leche');
    this.homeButton.setInteractive();
    this.homeButton.on('pointerup', () => {
      this.scene.start('MenuScene');
    });
    //recipe
    this.recipeBar.setInteractive();
    this.recipeBar.on('pointerup', () => {
      this.rBarC.setVisible(true);
      this.recipe.setVisible(true);
      this.instructions.setVisible(true);
      this.rDownArrow.setVisible(true);
      this.rDownArrow.setInteractive();
      this.rDownArrow.on('pointerup', () => {
        if (this.recipeIndex < 2) {
          this.rUpArrow.visible === false ? this.rUpArrow.setVisible(true) : '';
          this.recipeIndex++;
          this.cycleRecipe(this.recipeIndex);
        }
        console.log(this.recipeIndex);
        //gimme more recipe
      });
      this.rUpArrow.setVisible(true);
      // console.log(typeof this.rUpArrow);
      this.rUpArrow.setInteractive();
      this.rUpArrow.on('pointerup', () => {
        if (this.recipeIndex > 0) {
          this.rDownArrow.visible === false ? this.rDownArrow.setVisible(true) : '';
          this.recipeIndex--;
          this.cycleRecipe(this.recipeIndex);
        }

        console.log(this.recipeIndex);
        //gimme more recipe
      });
      this.rBarO.setVisible(true);
      this.rBarO.setInteractive();
      this.rBarO.on('pointerup', () => {
        this.recipe.setVisible(false);
        this.instructions.setVisible(false);
        this.rBarC.setVisible(false);
        this.rDownArrow.setVisible(false);
        this.rUpArrow.setVisible(false);
        this.rBarO.setVisible(false);
      });
    });
    //ingredients
    this.ingredientsBar.setInteractive();
    this.ingredientsBar.on('pointerup', () => {
      this.iBarC.setVisible(true);
      this.rice.setVisible(true);
      this.rice.setInteractive();
      this.water.setVisible(true);
      this.water.setInteractive();
      this.cinnamon.setVisible(true);
      this.cinnamon.setInteractive();
      this.condensedMilk.setVisible(true);
      this.condensedMilk.setInteractive();
      this.iUpArrow.setVisible(true);
      this.iUpArrow.setInteractive();
      this.iUpArrow.on('pointerup', () => {
        console.log('i arrow click');
        //gimme more recipes
      });
      this.iDownArrow.setVisible(true);
      this.iDownArrow.setInteractive();
      this.iDownArrow.on('pointerup', () => {
        //put stuff here
      });
      this.iBarO.setVisible(true);
      this.iBarO.setInteractive();
      this.iBarO.on('pointerup', () => {
        //arrow stuff -> previous assets set false -> next assets set true
        console.log('wut');
        this.iBarC.setVisible(false);
        this.iBarO.setVisible(false);
        this.rice.setVisible(false);
        this.water.setVisible(false);
        this.cinnamon.setVisible(false);
        this.condensedMilk.setVisible(false);
        this.iUpArrow.setVisible(false);
        this.iDownArrow.setVisible(false);
      });
    });
    //equip
    this.equipmentBar.setInteractive();
    this.equipmentBar.on('pointerup', () => {
      this.eBarC.setVisible(true);
      this.pot.setVisible(true);
      this.pot.setInteractive();
      this.bowl.setVisible(true);
      this.bowl.setInteractive();
      this.woodenSpoon.setVisible(true);
      this.woodenSpoon.setInteractive();
      this.cuttingBoard.setVisible(true);
      this.cuttingBoard.setInteractive();
      this.eUpArrow.setVisible(true);
      this.eUpArrow.setInteractive();
      this.eUpArrow.on('pointerup', () => {
        console.log('e arrow click');
        //gimme more recipes
      });
      this.eDownArrow.setVisible(true);
      this.eDownArrow.setInteractive();
      this.eDownArrow.on('pointerup', () => {
        //put stuff here
      });
      this.eBarO.setVisible(true);
      this.eBarO.setInteractive();
      this.eBarO.on('pointerup', () => {
        this.eUpArrow.setVisible(false);
        this.eDownArrow.setVisible(false);
        this.eBarC.setVisible(false);
        this.eBarO.setVisible(false);
        this.pot.setVisible(false);
        this.bowl.setVisible(false);
        this.woodenSpoon.setVisible(false);
        this.cuttingBoard.setVisible(false);
      });
    });
    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('MenuScene');
    });
    this.add.image(gameWidth / 2, gameHeight / 2, 'Background').setDepth(-1);
  }
  cycleRecipe(num) {
    switch (num) {
      case 0:
        this.recipe.setFrame('');
        this.instructions.setFrame('');
        break;
      case 1:
        this.recipe.setFrame();
        this.instructions.setFrame('');
        break;
      case 2:
        this.recipe.setFrame('');
        this.instructions.setFrame('');
        break;
    }
  }
  update() {
    if (this.rBarC.visible === true) {
      console.log('1');
      if (this.recipeIndex === 0) {
        this.rUpArrow.setVisible(false);
      }
      if (this.recipeIndex === 2) {
        this.rDownArrow.setVisible(false);
      }
    }
  }
}
