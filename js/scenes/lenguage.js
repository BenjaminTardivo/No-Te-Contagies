//Definimos la clase (debe coincidir con el nombre de la escena, por ejemplo, scene1)
class lenguage extends Phaser.Scene {
  //Le permitimos extender propiedades, para que se pueda comportar como una escena de phaser.
  constructor() {
    super("lenguage"); //definimos un constructor, es decir, un nombre amigable para la escena, el cual usaremos para referenciarla dentro del código.
  }

  create() {
    this.add.image(400, 300, "lenguage")
    bnextsfx = this.sound.add("bnextsfx");
    this.add
        .image(178, 260, "bspanish")
        .setInteractive()
        .on("pointerdown", () => {
          if (language == undefined) {
            language = 'spanish'
          }
            bnextsfx.play();
            this.scene.start("main")
        });

    this.add
    .image(398, 260, "benglish")
    .setInteractive()
    .on('pointerdown', () => {
      if (language == undefined) {
        language = 'english'
      }
      bnextsfx.play();
      this.scene.start("main")
    })
    this.add
    .image(618, 260, "bportuguese")
    .setInteractive()
    .on('pointerdown', () => {
      if (language == undefined) {
        language = 'portuguese'
      }
      bnextsfx.play();
      this.scene.start("main")
    })
  }
}

export default lenguage;
