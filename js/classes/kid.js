class Kid extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setOrigin(0.2, 0.5) //seteamos el punto de origen (el centro) del asset (para poder establecer su collider).
      .setSize(80, 130) //establecemos el tamaño de su collider.
      .setScale(0.45) //lo escalamos a un tamaño acorde.
  }
}

export function posKid() {
  if (pattern >= 1.4 && pattern < 1.75) {
    whatKid = "kid";
    upAnim2 = "upKid";
    downAnim2 = "downKid";
    rightAnim2 = "rightKid";
    leftAnim2 = "leftKid";
    stopAnim2 = "stopKid";  
  } else if (pattern >= 1.75 && pattern < 2.1) {
    whatKid = "kid2";
    upAnim2 = "upKid2";
    downAnim2 = "downKid2";
    rightAnim2 = "rightKid2";
    leftAnim2 = "leftKid2";
    stopAnim2 = "stopKid2"; 
  } else {
    whatKid = "kid3";
    upAnim2 = "upKid3";
    downAnim2 = "downKid3";
    rightAnim2 = "rightKid3";
    leftAnim2 = "leftKid3";
    stopAnim2 = "stopKid3"; 
  }
  if (pattern2 == 0) {
    pattern3 = Phaser.Math.FloatBetween(240.445, 309.445);
    pattern4 = 0;
  } else if (pattern2 == 1) {
      pattern3 = Phaser.Math.FloatBetween(465.445, 536.445);
      pattern4 = 600;
  } else if (pattern2 == 2) {
      pattern3 = 0;
      pattern4 = Phaser.Math.FloatBetween(204.25, 240.75);
  } else if (pattern2 == 3) {
      pattern3 = 800;
      pattern4 = Phaser.Math.FloatBetween(379.25, 420.75);
  }
}

export function velKid() {
    if (pattern3 == 0 || pattern3 == 800) {
      kid.setVelocityX(velObj);
    } else if (pattern4 == 0 || pattern4 == 600) {
        kid.setVelocityY(velObj);
    }
    if (pattern3 == 0) {
        kid.anims.play(rightAnim2);
    } else if (pattern3 == 800) {
        kid.anims.play(leftAnim2);
    } else if (pattern4 == 0) {
        kid.anims.play(downAnim2);
    } else if (pattern4 == 600) {
        kid.anims.play(upAnim2);
  }
}

export function playKid() {
  if (kid.body.velocity.x < 0) {
    kid.anims.play(leftAnim2);
  } else if (kid.body.velocity.x > 0) {
    kid.anims.play(rightAnim2);
  } else if (kid.body.velocity.y < 0) {
    kid.anims.play(upAnim2);
  } else if (kid.body.velocity.y > 0) {
    kid.anims.play(downAnim2);
  }
}

export function stopKid() {
    kid.anims.play(stopAnim2);
}

export default Kid;
