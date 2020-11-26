//Definimos la clase (debe coincidir con el nombre de la escena, por ejemplo, scene1)
class main extends Phaser.Scene {
  //Le permitimos extender propiedades, para que se pueda comportar como una escena de phaser.
  constructor() {
    super("main"); //definimos un constructor, es decir, un nombre amigable para la escena, el cual usaremos para referenciarla dentro del código.
  }
  
  //Menú principal. Creación del menú, botones que redigirán a las distintas escenas (menú de créditos, ayuda, jugar, etc).
  create() {
    bbacksfx = this.sound.add("bbacksfx");
    if(language == 'spanish'){
      bplay = 'bplay-es'
      bcredits = 'bcredits-es'
      bhelp = 'bhelp-es'
      bexit = 'bexit-es'
      shelp = 'help-es'
      scontrols = 'controls-es'
      scredits = 'credits-es'
      isoap = 'isoap-es'
      ivaccine = 'ivaccine-es'
      ialcohol = 'ialcohol-es'
      ichinstrap = 'ichinstrap-es'
      imud = 'imud-es'
      ivirus = 'ivirus-es'
      ikid = 'ikid-es'
      bcontrols = 'bcontrols-es'
      bhowtoplay = 'bhowtoplay-es'
      lost = 'lost-es'
      bretry = 'bretry-es'
      bmenu = 'bmenu-es'
      overcome = 'overcome-es'
      bcontinue = 'bcontinue-es'
      bretry = 'bretry-es'
      spause = 'pause-es'
      bresume = 'bresume-es'
      bhelp2 = 'bhelp2-es'
      shelp2 = 'help2-es'
      scontrols2 = 'controls2-es'
      sselector = 'selector-es'
      sselector2 = 'selector2-es'
      iinf = 'iinf-es'
      text = 'Puntaje = '
    }
    if (language == 'english'){
      bplay = 'bplay-en'
      bcredits = 'bcredits-en'
      bhelp = 'bhelp-en'
      bexit = 'bexit-en'
      shelp = 'help-en'
      scontrols = 'controls-en'
      scredits = 'credits-en'
      isoap = 'isoap-en'
      ivaccine = 'ivaccine-en'
      ialcohol = 'ialcohol-en'
      ichinstrap = 'ichinstrap-en'
      imud = 'imud-en'
      ivirus = 'ivirus-en'
      ikid = 'ikid-en'
      bcontrols = 'bcontrols-en'
      bhowtoplay = 'bhowtoplay-en'
      lost = 'lost-en'
      bretry = 'bretry-en'
      bmenu = 'bmenu-en'
      overcome = 'overcome-en'
      bcontinue = 'bcontinue-en'
      bretry = 'bretry-en'
      spause = 'pause-en'
      bresume = 'bresume-en'
      bhelp2 = 'bhelp2-en'
      shelp2 = 'help2-en'
      scontrols2 = 'controls2-en'
      sselector = 'selector-en'
      sselector2 = 'selector2-en'
      iinf = 'iinf-en'
      text = 'Score = '
    }
    if(language == 'portuguese'){
      bplay = 'bplay-pt'
      bcredits = 'bcredits-pt'
      bhelp = 'bhelp-pt'
      bexit = 'bexit-pt'
      shelp = 'help-pt'
      scontrols = 'controls-pt'
      scredits = 'credits-pt'
      isoap = 'isoap-pt'
      ivaccine = 'ivaccine-pt'
      ialcohol = 'ialcohol-pt'
      ichinstrap = 'ichinstrap-pt'
      imud = 'imud-pt'
      ivirus = 'ivirus-pt'
      ikid = 'ikid-pt'
      bcontrols = 'bcontrols-es'
      bhowtoplay = 'bhowtoplay-pt'
      lost = 'lost-pt'
      bretry = 'bretry-pt'
      bmenu = 'bmenu-pt'
      overcome = 'overcome-pt'
      bcontinue = 'bcontinue-pt'
      bretry = 'bretry-pt'
      spause = 'pause-es'
      bresume = 'bresume-pt'
      bhelp2 = 'bhelp2-pt'
      shelp2 = 'help2-es'
      scontrols2 = 'controls2-pt'
      sselector = 'selector-pt'
      sselector2 = 'selector2-pt'
      iinf = 'iinf-pt'
      text = 'Pontuação = '
    }
    if (track == undefined && music == true) {
      track = this.sound.add("mainmsc", { loop: true });
      track.play();
    }
    this.add.image(400, 300, "menu");
    this.add
      .image(400, 260, bplay)
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("selector");
        if (sfx == true) {
          bnextsfx.play();
        }
      });
    this.add
      .image(400, 330, bcredits)
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("credits");
        if (sfx == true) {
          bnextsfx.play();
        }
      });
    this.add
      .image(710, 558, bhelp)
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("help");
        if (sfx == true) {
          bnextsfx.play();
        }
      });
    this.add
      .image(90, 558, bexit)
      .setInteractive()
      .on("pointerdown", () => {
        if (music == true) {
          track.pause();
        }
        window.location.href = "http://www.google.com";
        if (sfx == true) {
          bnextsfx.play();
        }
      });
    this.add
      .image(644, 29, "blanguage")
      .setScale(1.20)
      .setInteractive()
      .on("pointerdown", () => {
        if (track !== undefined) {
          track.pause();
          track = undefined;
        }
        if (sfx == true) {
          bnextsfx.play();
        }
        this.scene.start("lenguage");
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
      .image(684, 30, bmscText)
      .setScale(1.20)
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
      .image(724, 30, bsfxText)
      .setScale(1.20)
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
