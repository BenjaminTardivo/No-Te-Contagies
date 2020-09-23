class scene6 extends Phaser.Scene {
  constructor() {
    super("creditos");
  }

  create() {
    //seteamos el background del menú.
    this.add.image(400, 300, "credits");

    //botones.
    this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("main"));
  }
}