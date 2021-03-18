export default class Background extends Phaser.Scene {
  constructor() {
    super('background');
  }

  preload() {}

  create() {
    let bg = this.add.graphics();
    bg.fillStyle(0xff0000);
    bg.fillRect(0, 0, 800, 600);
    //this.add.image(0, 0, 'layer-back').setScale(2);
    this.add.image(30, 0, 'layer-meme').setOrigin(0, 0);
    //const platform = this.add.rectangle(0, 400, 3200, 10, 0xf6cc38);
    this.platform = this.physics.add.staticGroup();
    //this.platform.create(0, 400, 'ground');

    //this.color1 = new Phaser.Display.Color(120, 120, 225);
    //this.color2 = new Phaser.Display.Color(150, 150, 150);
  }

  update() {
    const cam = this.cameras.main;
    const speed = 3;
    cam.scrollX += speed;
    //var hexColor = Phaser.Display.Color.Interpolate.ColorWithColor(
    //this.color1,
    //this.color2,);

    //this.cameras.main.setBackgroundColor(hexColor);
  }
}
