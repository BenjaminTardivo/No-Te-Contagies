class Vaccine extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "syringe");
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setOrigin(0.9, 0.1).setSize(750, 350, true).setScale(0.08);
  }
}

export function velVaccine() {
  if (pattern3 == 0 || pattern3 == 800) {
    vaccine.setVelocityX(velObj);
  } else if (pattern4 == 0 || pattern4 == 600) {
    vaccine.setVelocityY(velObj);
  }
}

export default Vaccine;
