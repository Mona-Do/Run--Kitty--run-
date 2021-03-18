import createPokiAnims from '../anims/poki.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  player;
  platform;
  cursors;
  background;

  preload() {}

  create() {
    //background
    //this.add.image(30, 0, 'layer-meme').setOrigin(0, 0);
    let width = this.scale.width;
    let height = this.scale.height;
    this.background = this.add
      .tileSprite(40, 0, width, height, 'layer-meme')
      .setOrigin(0, 0)
      .setScrollFactor(0, 0);

    //platform
    this.platform = this.physics.add.staticGroup();
    this.platform.create(0, 400, 'platform');
    this.platform.create(400, 400, 'platform');
    this.platform.create(900, 400, 'platform');
    this.platform.create(1300, 400, 'platform');

    //player
    this.player = this.physics.add.sprite(100, 300, 'poki');
    //this.player.setBounce(0.2);
    //this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);
    this.player.body.setVelocityX(200);

    this.physics.add.collider(this.player, this.platform);
    createPokiAnims(this.anims);
    this.player.anims.play('run');

    //set camera
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, 500);
  }

  update() {
    this.background.setTilePosition(this.cameras.main.scrollX);

    //poki move
    this.cursors = this.input.keyboard.createCursorKeys();

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-200);
      //this.player.anims.play('jump', true);
    }
  }
}
