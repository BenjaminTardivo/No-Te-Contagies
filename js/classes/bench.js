class Bench extends Phaser.Physics.Arcade.Image {
    constructor(config) {
      super(config.scene, config.x, config.y, config.texture);
      config.scene.add.existing(this);
      config.scene.physics.add.existing(this);
      this.setSize(120, 80).setImmovable(true);
    }
}

export default Bench;