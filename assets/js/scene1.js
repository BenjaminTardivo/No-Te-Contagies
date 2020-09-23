//Definimos la clase (debe coincidir con el nombre de la escena, por ejemplo, scene1)
class scene1 extends Phaser.Scene {
  //Le permitimos extender propiedades, para que se pueda comportar como una escena de phaser.
  constructor() {
    super("main"); //definimos un constructor, es decir, un nombre amigable para la escena, el cual usaremos para referenciarla dentro del código.
  }

  //Realizamos la precarga de assets (imágenes, spritesheets, etc) definiendo un nombre a cada uno, seguido de la ruta donde este se encuentra.
  preload() {
    this.load.image("menu", "./assets/images/menus/menu.png");
    this.load.image("ayuda", "./assets/images/menus/ayuda.png");
    this.load.image("ayuda2", "/assets/images/menus/ayuda2.png");
    this.load.image("selector", "./assets/images/menus/selector.png");
    this.load.image("controles", "./assets/images/menus/controles.png");
    this.load.image("controles2", "./assets/images/menus/controles2.png");
    this.load.image("tienda", "./assets/images/menus/tienda.png");
    this.load.image("opciones", "./assets/images/menus/opciones.png");
    this.load.image("opciones2", "./assets/images/menus/opciones2.png");
    this.load.image("background", "./assets/images/backgrounds/background.png");
    this.load.image("background2", "./assets/images/backgrounds/background2.png");
    this.load.image("nsuperado", "./assets/images/menus/nsuperado.png");
    this.load.image("nperdido", "./assets/images/menus/nperdido.png");
    this.load.image("arbol", "./assets/images/objects/arbol.png");
    this.load.image("arbol2", "./assets/images/objects/arbol2.png");
    this.load.image("fuente", "./assets/images/objects/fuente.png");
    this.load.image("credits", "./assets/images/menus/creditos.png");
    this.load.image("pause", "./assets/images/menus/pausa.png");
    this.load.spritesheet("jugador", "./assets/images/objects/player.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 491,
      frameWidth: 298,
    });
    this.load.spritesheet("jugador2", "./assets/images/objects/player2.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 491,
      frameWidth: 298,
    });
    this.load.image("bjugar", "./assets/images/buttons/bjugar.png");
    this.load.image("bpausa", "./assets/images/buttons/bpausa.png");
    this.load.image("btienda", "./assets/images/buttons/btienda.png");
    this.load.image("bcreditos", "./assets/images/buttons/bcreditos.png");
    this.load.image("bopciones", "./assets/images/buttons/bopciones.png");
    this.load.image("bopciones2", "./assets/images/buttons/bopciones2.png");
    this.load.image("bcontinuar", "./assets/images/buttons/bcontinuar.png");
    this.load.image("bayuda", "./assets/images/buttons/bayuda.png");
    this.load.image("bayuda2", "./assets/images/buttons/bayuda2.png");
    this.load.image("breanudar", "./assets/images/buttons/breanudar.png");
    this.load.image("bback", "./assets/images/buttons/bback.png");
    this.load.image("btiendaizq", "./assets/images/buttons/btiendaizq.png");
    this.load.image("btiendader", "./assets/images/buttons/btiendader.png");
    this.load.image("bcomprar", "./assets/images/buttons/bcomprar.png");
    this.load.image("bcontroles", "./assets/images/buttons/bcontroles.png");
    this.load.image("bnivel1", "./assets/images/buttons/bniv1.png");
    this.load.image("bnivel2", "./assets/images/buttons/bniv2.png");
    this.load.image("bnivel3", "./assets/images/buttons/bniv3.png");
    this.load.image("bbloqueado", "./assets/images/buttons/bbloq.png");
    this.load.image("bjvj", "./assets/images/buttons/bjvj.png");
    this.load.image("bjvjbloqueado", "./assets/images/buttons/bjvjbloq.png");
    this.load.image("virus", "./assets/images/objects/virus.png");
    this.load.image("nube", "./assets/images/objects/nube.png");
    this.load.image("breintentar", "./assets/images/buttons/breintentar.png");
    this.load.image("bsalir", "./assets/images/buttons/bsalir.png");
    this.load.image("bmenu", "./assets/images/buttons/bmenu.png");
    this.load.image("bcomojugar", "./assets/images/buttons/bcomojugar.png");
    this.load.image("barra", "./assets/images/objects/barra.png");
    this.load.image("collider", "./assets/images/objects/collider.png");
    this.load.image("collider2", "./assets/images/objects/collider2.png");
    this.load.image("barro", "./assets/images/objects/barro.png");
    this.load.image("jeringa", "./assets/images/objects/vacuna.png");
    this.load.image("jabon", "./assets/images/objects/jabon.png");
    this.load.image("alcohol", "./assets/images/objects/alcohol.png");
    this.load.image("barbijo", "./assets/images/objects/barbijo.png");
    this.load.image("corazon", "./assets/images/objects/corazon.png");
    this.load.image("falcohol", "./assets/images/objects/falcohol.png");
    this.load.image("fbarbijo", "./assets/images/objects/fbarbijo.png");
    this.load.image("fbarro", "./assets/images/objects/fbarro.png");
    this.load.image("fjabon", "./assets/images/objects/fjabon.png");
    this.load.image("fnube", "./assets/images/objects/fnube.png");
    this.load.image("fvacuna", "./assets/images/objects/fvacuna.png");
    this.load.image("fvirus", "./assets/images/objects/fvirus.png");
    this.load.image("ialcohol", "./assets/images/objects/ialcohol.png");
    this.load.image("ibarbijo", "./assets/images/objects/ibarbijo.png");
    this.load.image("ibarro", ".assets/images/objects/ibarro.png");
    this.load.image("ijabon", "./assets/images/objects/ijabon.png");
    this.load.image("ivacuna", "./assets/images/objects/ivacuna.png");
    this.load.image("ivirus", "./assets/images/objects/ivirus.png");
    this.load.image("inube", "./assets/images/objects/inube.png");
    this.load.image("ijvj", "./assets/images/objects/ijvj.png");
    this.load.audio("menumusic", "./assets/music/menu.mp3");
    this.load.audio("goodiesfx", "./assets/sfx/goodie.wav");
    this.load.audio("vacunasfx", "./assets/sfx/vacuna.wav");
  }

  //Menú principal. Creación del menú, botones que redigirán a las distintas escenas (menú de créditos, ayuda, jugar, etc).
  create() {
    if (track == undefined) {
      track = this.sound.add("menumusic", {loop: true});
      track.play()
    }
    this.add.image(400, 300, "menu");
    this.add
      .image(400, 228, "bjugar")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("select"));
    this.add
      .image(400, 286, "btienda")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("store"));
    this.add
      .image(400, 347, "bopciones")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("options"));
    this.add
      .image(400, 408, "bcreditos")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("creditos"));
    this.add
      .image(710, 558, "bayuda")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("ayuda"));
    this.add
      .image(90, 558, "bsalir")
      .setInteractive()
      .on(
        "pointerdown",
        () => {track.pause(); (window.location.href = "http://www.google.com")}
      );
  }
}
