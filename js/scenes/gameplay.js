import Player from "../classes/player.js";
import Ball from "../classes/ball.js";
import Collider from "../classes/collider.js";
import Mud from "../classes/mud.js";
import {velMud} from "../classes/mud.js";
import Virus from "../classes/virus.js";
import { velVirus } from "../classes/virus.js";
import Soap from "../classes/soap.js";
import { velSoap } from "../classes/soap.js";
import Alcohol from "../classes/alcohol.js";
import {velAlcohol} from "../classes/alcohol.js";
import Chinstrap from "../classes/chinstrap.js";
import {velChinstrap} from "../classes/chinstrap.js";
import Vaccine from "../classes/vaccine.js";
import { velVaccine } from "../classes/vaccine.js";

//Definimos la clase (debe coincidir con el nombre de la escena, por ejemplo, scene1)
class gameplay extends Phaser.Scene {
  //Le permitimos extender propiedades, para que se pueda comportar como una escena de phaser.
  constructor() {
    super("gameplay"); //definimos un constructor, es decir, un nombre amigable para la escena, el cual usaremos para referenciarla dentro del código.
  }

  create() {
    //Creación de: background, personaje y pelota (si es necesario).
    //WorLmsc = this.sound.add('winlvlmsc', { loop: false })
    baddiessfx = this.sound.add('badhit');
    if (level == 1) {
      this.add.image(400, 300, "background");
      player = new Player({ scene: this, x: 400, y: 300, texture: "player" });
      this.anims.create({
        key: "playBall",
        frames: this.anims.generateFrameNumbers("ball", {
          start: 0,
          end: 5,
        }),
        framerate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: "stopBall",
        frames: [{ key: "ball", frame: 2 }],
        framerate: 10,
        repeat: 0,
      });
      ball = new Ball({ scene: this, x: 280, y: 350, texture: "ball" });
      this.physics.add.collider(
        player,
        ball,
        () => {
          ball.anims.play("playBall", true);
        },
        null,
        this
      );
      lvlmusic = this.sound.add('lvl1msc', { loop: true });
      lvlmusic.play();
    } else if (level == 2) {
      this.add.image(400, 300, "background2");
      player = new Player({ scene: this, x: 400, y: 150, texture: "player" });
      lvlmusic = this.sound.add('lvl2msc', { loop: true });
      lvlmusic.play();
    }

    bpause = this.add
      .image(770, 30, "bpause")
      .setInteractive()
      .on("pointerdown", () => {
        this.pause()
        buttonsfx.play();
      });

    //Creamos las animaciones del personaje.
    this.anims.create({
      key: "up", //Definimos nombre a la animación.
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 4 }), //definimos los frames que abarca.
      framerate: 10, //velocidad de frames/frames por segundo.
      repeat: 0, //cuantas veces se repite (0 = infinitamente).
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", { start: 5, end: 9 }),
      framerate: 10,
      repeat: 0,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", {
        start: 10,
        end: 15,
      }),
      framerate: 10,
      repeat: 0,
    });
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", {
        start: 16,
        end: 21,
      }),
      framerate: 10,
      repeat: 0,
    });
    this.anims.create({
      key: "stop",
      frames: [{ key: "player", frame: 5 }],
      framerate: 10,
      repeat: 0,
    });

    if (level >= 2) {
      this.anims.create({
        key: "up2", //Definimos nombre a la animación.
        frames: this.anims.generateFrameNumbers("player2", {
          start: 0,
          end: 4,
        }), //definimos los frames que abarca.
        framerate: 10, //velocidad de frames/frames por segundo.
        repeat: 0, //cuantas veces se repite (0 = infinitamente).
      });
      this.anims.create({
        key: "down2",
        frames: this.anims.generateFrameNumbers("player2", {
          start: 5,
          end: 9,
        }),
        framerate: 10,
        repeat: 0,
      });
      this.anims.create({
        key: "right2",
        frames: this.anims.generateFrameNumbers("player2", {
          start: 10,
          end: 15,
        }),
        framerate: 10,
        repeat: 0,
      });
      this.anims.create({
        key: "left2",
        frames: this.anims.generateFrameNumbers("player2", {
          start: 16,
          end: 21,
        }),
        framerate: 10,
        repeat: 0,
      });
      this.anims.create({
        key: "stop2",
        frames: [{ key: "player2", frame: 5 }],
        framerate: 10,
        repeat: 0,
      });
    }

    //creación de colliders que irán eliminando los objetos a medida que colisionen con ellos.
    collider = [
      new Collider({scene: this, x: -60, y: 300, texture: "collider"}),
      new Collider({scene: this, x: 860, y: 300, texture: "collider"}),
      new Collider({scene: this, x: 400, y: -60, texture: "collider2"}),
      new Collider({scene: this, x: 400, y: 660, texture: "collider2"})
    ]

    if (level == 2) {
      trees = this.physics.add.staticGroup();
      trees
        .create(650, 150, "tree")
        .setImmovable(true)
        .setSize(40, 40)
        .setOrigin(0.59, 0.4);
      trees
        .create(180, 420, "tree2")
        .setImmovable(true)
        .setSize(45, 45)
        .setOrigin(0.57, 0.43);
      font = this.physics.add.staticGroup();
      font.create(400, 300, "font").setImmovable(true).setSize(145, 140);
      this.physics.add.collider(player, trees);
      this.physics.add.collider(player, font);
    }

    //creacion de los controles.
    if (isMobile.any())
      (b1 = this.add
        .image(144, 309, "b1")
        .setInteractive()
        .on("pointerover", () => {
          (up = true), (b1.alpha -= 0.2);
        })
        .on("pointerout", () => {
          (up = false), (b1.alpha += 1);
        })),
        (b2 = this.add
          .image(137, 491, "b5")
          .setInteractive()
          .on("pointerover", () => {
            (down = true), (b2.alpha -= 0.2);
          })
          .on("pointerout", () => {
            (down = false), (b2.alpha += 1);
          })),
        (b3 = this.add
          .image(48, 396, "b7")
          .setInteractive()
          .on("pointerover", () => {
            (left = true), (b3.alpha -= 0.3);
          })
          .on("pointerout", () => {
            (left = false), (b3.alpha += 1);
          })),
        (b4 = this.add
          .image(231, 405, "b3")
          .setInteractive()
          .on("pointerover", () => {
            (right = true), (b4.alpha -= 0.3);
          })
          .on("pointerout", () => {
            (right = false), (b4.alpha += 1);
          })),
        (b5 = this.add
          .image(69, 326, "b8")
          .setInteractive()
          .on("pointerover", () => {
            (upLeft = true), (b5.alpha -= 0.3);
          })
          .on("pointerout", () => {
            (upLeft = false), (b5.alpha += 1);
          })),
        (b6 = this.add
          .image(215, 329, "b2")
          .setInteractive()
          .on("pointerover", () => {
            (upRight = true), (b6.alpha -= 0.3);
          })
          .on("pointerout", () => {
            (upRight = false), (b6.alpha += 1);
          })),
        (b7 = this.add
          .image(65, 472, "b6")
          .setInteractive()
          .on("pointerover", () => {
            (downLeft = true), (b7.alpha -= 0.3);
          })
          .on("pointerout", () => {
            (downLeft = false), (b7.alpha += 1);
          })),
        (b8 = this.add
          .image(212, 474, "b4")
          .setInteractive()
          .on("pointerover", () => {
            (downRight = true), (b8.alpha -= 0.3);
          })
          .on("pointerout", () => {
            (downRight = false), (b8.alpha += 1);
          }));
    else {
      (cursors = this.input.keyboard.createCursorKeys()),
        (FKey = this.input.keyboard.addKey("F"));
      FKey.on(
        "down",
        () => {
          if (this.scale.isFullscreen) {
            this.scale.stopFullscreen();
          } else {
            this.scale.startFullscreen();
          }
        },
        this
      );
    }

    //seteo de velocidad de movimiento del personaje y contador de respawn de vacunas.
    countvac = 0;
    velX = -220;
    velX2 = 220;
    velY = 220;
    velY2 = -220;
    vel2X = -170;
    vel2X2 = 170;
    vel2Y = 170;
    vel2Y2 = -170;

    //creacion el evento para la generacion de objetos.
    timedEvent = this.time.addEvent({
      delay: 750,
      callback: this.objects,
      callbackScope: this,
      loop: true,
    });

    //creacion la barra de inmunidad
    progressBox = this.add.graphics();
    progressBar = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(16, 16, 206, 25);

    progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    //creacion de los corazones
    hearts = this.add.group({
      key: "heart",
      repeat: 2,
      setXY: {
        x: 36,
        y: 567,
        stepX: 45,
      },
      setScale: {
        x: 0.06,
        y: 0.06,
      },
    });
  }

  objects() {
    //Randomización del respawn de objetos.
    pattern = Phaser.Math.FloatBetween(0, 1);
    pattern2 = Phaser.Math.Between(0, 3);
    if (pattern2 == 0) {
      pattern3 = Phaser.Math.Between(1, 799);
      pattern4 = 0;
    } else if (pattern2 == 1) {
      pattern3 = Phaser.Math.Between(1, 799);
      pattern4 = 600;
    } else if (pattern2 == 2) {
      pattern3 = 0;
      pattern4 = Phaser.Math.Between(1, 599);
    } else if (pattern2 == 3) {
      pattern3 = 800;
      pattern4 = Phaser.Math.Between(1, 599);
    }
    if (pattern3 == 0 || pattern4 == 0) {
      velObj = 200;
    } else if (pattern3 == 800 || pattern4 == 600) {
      velObj = -200;
    }
    //Respawn de objetos.
    if (level == 1) {
      if (pattern < 0.1 && countvac == 0) {
        vaccine = new Vaccine({ scene: this, x: pattern3, y: pattern4 });
        velVaccine();
        countvac++;
      } else if (pattern >= 0.1 && pattern < 0.55) {
        soap = new Soap({ scene: this, x: pattern3, y: pattern4 });
        velSoap();
      } else if (pattern >= 0.55 && pattern < 1) {
        virus = new Virus({ scene: this, x: pattern3, y: pattern4 });
        velVirus();
      }
    } else if (level > 1) {
      if (pattern < 0.1 && countvac == 0) {
        vaccine = new Vaccine({ scene: this, x: pattern3, y: pattern4 });
        velVaccine();
        countvac++;
      } else if (pattern >= 0.1 && pattern < 0.2 && level !== 1 && stopAnim == "stop") {
        chinstrap = new Chinstrap({ scene: this, x: pattern3, y: pattern4 });
        velChinstrap();
      } else if (pattern >= 0.2 && pattern < 0.4) {
        virus = new Virus({ scene: this, x: pattern3, y: pattern4 });
        velVirus();
      } else if (pattern >= 0.4 && pattern < 0.6) {
        soap = new Soap({ scene: this, x: pattern3, y: pattern4 });
        velSoap();
      } else if (pattern >= 0.6 && pattern < 0.8 && level > 1) {
        mud = new Mud({ scene: this, x: pattern3, y: pattern4 });
        velMud();
      } else if (pattern >= 0.8 && pattern < 1 && level == 3) {
          alcohol = new Alcohol({ scene: this, x: pattern3, y: pattern4 });
          velAlcohol();
      }
    }

    //creacion de colliders.
    this.physics.add.overlap(player, mud, this.mudHit, null, this); //collider que ejecuta una función al agarrar un barro.
    this.physics.add.overlap(player, virus, this.virusHit, null, this); //collider que ejecuta una función al agarrar un virus.
    this.physics.add.overlap(player, soap, this.collectSoap, null, this); //collider que ejecuta una función al agarrar un jabón.
    this.physics.add.overlap(player, alcohol, this.collectAlcohol, null, this); //collider que ejecuta una función al agarrar alcohol.
    this.physics.add.overlap(player, chinstrap, this.collectChinstrap, null, this); //collider que ejecuta una función al agarrar una vacuna.
    this.physics.add.overlap(player, vaccine, this.vaccinated, null, this); //collider que ejecutan la función de boost de velocidad por 10s.
    this.physics.add.collider(collider, mud, this.mudErrase, null, this); //collider que ejecuta una función cuando un barro choca con un collider.
    this.physics.add.collider(collider, virus, this.virusErrase, null, this); //collider que ejecuta una función cuando un virus choca con un collider.
    this.physics.add.collider(collider, soap, this.soapErrase, null, this); //collider que ejecuta una función cuando un jabón choca con un collider.
    this.physics.add.collider(collider, alcohol, this.alcoholErrase, null, this); //collider que ejecuta una función cuando un alcohol choca con un collider.
    this.physics.add.collider(collider, vaccine, this.vaccineErrase, null, this); //collider que ejecuta una función cuando una vacuna choca con un collider.
    this.physics.add.collider(collider, chinstrap, this.chinstrapErrase, null, this); //collider que ejecuta una función cuando un barbijo choca con un collider.

  }

  update() {
    if (lives <= 0) {
      this.gameover();
    }
    if (score >= 200) {
      lvlmusic.stop();
      //WorLmsc.play();
      this.lvlfinish();
    }
  }

  collectSoap(player, soap) {
    soap.destroy();
    progressBar.fillRect(19, 19, (score += 10), 19);
    track = this.sound.add("goodiesfx", { loop: false });
    track.play();
  }

  collectAlcohol(player, alcohol) {
    alcohol.destroy();
    progressBar.fillRect(19, 19, (score += 7.5), 19);
    track = this.sound.add("goodiesfx", { loop: false });
    track.play();
  }

  mudHit(player, mud) {
    mud.destroy();
    if (stopAnim == "stop2") {
      this.endChinstrap();
      baddiessfx.play();
    } else {
      lives--;
      this.loseLive();
      baddiessfx.play();
    }
  }

  virusHit(player, virus) {
    virus.destroy();
    if (stopAnim == "stop2") {
      this.endChinstrap();
      baddiessfx.play();
    } else {
      lives--;
      this.loseLive();
      baddiessfx.play();
    }
  }

  loseLive() {
    if (lives > -1) {
      // Se quita un corazón cada vez que se choca con un objeto malo
      heartErrase = hearts.getChildren()[
        hearts.getChildren().length - 1
      ];

      if (heartErrase !== undefined) {
        heartErrase.destroy();
      }
    }
  }

  //función que se ejecuta al agarrar una vacuna.
  vaccinated(player, vaccine) {
    vaccine.destroy();
    progressBar.fillRect(19, 19, (score += 40), 19);
    track = this.sound.add("chinstrapfx", { loop: false });
    track.play();
    velX = -300;
    velX2 = 300;
    velY = 300;
    velY2 = -300;
    vel2X = -250;
    vel2X2 = 250;
    vel2Y = 250;
    vel2Y2 = -250;
    timedEvent2 = this.time.addEvent({
      delay: 10000,
      callback: this.endVaccine,
      callbackScope: this,
      loop: false,
    });
  }

  //función llamada por timedEvent2 (dentro de la función "vaccinated" la cual se encuentra arriba).
  endVaccine() {
    velX = -220;
    velX2 = 220;
    velY = 220;
    velY2 = -220;
    vel2X = -170;
    vel2X2 = 170;
    vel2Y = 170;
    vel2Y2 = -170;
    timedEvent2.remove(true);
  }

  collectChinstrap(player, chinstrap) {
    chinstrap.destroy();
    player.setTexture("player2");
    upAnim = "up2";
    downAnim = "down2";
    rightAnim = "right2";
    leftAnim = "left2";
    stopAnim = "stop2";
    progressBar.fillRect(19, 19, (score += 5), 19);
    track = this.sound.add("goodiesfx", { loop: false });
    track.play();
    timedEvent3 = this.time.addEvent({
      delay: 10000,
      callback: this.endChinstrap,
      callbackScope: this,
      loop: false,
    });
  }

  endChinstrap() {
    player.setTexture("player");
    upAnim = "up";
    downAnim = "down";
    rightAnim = "right";
    leftAnim = "left";
    stopAnim = "stop";
  }

  mudErrase(collider, mud) {
    mud.destroy();
  }
  virusErrase(collider, virus) {
    virus.destroy();
  }
  soapErrase(collider, soap) {
    soap.destroy();
  }
  alcoholErrase(collider, alcohol) {
    alcohol.destroy();
  }
  vaccineErrase(collider, vaccine) {
    vaccine.destroy();
  }
  chinstrapErrase(collider, chinstrap) {
    chinstrap.destroy();
  }

  //Se ejecuta esta función al perderse todas las vidas.
  gameover() {
    this.physics.pause();
    timedEvent.paused = true;
    player.anims.play(stopAnim);
    if (level == 1) {
      ball.anims.play("stopBall", true);
    } else if (level !== 1 && stopAnim == "stop2") {
      upAnim = "up";
      downAnim = "down";
      rightAnim = "right";
      leftAnim = "left";
    }

    this.add.image(400, 300, "lost");

    this.add
      .image(325, 315, "bretry")
      .setInteractive()
      .on("pointerdown", () => {
        this.restart()
        buttonsfx.play();
      });

    this.add
      .image(475, 315, "bmenu")
      .setInteractive()
      .on("pointerdown", () => {
        this.exit()
        lvlmusic.stop();
        buttonsfx.play();
      });
  }

  //Se ejecuta esta función al ganarse un nivel.
  lvlfinish() {
    //WorLmsc.play()
    progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    progressBar.fillRect(19, 19, 200, 19);
    this.physics.pause();
    timedEvent.paused = true;
    player.anims.play(stopAnim);
    if (level == 1) {
      ball.anims.play("stopBall", true);
    } else if (level !== 1 && stopAnim == "stop2") {
      upAnim = "up";
      downAnim = "down";
      rightAnim = "right";
      leftAnim = "left";
    }

    this.add.image(400, 300, "overcome");

    this.add
      .image(400, 315, "bcontinue")
      .setScale(1.2)
      .setInteractive()
      .on("pointerdown", () => {
        this.continue()
        buttonsfx.play();
      });

    this.add
      .image(290, 390, "bretry")
      .setInteractive()
      .on("pointerdown", () => {
        this.restart()
        buttonsfx.play();
      });

    this.add
      .image(510, 390, "bmenu")
      .setInteractive()
      .on("pointerdown", () => {
        this.exit()
        lvlmusic.stop()
        button2sfx.play();
      });
  }

  //Si se elige "reintentar nivel" se ejecuta esta función.
  continue() {
    lives = 3;
    score = 0;
    if (level == 1) {
      level++;
      levOver++;
    }
    if (level !== 1 && stopAnim == "stop2") {
      stopAnim = "stop";
    }
    this.scene.start("gameplay");
  }

  restart() {
    this.scene.start("gameplay");
    timedEvent.paused = false;
    if (level !== 1 && stopAnim == "stop2") {
      stopAnim = "stop";
    }
    lives = 3;
    score = 0;
  }

  //Si se elige "salir al menu principal" se ejeucta esta función.
  exit() {
    this.scene.start("main");
    timedEvent.paused = false;
    lives = 3;
    score = 0;
    if (level !== 1 && stopAnim == "stop2") {
      upAnim = "up";
      downAnim = "down";
      rightAnim = "right";
      leftAnim = "left";
      stopAnim = "stop";
    }
    track = undefined;
  }

  pause() {
    timedEvent.paused = true;
    bpause.destroy();
    this.physics.pause();
    player.anims.play(stopAnim);
    if (level == 1) {
      ball.anims.play("stopBall", true);
    }
    menu = this.add.image(400, 300, "pause");

    button = this.add
      .image(335, 285, "bresume")
      .setInteractive()
      .on("pointerdown", () => {
        this.outPause()
        buttonsfx.play();
      });

    button2 = this.add
      .image(465, 285, "boptions2")
      .setInteractive()
      .on("pointerdown", () => {
        this.gameOptions()
        buttonsfx.play();
      });

    button3 = this.add
      .image(335, 355, "bhelp2")
      .setInteractive()
      .on("pointerdown", () => {
        this.gameHelp()
        buttonsfx.play();
      });

    button4 = this.add
      .image(465, 355, "bmenu")
      .setInteractive()
      .on("pointerdown", () => {
        button2sfx.play();
        this.exit()
        lvlmusic.stop()
      });
  }

  outPause() {
    menu.destroy();
    button.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();

    if (level == 1) {
      ball.anims.play("playBall", true);
    }
    this.physics.resume();
    timedEvent.paused = false;
    bpause = this.add
      .image(770, 30, "bpause")
      .setInteractive()
      .on("pointerdown", () => {
        this.pause()
        buttonsfx.play();
      });
  }

  gameOptions() {
    menu.destroy();
    button.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    menu = this.add.image(400, 300, "options2");
    button = this.add
      .image(259, 404, "bback")
      .setInteractive()
      .on("pointerdown", () => {
        this.outOptions()
        buttonsfx.play();
      });

    button2 = this.add.image(422, 284, "bar");
    button3 = this.add.image(422, 344, "bar");
  }

  outOptions() {
    menu.destroy();
    button.destroy();
    button2.destroy();
    button3.destroy();
    this.pause();
  }

  gameHelp() {
    menu.destroy();
    button.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    menu = this.add
      .image(400, 300, "help2")
      .setInteractive()
      .on(type, () => {
        iobject.destroy();
        i--;
      });

    //Implementamos los objetos que darán información al jugador al momento de pasar el mouse por ellos.
    fsoap = this.add
      .image(163, 330, "fsoap")
      .setInteractive()
      .on(type, () => {
        if (i == 0) {
          iobject = this.add.image(163, 330, "isoap");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(163, 330, "isoap");
        }
      });

    fvaccine = this.add
      .image(298, 328, "fvaccine")
      .setInteractive()
      .on(type, () => {
        if (i == 0) {
          iobject = this.add.image(298, 328, "ivaccine");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(298, 328, "ivaccine");
        }
      });

    falcohol = this.add
      .image(168, 413, "falcohol")
      .setInteractive()
      .on(type, () => {
        if (i == 0) {
          iobject = this.add.image(168, 413, "ialcohol");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(168, 413, "ialcohol");
        }
      });

    fchinstrap = this.add
      .image(295, 416, "fchinstrap")
      .setInteractive()
      .on(type, () => {
        if (i == 0) {
          iobject = this.add.image(295, 416, "ichinstrap");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(295, 416, "ichinstrap");
        }
      });

    fmud = this.add
      .image(506, 336, "fmud")
      .setInteractive()
      .on(type, () => {
        if (i == 0) {
          iobject = this.add.image(506, 336, "imud");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(506, 336, "imud");
        }
      });

    fvirus = this.add
      .image(648, 348, "fvirus")
      .setInteractive()
      .on(type, () => {
        if (i == 0) {
          iobject = this.add.image(648, 345, "ivirus");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(648, 345, "ivirus");
        }
      });

    fcloud = this.add
      .image(567, 426, "fcloud")
      .setInteractive()
      .on(type, () => {
        if (i == 0) {
          iobject = this.add.image(567, 426, "icloud");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(567, 426, "icloud");
        }
      });

    i = 0;

    //Creación de botones y seteo de funciones de los mismos.
    button = this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => {
        this.outHelp()
        buttonsfx.play();
      });

    button2 = this.add
      .image(677, 514, "bcontrols")
      .setInteractive()
      .on("pointerdown", () => {
        this.gameControls()
        buttonsfx.play();
      });
  }

  outHelp() {
    menu.destroy();
    fsoap.destroy();
    fvaccine.destroy();
    falcohol.destroy();
    fchinstrap.destroy();
    fmud.destroy();
    fvirus.destroy();
    fcloud.destroy();
    button.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    this.pause();
  }

  gameControls() {
    menu.destroy();
    fsoap.destroy();
    fvaccine.destroy();
    falcohol.destroy();
    fchinstrap.destroy();
    fmud.destroy();
    fvirus.destroy();
    fcloud.destroy();
    button.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    menu = this.add.image(400, 300, "controls2");
    button = this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => {
        this.outControls()
        buttonsfx.play();
      });
  }

  outControls() {
    menu.destroy();
    button.destroy();
    this.pause();
  }
}
export default gameplay;
