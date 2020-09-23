class scene8 extends Phaser.Scene {
  constructor() {
    super("controles");
  }

  create() {
    //Seteamos el background del menú.
    this.add.image(400, 300, "controles");

    //Creamos los botones y definimos sus funciones.
    this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("main"));

    this.add
      .image(677, 514, "bcomojugar")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("ayuda"));
  }
}