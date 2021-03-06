class Chinstrap extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "chinstrap");
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setOrigin(0.9, 0.1).setSize(1000, 750, true).setScale(0.035);
  }
}

export function velChinstrap() {
  if (pattern3 == 0 || pattern3 == 800) {
    chinstrap.setVelocityX(velObj);
  } else if (pattern4 == 0 || pattern4 == 600) {
    chinstrap.setVelocityY(velObj);
  }
}

export default Chinstrap;
