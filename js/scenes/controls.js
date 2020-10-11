class controls extends Phaser.Scene {
  constructor() {
    super("controls");
  }

  create() {
    //Seteamos el background del menú.
    this.add.image(400, 300, "controls");

    //Creamos los botones y definimos sus funciones.
    this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("main");
        button2sfx.play();
      });

    this.add
      .image(677, 514, "bhowtoplay")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("help");
        buttonsfx.play();
    });
  }
}

export default controls;