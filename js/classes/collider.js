class Collider extends Phaser.Physics.Arcade.Image {
    constructor(config) {
      super(config.scene, config.x, config.y, config.texture);
      config.scene.add.existing(this);
      config.scene.physics.add.existing(this);
      this.setImmovable(true);
    }
}

export default Collider;