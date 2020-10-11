class Soap extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "soap");
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setSize(750, 450, true).setScale(0.05);
  }
}

export function velSoap() {
  if (pattern3 == 0 || pattern3 == 800) {
    soap.setVelocityX(velObj);
  } else if (pattern4 == 0 || pattern4 == 600) {
    soap.setVelocityY(velObj);
  }
}

export default Soap;
