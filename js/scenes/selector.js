class selector extends Phaser.Scene {
  constructor() {
    super("selector");
  }

  create() {
    this.add
      .image(400, 300, sselector)
      .setInteractive()
      .on("pointerover", () => {
        if (iobject !== undefined && levOver <= 2) {
          iobject.destroy();
          iobject = undefined;
        }
      });

      this.add
        .image(189, 284, "blevel1")
        .setInteractive()
        .on("pointerdown", () => {
          if (levOver > 0) {
            i = 1;
          } else {
            i = 0;
          }
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
          if (sfx == true) {
            bbacksfx.play();
          }
          this.scene.start("main")   
        });

      if (levOver == 0) {
        this.add.image(328, 284, "blocked");
        this.add.image(465, 284, "blocked");
        this.add
          .image(603, 284, "binflocked")
          .setInteractive()
          .on("pointerover", () => iobject = this.add.image(603, 284, iinf));
      } else if (levOver == 1) {
        this.add.image(465, 284, "blocked");
        this.add
          .image(603, 284, "binflocked")
          .setInteractive()
          .on("pointerover", () => iobject = this.add.image(603, 284, iinf));
        this.add
          .image(328, 284, "blevel2")
          .setInteractive()
          .on("pointerdown", () => {
            if (levOver > 1) {
              i = 1;
            } else {
              i = 0;
            }
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
          .image(603, 284, "binflocked")
          .setInteractive()
          .on("pointerover", () => iobject = this.add.image(603, 284, iinf));
        this.add
          .image(328, 284, "blevel2")
          .setInteractive()
          .on("pointerdown", () => {
            if (levOver > 1) {
              i = 1;
            } else {
              i = 0;
            }
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
        this.add
          .image(465, 284, "blevel3")
          .setInteractive()
          .on("pointerdown", () => {
            if (levOver > 2) {
              i = 1;
            } else {
              i = 0;
            }
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
      } else if (levOver == 3) {
        this.add
          .image(328, 284, "blevel2")
          .setInteractive()
          .on("pointerdown", () => {
            if (levOver > 1) {
              i = 1;
            } else {
              i = 0;
            }
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
        this.add
          .image(465, 284, "blevel3")
          .setInteractive()
          .on("pointerdown", () => {
            if (levOver > 2) {
              i = 1;
            } else {
              i = 0;
            }
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
          this.add
            .image(603, 284, "binf")
            .setInteractive()
            .on("pointerdown", () => {
              if (sfx == true) {
                bnextsfx.play();
              }  
              this.scene.start("selector2");
            });
          }
        }  
      }
  

export default selector;