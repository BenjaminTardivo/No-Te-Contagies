class scene4 extends Phaser.Scene {
  constructor() {
    super("store");
  }

  create() {
    //seteamos el background del menú.
    this.add.image(400, 300, "tienda");

    this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("main"));

    this.add.image(195, 300, "btiendaizq");
    this.add.image(588, 300, "btiendader");
    this.add.image(400, 510, "bcomprar");
  }
}
