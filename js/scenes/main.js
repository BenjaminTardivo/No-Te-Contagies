//Definimos la clase (debe coincidir con el nombre de la escena, por ejemplo, scene1)
class main extends Phaser.Scene {
  //Le permitimos extender propiedades, para que se pueda comportar como una escena de phaser.
  constructor() {
    super("main"); //definimos un constructor, es decir, un nombre amigable para la escena, el cual usaremos para referenciarla dentro del código.
  }
  
  //Menú principal. Creación del menú, botones que redigirán a las distintas escenas (menú de créditos, ayuda, jugar, etc).
  create() {
    bbacksfx = this.sound.add("bbacksfx");
    if (track == undefined && music == true) {
      track = this.sound.add("mainmsc", { loop: true });
      track.play();
    }
    this.add.image(400, 300, "menu");
    this.add
      .image(400, 260, "bplay")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("selector");
        if (sfx == true) {
          bnextsfx.play();
        }
      });
    this.add
      .image(400, 330, "bcredits")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("credits");
        if (sfx == true) {
          bnextsfx.play();
        }
      });
    this.add
      .image(710, 558, "bhelp")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("help");
        if (sfx == true) {
          bnextsfx.play();
        }
      });
    this.add
      .image(90, 558, "bexit")
      .setInteractive()
      .on("pointerdown", () => {
        track.pause();
        window.location.href = "http://www.google.com";
        if (sfx == true) {
          bnextsfx.play();
        }
      });
    this.add
      .image(770, 30, "bfscreen")
      .setInteractive()
      .on("pointerdown", () => {
        if (this.scale.isFullscreen) {
          this.scale.stopFullscreen();
          if (sfx == true) {
            bbacksfx.play();
          }
        } else {
          this.scale.startFullscreen();
          if (sfx == true) {
            bnextsfx.play();
          }
        }
      });
    bmsc = this.add
      .image(707, 30, bmscText)
      .setInteractive()
      .on("pointerdown", () => {
        if (music == true) {
          bmsc.setTexture("bmscoff");
          bmscText = "bmscoff";
          bnextsfx.play();
          track.pause();
          track = undefined;
          music = false;
        } else if (music == false) {
          bmsc.setTexture("bmscon");
          bmscText = "bmscon";
          bbacksfx.play();
          track = this.sound.add("mainmsc", { loop: true });
          track.play();
          music = true;
        }
      });
    bsfx = this.add
      .image(737, 30, bsfxText)
      .setInteractive()
      .on("pointerdown", () => {
        if (sfx == true) {
          bsfx.setTexture("bsfxoff");
          bsfxText = "bsfxoff";
          bnextsfx.play();
          sfx = false;
        } else if (sfx == false) {
          bsfx.setTexture("bsfxon");
          bsfxText = "bsfxon";
          bbacksfx.play();
          sfx = true;
        }
      });
  }
}

export default main;
