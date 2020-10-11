class Alcohol extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "alcohol");
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setSize(200, 400, true).setScale(0.11);
  }
}

export function velAlcohol() {
    if (pattern3 == 0 || pattern3 == 800) {
      alcohol.setVelocityX(velObj);
    } else if (pattern4 == 0 || pattern4 == 600) {
      alcohol.setVelocityY(velObj);
    }
  }

export default Alcohol;
