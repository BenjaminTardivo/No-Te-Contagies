class credits extends Phaser.Scene {
  constructor() {
    super("credits");
  }

  create() {
    //seteamos el background del menú.
    this.add.image(400, 300, "credits");

    //botones.
    this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("main")
        buttonsfx.play();
      });
  }
}

export default credits;