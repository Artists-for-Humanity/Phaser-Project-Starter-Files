import Phaser from 'phaser';
import MenuScene from './Scenes/MenuScene';
import GameScene from './Scenes/GameScene';
import LevelOne from './Scenes/LevelOne';

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
  scene: [LevelOne, MenuScene, GameScene],
  audio: {
    disableWebAudio: true,
  },
};

// Initialize game instance
new Phaser.Game(config);
