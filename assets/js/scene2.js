class scene2 extends Phaser.Scene {
  constructor() {
    super("select");
  }

  create() {
    this.add
      .image(400, 300, "selector")
      .setInteractive()
      .on("pointerover", () => iobject.destroy());

    this.add
      .image(189, 284, "bnivel1")
      .setInteractive()
      .on("pointerdown", () => {
        if (nivel != 1) {
          nivel = 1;
        }
        track.pause();
        this.scene.start("game");
      });

    this.add
      .image(132, 131, "bback")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("main"));

    if (nivsup == 0) {
      this.add.image(328, 284, "bbloqueado");
      this.add.image(465, 284, "bbloqueado");
      this.add
        .image(603, 284, "bjvjbloqueado")
        .setInteractive()
        .on("pointerover", () => iobject = this.add.image(603, 284, "ijvj"));
    } else if (nivsup == 1) {
      this.add.image(465, 284, "bbloqueado");
      this.add
        .image(603, 284, "bjvjbloqueado")
        .setInteractive()
        .on("pointerover", () => iobject = this.add.image(603, 284, "ijvj"));
      this.add
        .image(328, 284, "bnivel2")
        .setInteractive()
        .on("pointerdown", () => {
          if (nivel != 2) {
            nivel = 2;
          }
          track.pause();
          this.scene.start("game");
        });
    } else if (nivsup == 2) {
      this.add
        .image(603, 284, "bjvjbloqueado")
        .setInteractive()
        .on("pointerover", () => iobject = this.add.image(603, 284, "ijvj"));
      this.add
        .image(328, 284, "bnivel2")
        .setInteractive()
        .on("pointerdown", () => {
          if (nivel != 2) {
            nivel = 2;
          }
        });
      track.pause();
      this.scene.start("game");
      this.add
        .image(465, 284, "bnivel3")
        .setInteractive()
        .on("pointerdown", () => {
          if (nivel != 3) {
            nivel = 3;
          }
          track.pause();
          this.scene.start("game");
        });
    } else {
      this.add.image(603, 284, "bjvj");
      this.add
        .image(328, 284, "bnivel2")
        .setInteractive()
        .on("pointerdown", () => {
          if (nivel != 2) {
            nivel = 2;
          }
        });
      track.pause();
      this.scene.start("game");
      this.add
        .image(465, 284, "bnivel3")
        .setInteractive()
        .on("pointerdown", () => {
          if (nivel != 3) {
            nivel = 3;
          }
          track.pause();
          this.scene.start("game");
        });
    }
  }
}