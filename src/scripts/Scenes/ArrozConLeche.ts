import Phaser from "phaser";
// import Stove from './Stove';
// const s = new Stove();
// console.log(s.getStoveArr());
export default class ArrozConLeche extends Phaser.Scene {
  public homeButton: any;
  public recipeBar: any;
  public rBarC: any;
  public rDownArrow: any;
  public rUpArrow: any;
  public recipe: any;
  public instructions: any;
  public iUpArrow: any;
  public iDownArrow: any;
  public ingredientsBar: any;
  public iBarC: any;
  public rice: any;
  public water: any;
  public cinnamon: any;
  public condensedMilk: any;
  public recipeIndex: number;
  public equipmentBar: any;
  public eBarC: any;
  public pot: any;
  public bowl: any;
  public woodenSpoon: any;
  public cuttingBoard: any;
  public eUpArrow: any;
  public eDownArrow: any;
  //stove
  stoveArr: any;
  knobArr: any;
  count: number;
  constructor() {
    console.log("bruh");
    super({
      key: "ArrozConLeche",
    });
    this.homeButton;
    //recipe
    this.recipeBar;
    this.rBarC;
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
    //stove
    this.stoveArr;
    this.knobArr;
    this.count = -1;
  }
  preload() {
    console.log("preload ACL start");
    this.load.image(
      "Background",
      new URL("../../assets/Background.png", import.meta.url).href
    );
    this.load.image(
      "HomeButton",
      new URL("../../assets/buttons/HomeButton.png", import.meta.url).href
    );
    this.load.image(
      "RecipeBar",
      new URL("../../assets/buttons/RecipeBar.png", import.meta.url).href
    );
    this.load.image(
      "RecipeBarO",
      new URL("../../assets/buttons/RecipeBarO.png", import.meta.url).href
    );
    this.load.image(
      "RecipeOpened",
      new URL("../../assets/RecipeOpened.png", import.meta.url).href
    );
    this.load.image(
      "IngredientsBar",
      new URL("../../assets/buttons/IngredientsBar.png", import.meta.url).href
    );
    this.load.image(
      "IngredientsBarO",
      new URL("../../assets/buttons/IngredientsBarO.png", import.meta.url).href
    );
    this.load.image(
      "EquipmentBar",
      new URL("../../assets/buttons/EquipmentBar.png", import.meta.url).href
    );
    this.load.image(
      "EquipmentBarO",
      new URL("../../assets/buttons/EquipmentBarO.png", import.meta.url).href
    );
    this.load.image(
      "I&EOpened",
      new URL("../../assets/I&EOpened.png", import.meta.url).href
    );
    this.load.image(
      "down",
      new URL("../../assets/buttons/DownArrow.png", import.meta.url).href
    );
    this.load.image(
      "up",
      new URL("../../assets/buttons/UpArrow.png", import.meta.url).href
    );
    //ingredients
    this.load.image(
      "Rice",
      new URL("../../assets/ingred/Rice.png", import.meta.url).href
    );
    this.load.image(
      "Water",
      new URL("../../assets/ingred/Water.png", import.meta.url).href
    );
    this.load.image(
      "Cinnamon",
      new URL("../../assets/ingred/Cinnamon.png", import.meta.url).href
    );
    this.load.image(
      "CondensedMilk",
      new URL("../../assets/ingred/CondensedMilk.png", import.meta.url).href
    );
    this.load.image(
      "Pot",
      new URL("../../assets/equip/Pot.png", import.meta.url).href
    );
    //equip
    this.load.image(
      "Bowl",
      new URL("../../assets/equip/Bowl.png", import.meta.url).href
    );
    this.load.image(
      "WoodenSpoon",
      new URL("../../assets/equip/WoodenSpoon.png", import.meta.url).href
    );
    this.load.image(
      "CuttingBoard",
      new URL("../../assets/equip/CuttingBoard.png", import.meta.url).href
    );
    this.load.image(
      "ACL_Recipe",
      new URL("../../assets/recipes/ACL_Recipe.png", import.meta.url).href
    );
    this.load.image(
      "ACL_Instructions",
      new URL("../../assets/recipes/ACL_Instructions.png", import.meta.url).href
    );
    //stove
    this.load.image(
      "burner",
      new URL("../../assets/stove/burner.png", import.meta.url).href
    );
    this.load.image(
      "burnerOn",
      new URL("../../assets/stove/burnerOn.png", import.meta.url).href
    );
    this.load.image(
      "knob",
      new URL("../../assets/stove/knob.png", import.meta.url).href
    );
    this.load.image(
      "knobLow",
      new URL("../../assets/stove/knobLow.png", import.meta.url).href
    );
    this.load.image(
      "knobMed",
      new URL("../../assets/stove/knobMed.png", import.meta.url).href
    );
    this.load.image(
      "knobHigh",
      new URL("../../assets/stove/knobHigh.png", import.meta.url).href
    );
    console.log("preload ACL end");
  }
  create() {
    console.log("create ACL start");
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.homeButton = this.add.image(50, 61, "HomeButton");
    //recipe
    this.recipeBar = this.add.image(225, 50, "RecipeBar");
    console.log(this.recipeBar);
    this.rBarC = this.add.image(460, 210, "RecipeOpened");
    this.rBarC.setVisible(false);
    this.rDownArrow = this.add.image(630, 210, "down");
    this.rDownArrow.setVisible(false);
    this.rUpArrow = this.add.image(700, 210, "up");
    this.rUpArrow.setVisible(false);
    this.recipe = this.add.image(250, 210, "ACL_Recipe");
    this.recipe.setVisible(false);
    this.instructions = this.add.image(435, 210, "ACL_Instructions");
    this.instructions.setVisible(false);
    this.recipeIndex = 0;
    //ingredients
    this.ingredientsBar = this.add.image(525, 50, "IngredientsBar");
    this.iBarC = this.add.image(515, 205, "I&EOpened");
    this.iBarC.setVisible(false);
    this.iDownArrow = this.add.image(675, 210, "down");
    this.iDownArrow.setVisible(false);
    this.iUpArrow = this.add.image(750, 210, "up");
    this.iUpArrow.setVisible(false);
    this.rice = this.add.image(255, 145, "Rice");
    this.rice.setVisible(false);
    this.water = this.add.image(388, 150, "Water");
    this.water.setVisible(false);
    this.cinnamon = this.add.image(515, 145, "Cinnamon");
    this.cinnamon.setVisible(false);
    this.condensedMilk = this.add.image(250, 260, "CondensedMilk");
    this.condensedMilk.setVisible(false);
    //equip
    this.equipmentBar = this.add.image(825, 50, "EquipmentBar");
    this.eBarC = this.add.image(590, 210, "I&EOpened");
    this.eBarC.setVisible(false);
    this.pot = this.add.image(331, 150, "Pot");
    this.pot.setVisible(false);
    this.bowl = this.add.image(458, 150, "Bowl");
    this.bowl.setVisible(false);
    this.woodenSpoon = this.add.image(585, 150, "WoodenSpoon");
    this.woodenSpoon.setVisible(false);
    this.cuttingBoard = this.add.image(338, 268, "CuttingBoard");
    this.cuttingBoard.setVisible(false);
    this.eUpArrow = this.add.image(800, 210, "up");
    this.eUpArrow.setVisible(false);
    this.eDownArrow = this.add.image(725, 210, "down");
    this.eDownArrow.setVisible(false);
    console.log("This is Arroz Con Leche");
    this.homeButton.setInteractive();
    this.homeButton.on("pointerup", () => {
      this.scene.start("MenuScene");
    });
    this.createStove();
    //recipe
    this.recipeBar.setInteractive();
    this.recipeBar.on("pointerup", () => {
      this.toggleRecipe();
    });
    //ingredients
    this.ingredientsBar.setInteractive();
    this.ingredientsBar.on("pointerup", () => {
      this.toggleIngredients();
    });
    //equip
    this.equipmentBar.setInteractive();
    this.equipmentBar.on("pointerup", () => {
      this.toggleEquip();
    });
    this.input.keyboard.on("keydown-SPACE", () => {
      this.scene.start("MenuScene");
    });
    this.add.image(gameWidth / 2, gameHeight / 2, "Background").setDepth(-1);
    console.log("create ACL end");
  }
  toggleRecipe() {
    if (this.recipeBar.texture.key === "RecipeBar") {
      this.recipeBar.setTexture("RecipeBarO");
      this.rBarC.setVisible(true);
      this.recipe.setVisible(true);
      this.instructions.setVisible(true);
      this.rDownArrow.setVisible(true);
      this.rDownArrow.setInteractive();
      this.rDownArrow.on("pointerup", () => {
        if (this.recipeIndex < 2) {
          this.rUpArrow.visible === false ? this.rUpArrow.setVisible(true) : "";
          this.recipeIndex++;
          this.cycleRecipe(this.recipeIndex);
        }
        //gimme more recipe
      });
      this.rUpArrow.setVisible(true);
      // console.log(typeof this.rUpArrow);
      this.rUpArrow.setInteractive();
      this.rUpArrow.on("pointerup", () => {
        if (this.recipeIndex > 0) {
          this.rDownArrow.visible === false
            ? this.rDownArrow.setVisible(true)
            : "";
          this.recipeIndex--;
          this.cycleRecipe(this.recipeIndex);
        }
        // console.log(this.recipeIndex);
        //gimme more recipe
      });
    } else {
      this.recipeBar.setTexture("RecipeBar");
      this.recipe.setVisible(false);
      this.instructions.setVisible(false);
      this.rBarC.setVisible(false);
      this.rDownArrow.setVisible(false);
      this.rUpArrow.setVisible(false);
    }
  }
  toggleIngredients() {
    if (this.ingredientsBar.texture.key === "IngredientsBar") {
      this.ingredientsBar.setTexture("IngredientsBarO");
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
      this.iUpArrow.on("pointerup", () => {
        console.log("i up arrow click");
        //gimme more recipes
      });
      this.iDownArrow.setVisible(true);
      this.iDownArrow.setInteractive();
      this.iDownArrow.on("pointerup", () => {
        //put stuff here
      });
    } else {
      this.ingredientsBar.setTexture("IngredientsBar");
      this.iBarC.setVisible(false);
      this.rice.setVisible(false);
      this.water.setVisible(false);
      this.cinnamon.setVisible(false);
      this.condensedMilk.setVisible(false);
      this.iUpArrow.setVisible(false);
      this.iDownArrow.setVisible(false);
    }
  }
  toggleEquip() {
    if (this.equipmentBar.texture.key === "EquipmentBar") {
      this.equipmentBar.setTexture("EquipmentBarO");
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
      //pot interact
      this.pot.once("pointerdown", (pointer) => {
        // eslint-disable-next-line prefer-const
        let p = this.physics.add.image(pointer.x, pointer.y, "Pot");
        // console.log(this.stoveArr);
        // this.physics.add.overlap(
        //   p,
        //   test,
        //   this.onColl(),
        //   undefined,
        //   this
        // );s
        // p.add.collider(p, Stove.stoveArr[0],()=>{console.log('you suck');}, null, this);
        p.setInteractive();
        p.on("pointerdown", () => {
          p.on("pointermove", (pointer) => {
            p.x = pointer.x;
            p.y = pointer.y;
          });
          p.on("pointerup", () => {
            p.off("pointermove");
          });
        });
        //for now its a little wonky until later
      });
      this.eUpArrow.on("pointerup", () => {
        console.log("e arrow click");
        //gimme more recipes
      });
      this.eDownArrow.setVisible(true);
      this.eDownArrow.setInteractive();
      this.eDownArrow.on("pointerup", () => {
        //put stuff here
      });
    } else {
      this.equipmentBar.setTexture("EquipmentBar");
      this.eUpArrow.setVisible(false);
      this.eDownArrow.setVisible(false);
      this.eBarC.setVisible(false);
      this.pot.setVisible(false);
      this.bowl.setVisible(false);
      this.woodenSpoon.setVisible(false);
      this.cuttingBoard.setVisible(false);
    }
  }
  createStove() {
    this.knobArr = ["", "", "", ""];
    for (let i = 0; i < 4; i++) {
      //make knobs bigger later
      this.knobArr[i] = this.add.image(90, 685, "knob");
      this.knobArr[i].setInteractive();
      this.knobArr[i].on("pointerup", () => {
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
    this.stoveArr = ["", "", "", ""];
    for (let i = 0; i < 4; i++) {
      switch (i) {
        case 0:
          this.stoveArr[i] = {
            burner: this.add.sprite(140, 625, "burner"),
            contains: "",
            isOn: false,
          };
          break;
        case 1:
          this.stoveArr[i] = {
            burner: this.add.sprite(140, 525, "burner"),
            contains: "",
            isOn: false,
          };
          break;
        case 2:
          this.stoveArr[i] = {
            burner: this.add.sprite(260, 525, "burner"),
            contains: "",
            isOn: false,
          };
          break;
        case 3:
          this.stoveArr[i] = {
            burner: this.add.sprite(260, 625, "burner"),
            contains: "",
            isOn: false,
          };
          break;
      }
    }
  }
  cycleRecipe(num) {
    switch (num) {
      case 0:
        console.log("image 1");
        // this.recipe.setFrame('');
        // this.instructions.setFrame('');
        break;
      case 1:
        console.log("image 2");

        // this.recipe.setFrame();
        // this.instructions.setFrame('');
        break;
      case 2:
        console.log("image 3");
        // this.recipe.setFrame('');
        // this.instructions.setFrame('');
        break;
    }
  }
  toggleBurner(i) {
    this.count++;
    switch (this.count) {
      case 0:
        this.stoveArr[i].burner.setTexture("burner");
        this.stoveArr[i].isOn = false;
        this.knobArr[i].setTexture("knob");
        break;
      case 1:
        this.knobArr[i].setTexture("knobLow");
        this.stoveArr[i].burner.setTexture("burnerOn");
        this.stoveArr[i].isOn = true;
        break;
      case 2:
        this.knobArr[i].setTexture("knobMed");
        break;
      case 3:
        this.knobArr[i].setTexture("knobHigh");
        this.count = -1;
        break;
    }
  }
  onColl() {
    console.log("LDIFBLBIHG");
  }
  update() {
    if (this.rBarC.visible === true) {
      console.log("1");
      if (this.recipeIndex === 0) {
        this.rUpArrow.setVisible(false);
      }
      if (this.recipeIndex === 2) {
        this.rDownArrow.setVisible(false);
      }
    }
  }
}
