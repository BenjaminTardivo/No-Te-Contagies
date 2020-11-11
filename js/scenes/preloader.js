//Definimos la clase (debe coincidir con el nombre de la escena, por ejemplo, scene1)
class preloader extends Phaser.Scene {
  //Le permitimos extender propiedades, para que se pueda comportar como una escena de phaser.
  constructor() {
    super("preloader"); //definimos un constructor, es decir, un nombre amigable para la escena, el cual usaremos para referenciarla dentro del código.
  }

  //Realizamos la precarga de assets (imágenes, spritesheets, etc) definiendo un nombre a cada uno, seguido de la ruta donde este se encuentra.
  preload() {
    this.graphics = this.add.graphics();
		this.newGraphics = this.add.graphics();
		var progressBar = new Phaser.Geom.Rectangle(200, 200, 400, 50);
		var progressBarFill = new Phaser.Geom.Rectangle(205, 205, 290, 40);

		this.graphics.fillStyle(0xffffff, 1);
		this.graphics.fillRectShape(progressBar);

		this.newGraphics.fillStyle(0x7054cd, 1);
		this.newGraphics.fillRectShape(progressBarFill);

		var loadingText = this.add.text(335,260,"Loading: ", { fontSize: '32px', fill: '#FFF' });
    
		for(var i =0;i<30;i++) {
    //carga de escenas.
    this.load.image("lenguage", "assets/images/undefined/menus/lenguage.png");
    this.load.image("menu", "assets/images/undefined/menus/menu.png");
    this.load.image("background", "assets/images/undefined/backgrounds/background.png");
    this.load.image("background2", "assets/images/undefined/backgrounds/background2.png");
    this.load.image("background3", "assets/images/undefined/backgrounds/background3.png");

    //carga de objetos.
    this.load.image("tree", "assets/images/undefined/objects/tree.png");
    this.load.image("tree2", "assets/images/undefined/objects/tree2.png");
    this.load.image("font", "assets/images/undefined/objects/font.png");
    this.load.spritesheet("player", "assets/images/undefined/objects/player.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 491,
      frameWidth: 93,
    });
    this.load.spritesheet("player2", "assets/images/undefined/objects/player2.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 491,
      frameWidth: 93,
    });
    this.load.spritesheet("player3", "assets/images/undefined/objects/player3.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 491,
      frameWidth: 130,
    });
    this.load.spritesheet("kid", "assets/images/undefined/objects/kid.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 491,
      frameWidth: 93,
    });
    this.load.spritesheet("kid2", "assets/images/undefined/objects/kid2.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 491,
      frameWidth: 93,
    });
    this.load.spritesheet("kid3", "assets/images/undefined/objects/kid3.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 491,
      frameWidth: 93,
    });
    this.load.spritesheet("ball", "assets/images/undefined/objects/ball.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 25,
      frameWidth: 25,
    });
    this.load.spritesheet("paper", "assets/images/undefined/objects/paper.png", {
      //Indicamos el alto y ancho (en píxeles) de cada frame que compone el spritesheet.
      frameHeight: 38,
      frameWidth: 39,
    });
    this.load.image("virus", "assets/images/undefined/objects/virus.png");
    this.load.image("collider", "assets/images/undefined/objects/collider.png");
    this.load.image("collider2", "assets/images/undefined/objects/collider2.png");
    this.load.image("mud", "assets/images/undefined/objects/mud.png");
    this.load.image("syringe", "assets/images/undefined/objects/syringe.png");
    this.load.image("soap", "assets/images/undefined/objects/soap.png");
    this.load.image("alcohol", "assets/images/undefined/objects/alcohol.png");
    this.load.image("chinstrap", "assets/images/undefined/objects/chinstrap.png");
    this.load.image("heart", "assets/images/undefined/objects/heart.png");
    this.load.image("falcohol", "assets/images/undefined/objects/falcohol.png");
    this.load.image("fchinstrap", "assets/images/undefined/objects/fchinstrap.png");
    this.load.image("fmud", "assets/images/undefined/objects/fmud.png");
    this.load.image("fsoap", "assets/images/undefined/objects/fsoap.png");
    this.load.image("fvaccine", "assets/images/undefined/objects/fvaccine.png");
    this.load.image("fvirus", "assets/images/undefined/objects/fvirus.png");
    this.load.image("fkid", "assets/images/undefined/objects/fkid.png");
    this.load.image("pbad", "assets/images/undefined/objects/pbad.png");
    this.load.image("palcohol", "assets/images/undefined/objects/palcohol.png");
    this.load.image("psoap", "assets/images/undefined/objects/psoap.png");
    this.load.image("pchinstrap", "assets/images/undefined/objects/pchinstrap.png");
    this.load.image("pvaccine", "assets/images/undefined/objects/pvaccine.png");
    this.load.image("bench", "assets/images/undefined/objects/bench.png");
    this.load.image("bench2", "assets/images/undefined/objects/bench2.png");
    this.load.image("bench3", "assets/images/undefined/objects/bench3.png");
    this.load.image("bench4", "assets/images/undefined/objects/bench4.png");
    this.load.image("bench5", "assets/images/undefined/objects/bench5.png");
    this.load.image("bench6", "assets/images/undefined/objects/bench6.png");
    this.load.image("bench7", "assets/images/undefined/objects/bench7.png");
    this.load.image("bench8", "assets/images/undefined/objects/bench8.png");
    this.load.image("bench9", "assets/images/undefined/objects/bench9.png");
    this.load.image('bar', 'assets/images/undefined/objects/bar.png');

    //carga de botones.
    this.load.image("bpause", "assets/images/undefined/buttons/bpause.png");
    this.load.image("blevel1", "assets/images/undefined/buttons/blev1.png");
    this.load.image("blevel2", "assets/images/undefined/buttons/blev2.png");
    this.load.image("blevel3", "assets/images/undefined/buttons/blev3.png");
    this.load.image("besc1", "assets/images/undefined/buttons/besc1.png");
    this.load.image("besc2", "assets/images/undefined/buttons/besc2.png");
    this.load.image("besc3", "assets/images/undefined/buttons/besc3.png");
    this.load.image("blocked", "assets/images/undefined/buttons/blocked.png");
    this.load.image("binflocked", "assets/images/undefined/buttons/binflocked.png");
    this.load.image("bspanish", "assets/images/undefined/buttons/bspanish.png");
    this.load.image("benglish", "assets/images/undefined/buttons/benglish.png");
    this.load.image("bportuguese", "assets/images/undefined/buttons/bportuguese.png");
    this.load.image("b1", "assets/images/undefined/buttons/b1.png");
    this.load.image("b2", "assets/images/undefined/buttons/b2.png");
    this.load.image("b3", "assets/images/undefined/buttons/b3.png");
    this.load.image("b4", "assets/images/undefined/buttons/b4.png");
    this.load.image("b5", "assets/images/undefined/buttons/b5.png");
    this.load.image("b6", "assets/images/undefined/buttons/b6.png");
    this.load.image("b7", "assets/images/undefined/buttons/b7.png");
    this.load.image("b8", "assets/images/undefined/buttons/b8.png");
    this.load.image("bfscreen", "assets/images/undefined/buttons/bfscreen.png");
    this.load.image("bmscon", "assets/images/undefined/buttons/bmscon.png");
    this.load.image("bmscoff", "assets/images/undefined/buttons/bmscoff.png");
    this.load.image("bsfxon", "assets/images/undefined/buttons/bsfxon.png");
    this.load.image("bsfxoff", "assets/images/undefined/buttons/bsfxoff.png");
    this.load.image("bback", "assets/images/undefined/buttons/bback.png");
    this.load.image("binf", "assets/images/undefined/buttons/binf.png");

    //carga de escenas en español.
    this.load.image("help-es", "assets/images/spanish/menus/help.png");
    this.load.image("help2-es", "assets/images/spanish/menus/help2.png");
    this.load.image("selector-es", "assets/images/spanish/menus/selector.png");
    this.load.image("selector2-es", "assets/images/spanish/menus/selector2.png");
    this.load.image("controls-es", "assets/images/spanish/menus/controls.png");
    this.load.image("controls2-es", "assets/images/spanish/menus/controls2.png");
    this.load.image("overcome-es", "assets/images/spanish/menus/overcome.png");
    this.load.image("lost-es", "assets/images/spanish/menus/lost.png");
    this.load.image("credits-es", "assets/images/spanish/menus/credits.png");
    this.load.image("pause-es", "assets/images/spanish/menus/pause.png");

    //carga de botones en español.
    this.load.image("bplay-es", "assets/images/spanish/buttons/bplay.png");
    this.load.image("bcredits-es", "assets/images/spanish/buttons/bcredits.png");
    this.load.image("bcontinue-es", "assets/images/spanish/buttons/bcontinue.png");
    this.load.image("bhelp-es", "assets/images/spanish/buttons/bhelp.png");
    this.load.image("bhelp2-es", "assets/images/spanish/buttons/bhelp2.png");
    this.load.image("bresume-es", "assets/images/spanish/buttons/bresume.png");
    this.load.image("bcontrols-es", "assets/images/spanish/buttons/bcontrols.png");
    this.load.image("bretry-es", "assets/images/spanish/buttons/bretry.png");
    this.load.image("bexit-es", "assets/images/spanish/buttons/bexit.png");
    this.load.image("bmenu-es", "assets/images/spanish/buttons/bmenu.png");
    this.load.image("bhowtoplay-es", "assets/images/spanish/buttons/bhowtoplay.png");
    this.load.image("ialcohol-es", "assets/images/spanish/buttons/ialcohol.png");
    this.load.image("ichinstrap-es", "assets/images/spanish/buttons/ichinstrap.png");
    this.load.image("imud-es", "assets/images/spanish/buttons/imud.png");
    this.load.image("isoap-es", "assets/images/spanish/buttons/isoap.png");
    this.load.image("ivaccine-es", "assets/images/spanish/buttons/ivaccine.png");
    this.load.image("ivirus-es", "assets/images/spanish/buttons/ivirus.png");
    this.load.image("ikid-es", "assets/images/spanish/buttons/ikid.png");
    this.load.image("iinf-es", "assets/images/spanish/buttons/iinf.png");

    //carga de escenas en inglés.
    this.load.image('help-en', 'assets/images/english/menus/help.png');
    this.load.image('controls-en', 'assets/images/english/menus/controls.png');
    this.load.image('overcome-en', 'assets/images/english/menus/overcome.png');
    this.load.image('pause-en', 'assets/images/english/menus/pause.png');
    this.load.image('lost-en', 'assets/images/english/menus/lost.png');
    this.load.image('credits-en', 'assets/images/english/menus/credits.png');
    this.load.image('help2-en', 'assets/images/english/menus/help2.png');
    this.load.image('controls2-en', 'assets/images/english/menus/controls2.png');
    this.load.image('selector-en', 'assets/images/english/menus/selector.png');
    this.load.image('selector2-en', 'assets/images/english/menus/selector2.png');

    //carga de botones en ingles.
    this.load.image('ialcohol-en', 'assets/images/english/buttons/ialcohol.png');
    this.load.image('ichinstrap-en', 'assets/images/english/buttons/ichinstrap.png');
    this.load.image('imud-en', 'assets/images/english/buttons/imud.png');
    this.load.image('ikid-en', 'assets/images/english/buttons/ikid.png');
    this.load.image('isoap-en', 'assets/images/english/buttons/isoap.png');
    this.load.image('ivaccine-en', 'assets/images/english/buttons/ivaccine.png');
    this.load.image('ivirus-en', 'assets/images/english/buttons/ivirus.png');
    this.load.image('bcontrols-en', 'assets/images/english/buttons/bcontrols.png');
    this.load.image('bhelp-en', 'assets/images/english/buttons/bhelp.png');
    this.load.image('bhelp2-en', 'assets/images/english/buttons/bhelp2.png')
    this.load.image('bhowtoplay-en', 'assets/images/english/buttons/bhowtoplay.png');
    this.load.image('bmenu-en', 'assets/images/english/buttons/bmenu.png');
    this.load.image('bcontinue-en', 'assets/images/english/buttons/bcontinue.png');
    this.load.image('bresume-en', 'assets/images/english/buttons/bresume.png');
    this.load.image('bretry-en', 'assets/images/english/buttons/bretry.png');
    this.load.image('bcredits-en', 'assets/images/english/buttons/bcredits.png');
    this.load.image('bexit-en', 'assets/images/english/buttons/bexit.png');
    this.load.image('bplay-en', 'assets/images/english/buttons/bplay.png');
    this.load.image('iinf-en', 'assets/images/english/buttons/iinf.png');

    //carga de assets en portugues
    this.load.image('help-pt', 'assets/images/portuguese/menus/help.png');
    this.load.image('controls-pt', 'assets/images/portuguese/menus/controls.png');
    this.load.image('overcome-pt', 'assets/images/portuguese/menus/overcome.png');
    this.load.image('lost-pt', 'assets/images/portuguese/menus/lost.png');
    this.load.image('credits-pt', 'assets/images/portuguese/menus/credits.png');
    this.load.image('help2-pt', 'assets/images/portuguese/menus/help2.png');
    this.load.image('controls2-pt', 'assets/images/portuguese/menus/controls2.png');
    this.load.image('selector-pt', 'assets/images/portuguese/menus/selector.png');
    this.load.image('selector2-pt', 'assets/images/portuguese/menus/selector2.png');

    //botones en portugues
    this.load.image('ialcohol-pt', 'assets/images/portuguese/buttons/ialcohol.png');
    this.load.image('ichinstrap-pt', 'assets/images/portuguese/buttons/ichinstrap.png');
    this.load.image('imud-pt', 'assets/images/portuguese/buttons/imud.png');
    this.load.image('ikid-pt', 'assets/images/portuguese/buttons/ikid.png');
    this.load.image('isoap-pt', 'assets/images/portuguese/buttons/isoap.png');
    this.load.image('ivaccine-pt', 'assets/images/portuguese/buttons/ivaccine.png');
    this.load.image('ivirus-pt', 'assets/images/portuguese/buttons/ivirus.png');
    this.load.image('bhelp2-pt', 'assets/images/portuguese/buttons/bhelp2.png');
    this.load.image('bhelp-pt', 'assets/images/portuguese/buttons/bhelp.png');
    this.load.image('bhowtoplay-pt', 'assets/images/portuguese/buttons/bhowtoplay.png');
    this.load.image('bmenu-pt', 'assets/images/portuguese/buttons/bmenu.png');
    this.load.image('bcontinue-pt', 'assets/images/portuguese/buttons/bcontinue.png');
    this.load.image('bresume-pt', 'assets/images/portuguese/buttons/bresume.png');
    this.load.image('bretry-pt', 'assets/images/portuguese/buttons/bretry.png');
    this.load.image('bcredits-pt', 'assets/images/portuguese/buttons/bcredits.png');
    this.load.image('bexit-pt', 'assets/images/portuguese/buttons/bexit.png');
    this.load.image('bplay-pt', 'assets/images/portuguese/buttons/bplay.png');
    this.load.image('iinf-pt', 'assets/images/portuguese/buttons/iinf.png');

    //carga de audio.
    this.load.audio("mainmsc", "assets/music/main.mp3");
    this.load.audio("lvl1msc", "assets/music/level1.mp3");
    this.load.audio("lvl2msc", "assets/music/level2.mp3");
    this.load.audio("lvl3msc", "assets/music/level3.mp3");
    this.load.audio("goodsfx", "assets/sfx/good.mp3");
    this.load.audio("vaccinesfx", "assets/sfx/vaccine.mp3");
    this.load.audio("badsfx", "assets/sfx/bad.mp3");
    this.load.audio("bnextsfx", "assets/sfx/bnext.mp3");
    this.load.audio("bbacksfx", "assets/sfx/bback.mp3");
    this.load.audio('lvlsupmsc', 'assets/music/winmsc.mp3');
    this.load.audio('lvllostmsc', 'assets/music/losemsc.mp3');
    }
    
    //carga de video.
    this.load.video('logo', 'assets/video/logo.mp4', 'loadeddata', false, true);

		this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics,loadingText:loadingText});
    this.load.on('complete', this.complete);
	}

	updateBar(percentage) {
    this.newGraphics.clear();
    this.newGraphics.fillStyle(0x7054cd, 1);
    this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(205, 205, percentage*390, 40));
        
    percentage = percentage * 100;
    this.loadingText.setText(percentage.toFixed(2) + "%");
    console.log("P:" + percentage);
	}

	complete() {
		console.log("COMPLETE!");
  }

  create() {
    this.video=this.add.video(400, 300, 'logo').setScale(1.5)
    this.video.play();
    this.time.addEvent({
      delay: 6000,
      callback: () => this.scene.start("lenguage"),
      callbackScope: this,
      loop: false,
    });  
  }
}

export default preloader;