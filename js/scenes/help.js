class help extends Phaser.Scene {
  constructor() {
    super("help");
  }

  create() {
    //Seteamos el background del menú.
    this.add
      .image(400, 300, helpscene)
      .setInteractive()
      .on("pointerover", () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
      });

    //Implementamos los objetos que darán información al jugador al momento de pasar el mouse por ellos.
    this.add
      .image(163, 330, "fsoap")
      .setInteractive()
      .on("pointerover", () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(163, 330, infojabon);
      });

    this.add
      .image(298, 328, "fvaccine")
      .setInteractive()
      .on("pointerover", () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(298, 328, infovacuna);
      });

    this.add
      .image(168, 413, "falcohol")
      .setInteractive()
      .on("pointerover", () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(168, 413, infoalcohol);
      });

    this.add
      .image(295, 416, "fchinstrap")
      .setInteractive()
      .on("pointerover", () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(295, 416, infobarbijo);
      });

    this.add
      .image(506, 328, "fmud")
      .setInteractive()
      .on("pointerover", () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(506, 328, infobarro);
      });

    this.add
      .image(648, 328, "fvirus")
      .setInteractive()
      .on("pointerover", () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(648, 328, infovirus);
      });

    this.add
      .image(574, 407, "fkid")
      .setInteractive()
      .on("pointerover", () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(574, 407, infokid);
      });

    //Creación de botones y seteo de funciones de los mismos.
    this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("main")
        if (sfx == true) {
          bbacksfx.play();
        }      
      });

    this.add
      .image(677, 514, botcontroles)
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("controls")
        if (sfx == true) {
          bnextsfx.play();
        }  
        if (iobject !== undefined) {
          iobject.destroy();
        }
    });
  }
}

export default help;
