class Virus extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "virus");
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setSize(500, 500, true).setScale(0.06);
  }
}

export function velVirus() {
  if (pattern3 == 0 || pattern3 == 800) {
    virus.setVelocityX(velObj);
  } else if (pattern4 == 0 || pattern4 == 600) {
    virus.setVelocityY(velObj);
  }
}

export default Virus;
