class selector extends Phaser.Scene {
  constructor() {
    super("selector");
  }

  create() {
    this.add
      .image(400, 300, "selector")
      .setInteractive()
      .on("pointerover", () => iobject.destroy());

    this.add
      .image(189, 284, "blevel1")
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
        this.scene.start("gameplay");
      });

    this.add
      .image(132, 131, "bback")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("main")
        if (sfx == true) {
          bbacksfx.play();
        }      
      });

    if (levOver == 0) {
      this.add.image(328, 284, "blocked");
      this.add.image(465, 284, "blocked");
      this.add
        .image(603, 284, "bpvplocked")
        .setInteractive()
        .on("pointerover", () => iobject = this.add.image(603, 284, "ipvp"));
    } else if (levOver == 1) {
      this.add.image(465, 284, "blocked");
      this.add
        .image(603, 284, "bpvplocked")
        .setInteractive()
        .on("pointerover", () => iobject = this.add.image(603, 284, "ipvp"));
      this.add
        .image(328, 284, "blevel2")
        .setInteractive()
        .on("pointerdown", () => {
          if (level != 2) {
            level = 2;
          }
          if (sfx == true) {
            bnextsfx.play();
          }          
          if (track !== undefined) {
            track.pause();
          }
          this.scene.start("gameplay");
        });
    } else if (levOver == 2) {
      this.add
        .image(603, 284, "bpvplocked")
        .setInteractive()
        .on("pointerover", () => iobject = this.add.image(603, 284, "ipvp"));
      this.add
        .image(328, 284, "blevel2")
        .setInteractive()
        .on("pointerdown", () => {
          if (level != 2) {
            level = 2;
          }
        });
      if (track !== undefined) {
        track.pause();
      }
      this.scene.start("gameplay");
      this.add
        .image(465, 284, "blevel3")
        .setInteractive()
        .on("pointerdown", () => {
          if (level != 3) {
            level = 3;
          }
          if (sfx == true) {
            bnextsfx.play();
          }  
          if (track !== undefined) {
            track.pause();
          }
          this.scene.start("gameplay");
        });
    } else {
      this.add.image(603, 284, "bpvp");
      this.add
        .image(328, 284, "blevel2")
        .setInteractive()
        .on("pointerdown", () => {
          if (level != 2) {
            level = 2;
          }
        });
        if (sfx == true) {
          bnextsfx.play();
        }  
      if (track !== undefined) {
        track.pause();
      }
      this.scene.start("gameplay");
      this.add
        .image(465, 284, "blevel3")
        .setInteractive()
        .on("pointerdown", () => {
          if (level != 3) {
            level = 3;
          }
          if (track !== undefined) {
            track.pause();
          }
          this.scene.start("gameplay");
        });
    }
  }
}

export default selector;