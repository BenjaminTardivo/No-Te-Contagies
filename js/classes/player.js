class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setOrigin(0.2, 0.5) //seteamos el punto de origen (el centro) del asset (para poder establecer su collider).
      .setSize(80, 130) //establecemos el tamaño de su collider.
      .setScale(0.45) //lo escalamos a un tamaño acorde.
      .setCollideWorldBounds(true); //el jugador choca con los extremos/límites del mundo (no se puede ir de la pantalla).
  }

update() {
    if (
      (cursors !== undefined && cursors.left.isDown && cursors.up.isDown) || upLeft == true) {
      player.anims
        .play(leftAnim, true)
        .setVelocityX(vel2X)
        .setVelocityY(vel2Y2);
    } else if (cursors !== undefined && cursors.left.isDown && cursors.down.isDown || downLeft == true) {
      player.anims
        .play(leftAnim, true)
        .setVelocityX(vel2X)
        .setVelocityY(vel2Y);
    } else if (cursors !== undefined && cursors.right.isDown && cursors.up.isDown || upRight == true) {
      player.anims
        .play(rightAnim, true)
        .setVelocityX(vel2X2)
        .setVelocityY(vel2Y2);
    } else if (cursors !== undefined && cursors.right.isDown && cursors.down.isDown || upRight == true) {
      player.anims
        .play(rightAnim, true)
        .setVelocityX(vel2X2)
        .setVelocityY(vel2Y);
    } else if (cursors !== undefined && cursors.left.isDown || left == true) {
      player.anims
        .play(leftAnim, true)
        .setVelocityX(velX);
    } else if (cursors !== undefined && cursors.right.isDown || right == true) {
      player.anims
        .play(rightAnim, true)
        .setVelocityX(velX2);
    } else {
      player.setVelocityX(0);
    }

    if (cursors !== undefined && cursors.left.isDown && cursors.up.isDown || upLeft == true) {
      player.anims
        .play(leftAnim, true)
        .setVelocityX(vel2X)
        .setVelocityY(vel2Y2);
    } else if (cursors !== undefined && cursors.left.isDown && cursors.down.isDown ||downLeft == true) {
      player.anims
        .play(leftAnim, true)
        .setVelocityX(vel2X)
        .setVelocityY(vel2Y);
    } else if (cursors !== undefined && cursors.right.isDown && cursors.up.isDown || upRight == true) {
      player.anims
        .play(rightAnim, true)
        .setVelocityX(vel2X2)
        .setVelocityY(vel2Y2);
    } else if (cursors !== undefined && cursors.right.isDown && cursors.down.isDown || downRight == true) {
      player.anims
        .play(rightAnim, true)
        .setVelocityX(vel2X2)
        .setVelocityY(vel2Y);
    } else if (cursors !== undefined && cursors.down.isDown || down == true) {
      player.anims
        .play(downAnim, true)
        .setVelocityY(velY);
    } else if (cursors !== undefined && cursors.up.isDown || up == true) {
      player.anims
        .play(upAnim, true)
        .setVelocityY(velY2);
    } else {
      player.setVelocityY(0);
    }
  }
}

export default Player;
