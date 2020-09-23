class scene7 extends Phaser.Scene {
  constructor() {
    super("ayuda");
  }

  create() {
    //Seteamos el background del menú.
    var ayuda = this.add
      .image(400, 300, "ayuda")
      .setInteractive()
      .on("pointerover", () => this.iErrase());

    //Implementamos los objetos que darán información al jugador al momento de pasar el mouse por ellos.
    this.add
      .image(163, 330, "fjabon")
      .setInteractive()
      .on("pointerover", () => this.icreate());

    this.add
      .image(298, 328, "fvacuna")
      .setInteractive()
      .on("pointerover", () => this.icreate2());

    this.add
      .image(168, 413, "falcohol")
      .setInteractive()
      .on("pointerover", () => this.icreate3());

    this.add
      .image(295, 416, "fbarbijo")
      .setInteractive()
      .on("pointerover", () => this.icreate4());

    this.add
      .image(506, 336, "fbarro")
      .setInteractive()
      .on("pointerover", () => this.icreate5());

    this.add
      .image(648, 348, "fvirus")
      .setInteractive()
      .on("pointerover", () => this.icreate6());

    this.add
      .image(567, 426, "fnube")
      .setInteractive()
      .on("pointerover", () => this.icreate7());

    i = 0;

    //Creación de botones y seteo de funciones de los mismos.
    this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("main"));

    this.add
      .image(677, 514, "bcontroles")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("controles"));
  }

  //Creación de funciones que serán ejecutadas cuando el usuario pase el mouse por el objeto correspondiente a cada.
  //Cada función ejecuta el creado del cuadro de información al pasar el mouse sobre el objeto.
  icreate() {
    if (i == 0) {
      iobject = this.add.image(163, 330, "ijabon");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(163, 330, "ijabon");
    }
  }

  icreate2() {
    if (i == 0) {
      iobject = this.add.image(298, 328, "ivacuna");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(298, 328, "ivacuna");
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
      iobject = this.add.image(295, 416, "ibarbijo");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(295, 416, "ibarbijo");
    }
  }

  icreate5() {
    if (i == 0) {
      iobject = this.add.image(506, 336, "ibarro");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(506, 336, "ibarro");
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

  icreate7() {
    if (i == 0) {
      iobject = this.add.image(567, 426, "inube");
      i++;
    } else {
      iobject.destroy();
      iobject = this.add.image(567, 426, "inube");
    }
  }

  iErrase() {
    iobject.destroy();
    i--;
  }
}