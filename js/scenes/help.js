class help extends Phaser.Scene {
  constructor() {
    super("help");
  }

  create() {
    //Seteamos el background del menú.
    this.add
      .image(400, 300, "help")
      .setInteractive()
      .on("pointerover", () => this.iErrase());

    //Implementamos los objetos que darán información al jugador al momento de pasar el mouse por ellos.
    this.add
      .image(163, 330, "fsoap")
      .setInteractive()
      .on("pointerover", () => this.icreate());

    this.add
      .image(298, 328, "fvaccine")
      .setInteractive()
      .on("pointerover", () => this.icreate2());

    this.add
      .image(168, 413, "falcohol")
      .setInteractive()
      .on("pointerover", () => this.icreate3());

    this.add
      .image(295, 416, "fchinstrap")
      .setInteractive()
      .on("pointerover", () => this.icreate4());

    this.add
      .image(506, 336, "fmud")
      .setInteractive()
      .on("pointerover", () => this.icreate5());

    this.add
      .image(648, 348, "fvirus")
      .setInteractive()
      .on("pointerover", () => this.icreate6());

    i = 0;

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
      .image(677, 514, "bcontrols")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("controls")
        if (sfx == true) {
          if (iobject !== undefined) {
          iobject.destroy();
        }
        bnextsfx.play();
      }
    });
  }

  //Creación de funciones que serán ejecutadas cuando el usuario pase el mouse por el objeto correspondiente a cada.
  //Cada función ejecuta el creado del cuadro de información al pasar el mouse sobre el objeto.
  icreate() {
    if (i == 0) {
      iobject = this.add.image(163, 330, "isoap");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(163, 330, "isoap");
    }
  }

  icreate2() {
    if (i == 0) {
      iobject = this.add.image(298, 328, "ivaccine");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(298, 328, "ivaccine");
    }
  }

  icreate3() {
    if (i == 0) {
      iobject = this.add.image(168, 413, "ialcohol");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(168, 413, "ialcohol");
    }
  }

  icreate4() {
    if (i == 0) {
      iobject = this.add.image(295, 416, "ichinstrap");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(295, 416, "ichinstrap");
    }
  }

  icreate5() {
    if (i == 0) {
      iobject = this.add.image(506, 336, "imud");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(506, 336, "imud");
    }
  }

  icreate6() {
    if (i == 0) {
      iobject = this.add.image(648, 345, "ivirus");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(648, 345, "ivirus");
    }
  }

  iErrase() {
    iobject.destroy();
    i--;
  }
}

export default help;
