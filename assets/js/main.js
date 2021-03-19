import Preloader from './scenes/preloader.js';
import Game from './scenes/game.js';
import Gameover from './scenes/gameover.js';

const config = {
  type: Phaser.AUTO,
  width: 1142,
  height: 500,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  //backgroundColor: '#693B4C',
  scene: [Preloader, Game, Gameover],
};

const game = new Phaser.Game(config);


