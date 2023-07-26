import Phaser from 'phaser';
import MenuScene from './Scenes/MenuScene';
import GameScene from './Scenes/GameScene';
import LevelOne from './Scenes/LevelOne';
import LevelTwo from './Scenes/LevelTwo';
import ArrozConLeche from './Scenes/ArrozConLeche';
import Stove from './Scenes/Stove';



// Set configuration for phaser game instance
const config = {
  type: Phaser.AUTO,
  width: 970,
  height: 750,
  backgroundColor: '#393a39',

  // Add physics, arcade, scene, and audio
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0,
      },
      debug: false,
    },
  },
  scene: [MenuScene, GameScene, LevelOne, LevelTwo, ArrozConLeche],
  audio: {
    disableWebAudio: true,
  },
};

// Initialize game instance
new Phaser.Game(config);
