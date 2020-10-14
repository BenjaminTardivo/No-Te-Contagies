//Definimos la clase (debe coincidir con el nombre de la escena, por ejemplo, scene1)
class preloader extends Phaser.Scene {
  //Le permitimos extender propiedades, para que se pueda comportar como una escena de phaser.
  constructor() {
    super("preloader"); //definimos un constructor, es decir, un nombre amigable para la escena, el cual usaremos para referenciarla dentro del código.
  }

  //Realizamos la precarga de assets (imágenes, spritesheets, etc) definiendo un nombre a cada uno, seguido de la ruta donde este se encuentra.
  preload() {
    this.load.image("lenguage", "assets/images/menus/lenguage.png");
    this.load.image("bspanish", "assets/images/buttons/bspanish.png");
    this.load.image("benglish", "assets/images/buttons/benglish.png");
    this.load.image("bportuguese", "assets/images/buttons/bportuguese.png");
    this.load.audio("bnextsfx", "assets/sfx/bnext.mp3");
    this.load.image("menu", "assets/images/menus/menu.png");
    this.load.image("help", "assets/images/menus/help.png");
    this.load.image("help2", "assets/images/menus/help2.png");
    this.load.image("selector", "assets/images/menus/selector.png");
    this.load.image("controls", "assets/images/menus/controls.png");
    this.load.image("controls2", "assets/images/menus/controls2.png");
    this.load.image("background", "assets/images/backgrounds/background.png");
    this.load.image("background2", "assets/images/backgrounds/background2.png");
    this.load.image("overcome", "assets/images/menus/overcome.png");
    this.load.image("lost", "assets/images/menus/lost.png");
    this.load.image("tree", "assets/images/objects/tree.png");
    this.load.image("tree2", "assets/images/objects/tree2.png");
    this.load.image("font", "assets/images/objects/font.png");
    this.load.image("credits", "assets/images/menus/credits.png");
    this.load.image("pause", "assets/images/menus/pause.png");
    this.load.spritesheet("player", "assets/images/objects/player.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 491,
      frameWidth: 93,
    });
    this.load.spritesheet("player2", "assets/images/objects/player2.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 491,
      frameWidth: 93,
    });
    this.load.spritesheet("ball", "assets/images/objects/ball.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 25,
      frameWidth: 25,
    });
    this.load.image("b1", "assets/images/buttons/b1.png");
    this.load.image("b2", "assets/images/buttons/b2.png");
    this.load.image("b3", "assets/images/buttons/b3.png");
    this.load.image("b4", "assets/images/buttons/b4.png");
    this.load.image("b5", "assets/images/buttons/b5.png");
    this.load.image("b6", "assets/images/buttons/b6.png");
    this.load.image("b7", "assets/images/buttons/b7.png");
    this.load.image("b8", "assets/images/buttons/b8.png");
    this.load.image("bfscreen", "assets/images/buttons/bfscreen.png");
    this.load.image("bmscon", "assets/images/buttons/bmscon.png");
    this.load.image("bmscoff", "assets/images/buttons/bmscoff.png");
    this.load.image("bsfxon", "assets/images/buttons/bsfxon.png");
    this.load.image("bsfxoff", "assets/images/buttons/bsfxoff.png");
    this.load.image("bplay", "assets/images/buttons/bplay.png");
    this.load.image("bpause", "assets/images/buttons/bpause.png");
    this.load.image("bcredits", "assets/images/buttons/bcredits.png");
    this.load.image("bcontinue", "assets/images/buttons/bcontinue.png");
    this.load.image("bhelp", "assets/images/buttons/bhelp.png");
    this.load.image("bhelp2", "assets/images/buttons/bhelp2.png");
    this.load.image("bresume", "assets/images/buttons/bresume.png");
    this.load.image("bback", "assets/images/buttons/bback.png");
    this.load.image("bcontrols", "assets/images/buttons/bcontrols.png");
    this.load.image("blevel1", "assets/images/buttons/blev1.png");
    this.load.image("blevel2", "assets/images/buttons/blev2.png");
    this.load.image("blevel3", "assets/images/buttons/blev3.png");
    this.load.image("blocked", "assets/images/buttons/blocked.png");
    this.load.image("bpvp", "assets/images/buttons/bpvp.png");
    this.load.image("bpvplocked", "assets/images/buttons/bpvplocked.png");
    this.load.image("virus", "assets/images/objects/virus.png");
    this.load.image("bretry", "assets/images/buttons/bretry.png");
    this.load.image("bexit", "assets/images/buttons/bexit.png");
    this.load.image("bmenu", "assets/images/buttons/bmenu.png");
    this.load.image("bhowtoplay", "assets/images/buttons/bhowtoplay.png");
    this.load.image("collider", "assets/images/objects/collider.png");
    this.load.image("collider2", "assets/images/objects/collider2.png");
    this.load.image("mud", "assets/images/objects/mud.png");
    this.load.image("syringe", "assets/images/objects/syringe.png");
    this.load.image("soap", "assets/images/objects/soap.png");
    this.load.image("alcohol", "assets/images/objects/alcohol.png");
    this.load.image("chinstrap", "assets/images/objects/chinstrap.png");
    this.load.image("heart", "assets/images/objects/heart.png");
    this.load.image("falcohol", "assets/images/objects/falcohol.png");
    this.load.image("fchinstrap", "assets/images/objects/fchinstrap.png");
    this.load.image("fmud", "assets/images/objects/fmud.png");
    this.load.image("fsoap", "assets/images/objects/fsoap.png");
    this.load.image("fvaccine", "assets/images/objects/fvaccine.png");
    this.load.image("fvirus", "assets/images/objects/fvirus.png");
    this.load.image("ialcohol", "assets/images/objects/ialcohol.png");
    this.load.image("ichinstrap", "assets/images/objects/ichinstrap.png");
    this.load.image("imud", "assets/images/objects/imud.png");
    this.load.image("isoap", "assets/images/objects/isoap.png");
    this.load.image("ivaccine", "assets/images/objects/ivaccine.png");
    this.load.image("ivirus", "assets/images/objects/ivirus.png");
    this.load.image("ipvp", "assets/images/objects/ipvp.png");
    this.load.audio("mainmsc", "assets/music/main.mp3");
    this.load.audio("lvl1msc", "assets/music/level1.mp3");
    this.load.audio("lvl2msc", "assets/music/level2.mp3");
    this.load.audio("lvl3msc", "assets/music/level3.mp3");
    this.load.audio("goodsfx", "assets/sfx/good.mp3");
    this.load.audio("vaccinesfx", "assets/sfx/vaccine.mp3");
    this.load.audio("badsfx", "assets/sfx/bad.mp3");
    this.load.audio("bbacksfx", "assets/sfx/bback.mp3");
  }

  create() {
    this.scene.start("lenguage");
  }
}

export default preloader;