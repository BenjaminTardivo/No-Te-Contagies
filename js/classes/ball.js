class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setCollideWorldBounds().setBounce(0.6);
    //creacion el evento para la generacion de objetos.
  }
}

export default Ball;
