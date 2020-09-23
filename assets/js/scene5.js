class scene5 extends Phaser.Scene {
  constructor() {
    super("options");
  }

  create() {
    //seteamos el background del menú.
    this.add.image(400, 300, "opciones");
    this.add
      .image(259, 374, "bback")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("main"));

    this.add.image(422, 254, "barra");
    this.add.image(422, 314, "barra");
  }
}
