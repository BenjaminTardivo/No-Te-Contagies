class selector2 extends Phaser.Scene {
  constructor() {
    super("selector2");
  }

  create() {
    this.add.image(400, 300, sselector2);
    this.add
        .image(180, 275, "besc1")
        .setInteractive()
        .on("pointerdown", () => {
          if (level != 1) {
            level = 1;
          }
          if (sfx == true) {
            bnextsfx.play();
          } 
          if (track !== undefined) {
          track.pause();
          }
          inf = true;
          this.scene.start("gameplay");
        });
    this.add
        .image(398, 275, "besc2")
        .setInteractive()
        .on("pointerdown", () => {
          if (level !== 2) {
            level = 2;
          }
          if (sfx == true) {
            bnextsfx.play();
          } 
          if (track !== undefined) {
          track.pause();
          }
          inf = true;
          this.scene.start("gameplay");
        });
    this.add
        .image(615, 275, "besc3")
        .setInteractive()
        .on("pointerdown", () => {
          if (level !== 3) {
            level = 3;
          }
          if (sfx == true) {
            bnextsfx.play();
          } 
          if (track !== undefined) {
          track.pause();
          }
          inf = true;
          this.scene.start("gameplay");
        });
    this.add
    .image(102, 131, "bback")
    .setInteractive()
    .on("pointerdown", () => {
      if (sfx == true) {
        bbacksfx.play();
      }
      this.scene.start("main")   
    });
  }
}

export default selector2;
