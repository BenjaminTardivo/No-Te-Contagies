class options extends Phaser.Scene {
  constructor() {
    super("options");
  }

  create() {
    //seteamos el background del menú.
    this.add.image(400, 300, "options");
    this.add
      .image(259, 374, "bback")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("main");
        button2sfx.play();
      });

    this.add.image(422, 254, "bar");
    this.add.image(422, 314, "bar");
  }
}

export default options;
