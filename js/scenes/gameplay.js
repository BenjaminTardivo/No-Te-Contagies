import Player from "../classes/player.js";
import Kid, { playKid, posKid, stopKid, velKid } from "../classes/kid.js";
import Collider from "../classes/collider.js";
import Ball from "../classes/ball.js";
import Paper from "../classes/paper.js";
import Bench from "../classes/bench.js";
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
    if (level == 1) {
      this.add.image(400, 300, "background");
      player = new Player({ scene: this, x: 400, y: 300, texture: "player" });
      if (music == true)  {
      lvlmsc = this.sound.add('lvl1msc', { loop: true });
      lvlmsc.play();
      }
    } else if (level == 2) {
      this.add.image(400, 300, "background2");
      player = new Player({ scene: this, x: 400, y: 150, texture: "player" });
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
      this.physics.add.collider(ball, trees);
      this.physics.add.collider(ball, font);
      this.physics.add.collider(player, trees);
      this.physics.add.collider(player, font);
      if (music == true) {
      lvlmsc = this.sound.add('lvl2msc', { loop: true });
      lvlmsc.play();
      }
    } else if (level == 3) {
        this.add.image(400, 300, "background3");
        player = new Player({ scene: this, x: 400, y: 222, texture: "player" });
        if (music == true) {
          lvlmsc = this.sound.add('lvl3msc', { loop: true });
          lvlmsc.play();
        }
        bench = [
          new Bench({scene: this, x: 175, y: 135, texture: "bench"}),
          new Bench({scene: this, x: 400, y: 135, texture: "bench2"}),
          new Bench({scene: this, x: 627, y: 135, texture: "bench3"}),
          new Bench({scene: this, x: 175, y: 310, texture: "bench4"}),
          new Bench({scene: this, x: 400, y: 310, texture: "bench5"}),
          new Bench({scene: this, x: 627, y: 310, texture: "bench6"}),
          new Bench({scene: this, x: 175, y: 490, texture: "bench7"}),
          new Bench({scene: this, x: 400, y: 490, texture: "bench8"}),
          new Bench({scene: this, x: 627, y: 490, texture: "bench9"})
        ]

        //seteamos las animaciones de los niños infectados.
        this.anims.create({
          key: "upKid", //Definimos nombre a la animación.
          frames: this.anims.generateFrameNumbers("kid", { start: 0, end: 4 }), //definimos los frames que abarca.
          framerate: 10, //velocidad de frames/frames por segundo.
          repeat: -1, //cuantas veces se repite (0 = infinitamente).
        });
        this.anims.create({
          key: "downKid",
          frames: this.anims.generateFrameNumbers("kid", { start: 5, end: 9 }),
          framerate: 10,
          repeat: -1,
        });
        this.anims.create({
          key: "rightKid",
          frames: this.anims.generateFrameNumbers("kid", {
            start: 10,
            end: 15,
          }),
          framerate: 10,
          repeat: -1,
        });
        this.anims.create({
          key: "leftKid",
          frames: this.anims.generateFrameNumbers("kid", {
            start: 16,
            end: 21,
          }),
          framerate: 10,
          repeat: -1,
        });
        this.anims.create({
          key: "stopKid",
          frames: [{ key: "kid", frame: 5 }],
          framerate: 10,
          repeat: 0,
        });
        this.anims.create({
          key: "upKid2", //Definimos nombre a la animación.
          frames: this.anims.generateFrameNumbers("kid2", { start: 0, end: 4 }), //definimos los frames que abarca.
          framerate: 10, //velocidad de frames/frames por segundo.
          repeat: -1, //cuantas veces se repite (0 = infinitamente).
        });
        this.anims.create({
          key: "downKid2",
          frames: this.anims.generateFrameNumbers("kid2", { start: 5, end: 9 }),
          framerate: 10,
          repeat: -1,
        });
        this.anims.create({
          key: "rightKid2",
          frames: this.anims.generateFrameNumbers("kid2", {
            start: 10,
            end: 15,
          }),
          framerate: 10,
          repeat: -1,
        });
        this.anims.create({
          key: "leftKid2",
          frames: this.anims.generateFrameNumbers("kid2", {
            start: 16,
            end: 21,
          }),
          framerate: 10,
          repeat: -1,
        });
        this.anims.create({
          key: "stopKid2",
          frames: [{ key: "kid2", frame: 5 }],
          framerate: 10,
          repeat: 0,
        });
        this.anims.create({
          key: "upKid3", //Definimos nombre a la animación.
          frames: this.anims.generateFrameNumbers("kid3", { start: 0, end: 4 }), //definimos los frames que abarca.
          framerate: 10, //velocidad de frames/frames por segundo.
          repeat: -1, //cuantas veces se repite (0 = infinitamente).
        });
        this.anims.create({
          key: "downKid3",
          frames: this.anims.generateFrameNumbers("kid3", { start: 5, end: 9 }),
          framerate: 10,
          repeat: -1,
        });
        this.anims.create({
          key: "rightKid3",
          frames: this.anims.generateFrameNumbers("kid3", {
            start: 10,
            end: 15,
          }),
          framerate: 10,
          repeat: -1,
        });
        this.anims.create({
          key: "leftKid3",
          frames: this.anims.generateFrameNumbers("kid3", {
            start: 16,
            end: 21,
          }),
          framerate: 10,
          repeat: -1,
        });
        this.anims.create({
          key: "stopKid3",
          frames: [{ key: "kid3", frame: 5 }],
          framerate: 10,
          repeat: 0,
        });
        this.anims.create({
          key: "playPaper",
          frames: this.anims.generateFrameNumbers("paper", {
            start: 0,
            end: 7,
          }),
          framerate: 10,
          repeat: -1,
        });
        this.anims.create({
          key: "stopPaper",
          frames: [{ key: "paper", frame: 0 }],
          framerate: 10,
          repeat: 0,
        });
        paper = new Paper({ scene: this, x: 280, y: 350, texture: "paper" });
        this.physics.add.collider(player, paper, () => {paper.anims.play("playPaper")}, null, this);
        this.physics.add.collider(player, bench);
        this.physics.add.collider(paper, bench);
    }

    bpause = this.add
      .image(770, 30, "bpause")
      .setInteractive()
      .on("pointerdown", () => {
        this.pause()
        if (sfx == true) {
          bnextsfx.play();
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
          lvlmsc.pause();
          music = false;
        } else if (music == false) {
          bmsc.setTexture("bmscon");
          bmscText = "bmscon";
          bbacksfx.play();
          if (level == 1) {
            lvlmsc = this.sound.add('lvl1msc', { loop: true });
            lvlmsc.play();
          } else if (level == 2) {
            lvlmsc = this.sound.add('lvl2msc', { loop: true });
            lvlmsc.play();
          } else if (level == 3) {
            lvlmsc = this.sound.add('lvl3msc', { loop: true });
            lvlmsc.play();
          }
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
      key: "victory",
      frames: this.anims.generateFrameNumbers("player3", {
        start: 0,
        end: 3,
      }),
      frameRate: 6,
      repeat: -1,
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
      (cursors = this.input.keyboard.createCursorKeys(), this);
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
    delay = 750;
    timedEvent = this.time.addEvent({
      delay: delay,
      callback: this.objects,
      callbackScope: this,
      loop: true,
    });

    //creacion la barra de inmunidad
    progressBar = this.add.graphics();
    bar = this.add.image(165, 25, 'bar');


    progressBar.clear();
    progressBar.fillStyle(0xffff1, 1);
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
    if (level == 1) {
      pattern = Phaser.Math.FloatBetween(0, 0.7);
    } else if (level == 2) {
      pattern = Phaser.Math.FloatBetween(0, 1.05);
    } else {
      if (level == 3 && countKid == 0) {
        pattern = Phaser.Math.FloatBetween(0, 2.45);
      } else {
        pattern = Phaser.Math.FloatBetween(0, 1.4);
      }
    }
    pattern2 = Phaser.Math.Between(0, 3);
    if (pattern2 == 0) {
      pattern3 = Phaser.Math.Between(20, 780);
      pattern4 = 0;
    } else if (pattern2 == 1) {
      pattern3 = Phaser.Math.Between(20, 780);
      pattern4 = 600;
    } else if (pattern2 == 2) {
      pattern3 = 0;
      pattern4 = Phaser.Math.Between(20, 580);
    } else if (pattern2 == 3) {
      pattern3 = 800;
      pattern4 = Phaser.Math.Between(20, 580);
    }
    if (pattern3 == 0 || pattern4 == 0) {
      velObj = 170;
    } else if (pattern3 == 800 || pattern4 == 600) {
      velObj = -170;
    }
    //Respawn de objetos.
      if (pattern < 0.1 && countvac == 0) {
        vaccine = new Vaccine({ scene: this, x: pattern3, y: pattern4 });
        countvac++;
        velVaccine();
      } else if (pattern >= 0 && pattern < 0.35) {
        virus = new Virus({ scene: this, x: pattern3, y: pattern4 });
        velVirus();
      } else if (pattern >= 0.35 && pattern < 0.7) {
        soap = new Soap({ scene: this, x: pattern3, y: pattern4 });
        velSoap();
      } else if (pattern > 0.7 && pattern < 0.8 && stopAnim == "stop" && countchins < 3 || countchins == undefined) {
        chinstrap = new Chinstrap({ scene: this, x: pattern3, y: pattern4 });
        velChinstrap();
      } else if (pattern >= 0.7 && pattern < 1.05) {
        mud = new Mud({ scene: this, x: pattern3, y: pattern4 });
        velMud();
      } else if (pattern >= 1.05 && pattern < 1.4) {
        alcohol = new Alcohol({ scene: this, x: pattern3, y: pattern4 });
        velAlcohol();
      } else if (pattern >= 1.4 && countKid == 0) {
        posKid();
        kid = new Kid({ scene: this, x: pattern3, y: pattern4, texture: whatKid });
        countKid += 1;
        velKid();
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
    this.physics.add.collider(collider, kid, this.kidErrase, null, this); //collider que ejecuta una función cuando un chico choca con un collider.
    if (level > 2) {
    this.physics.add.collider(player, kid, this.kidHit, null, this );
      this.physics.add.collider(bench, kid);
    }
  }

  update() {
    if (lives <= 0) {
      bpause.destroy();
      bmsc.destroy();
      bsfx.destroy();
      if (level !== 1) {
        countchins = 0;
      }
      if (music == true) {
        lvlmsc.stop();
      }
      if (iobject !== undefined) {
        iobject.destroy();
        timedEvent4.destroy();
      }
      lives = 3;
      score = 0;
      cursors = undefined;
      this.gameover();
    }
    if (score >= 200 && inf == false) {
      bpause.destroy();
      bmsc.destroy();
      bsfx.destroy();
      if (level !== 1) {
        countchins = 0;
      }
      if (music == true) {
        lvlmsc.stop();
      }
      if (iobject !== undefined) {
        iobject.destroy();
        timedEvent4.destroy();
      }
      if (levOver <= 2 && i !== 1) {
        levOver++;
      }
      lives = 3;
      score = 0;
      cursors = undefined;
      this.lvlfinish();
    }
    if (score >= 200 && inf == true) {
      progressBar.destroy();
      bar.destroy();
      progressBar = this.add.graphics();
      bar = this.add.image(165, 25, 'bar')
      progressBar.clear();
      progressBar.fillStyle(0xffff1, 1);
      score = 0;
      delay = delay - 50;
      countvac2++;
      timedEvent.destroy();
      timedEvent = this.time.addEvent({
        delay: delay,
        callback: this.objects,
        callbackScope: this,
        loop: true,
      });
    }
  }

  collectSoap(player, soap) {
    this.delScore2();
    posX = soap.x
    posY = soap.y
    iobject = this.add.image(posX, posY, "psoap");
    this.delScore();
    soap.destroy();
    progressBar.fillRect(56.5, 16, (score += 10), 19);
    if (sfx == true) {
      track = this.sound.add("goodsfx", { loop: false });
      track.play();
    }
  }

  collectAlcohol(player, alcohol) {
    this.delScore2();
    posX = alcohol.x
    posY = alcohol.y
    iobject = this.add.image(posX, posY, "palcohol");
    this.delScore();
    alcohol.destroy();
    progressBar.fillRect(56.5, 16, (score += 7.5), 19);
    if (sfx == true) {
      track = this.sound.add("goodsfx", { loop: false });
      track.play();
    }
  }

  mudHit(player, mud) {
    posX = mud.x
    posY = mud.y
    mud.destroy();
    if (sfx == true) {
      badsfx = this.sound.add('badsfx', { loop: false });
      badsfx.play();
    }
    if (stopAnim == "stop2") {
      this.endChinstrap();
    } else {
      lives--;
      this.loseLive();
      this.delScore2();
      iobject = this.add.image(posX, posY, "pbad");
      this.delScore();
    }
  }

  virusHit(player, virus) {
    posX = virus.x
    posY = virus.y
    virus.destroy();
    if (sfx == true) {
      badsfx = this.sound.add('badsfx', { loop: false });
      badsfx.play();
    }
    if (stopAnim == "stop2") {
      this.endChinstrap();
    } else {
      lives--;
      this.loseLive();
      this.delScore2();
      iobject = this.add.image(posX, posY, "pbad");
      this.delScore();
    }
  }

  kidHit(player, kid) {
    posX = kid.x
    posY = kid.y
    kid.destroy();
    countKid = 0;
    if (sfx == true) {
      badsfx = this.sound.add('badsfx', { loop: false });
      badsfx.play();
    }
    if (stopAnim == "stop2") {
      this.endChinstrap();
    } else {
      lives--;
      this.loseLive();
      this.delScore2();
      iobject = this.add.image(posX, posY, "pbad");
      this.delScore();
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
    this.delScore2();
    posX = vaccine.x
    posY = vaccine.y
    iobject = this.add.image(posX, posY, "pvaccine");
    this.delScore();
    vaccine.destroy();
    progressBar.fillRect(56.5, 16, (score += 40), 19);
    if (sfx == true) {
      track = this.sound.add("vaccinesfx", { loop: false });
      track.play();
    }
    velX = -300;
    velX2 = 300;
    velY = 300;
    velY2 = -300;
    vel2X = -250;
    vel2X2 = 250;
    vel2Y = 250;
    vel2Y2 = -250;
    countvac++;
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
    this.delScore2();
    posX = chinstrap.x
    posY = chinstrap.y
    iobject = this.add.image(posX, posY, "pchinstrap");
    this.delScore();
    chinstrap.destroy();
    player.setTexture("player2");
    countchins++;
    upAnim = "up2";
    downAnim = "down2";
    rightAnim = "right2";
    leftAnim = "left2";
    stopAnim = "stop2";
    progressBar.fillRect(56.5, 16, (score += 5), 19);
    if (sfx == true) {
      track = this.sound.add("goodsfx", { loop: false });
      track.play();
    }
    timedEvent3 = this.time.addEvent({
      delay: 5000,
      callback: this.endChinstrap,
      callbackScope: this,
      loop: false,
    });
  }

  endChinstrap() {
    timedEvent3.destroy();
    player.setTexture("player");
    upAnim = "up";
    downAnim = "down";
    rightAnim = "right";
    leftAnim = "left";
    stopAnim = "stop";
    chinstrap = undefined;
  }

  delScore() {
    timedEvent4 = this.time.addEvent({
      delay: 2000,
      callback: () => {
        if (iobject !== undefined) {
          iobject.destroy();
          iobject = undefined;
        }
      },
      callbackScope: this,
      loop: false,
    });
  }

  delScore2() {
    if (iobject !== undefined) {
      iobject.destroy();
      iobject = undefined;
    }
    if (timedEvent4 !== undefined) {
      timedEvent4.destroy();
    }
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
    countvac--;
  }
  chinstrapErrase(collider, chinstrap) {
    chinstrap.destroy();
    chinstrap = undefined;
  }
  kidErrase(collider, kid) {
    kid.destroy();
    countKid = 0;
  }

  //Se ejecuta esta función al perderse todas las vidas.
  gameover() {
    this.physics.pause();
    timedEvent.paused = true;
    player.anims.play(stopAnim);

    if( music == true ){
      lvlfmsc = this.sound.add('lvllostmsc')
      lvlfmsc.play()
      lvlfmsc = undefined;
    }

    if (level == 2) {
      ball.anims.play("stopBall", true);
    } else if (level !== 1 && stopAnim == "stop2") {
      timedEvent3.destroy();
      upAnim = "up";
      downAnim = "down";
      rightAnim = "right";
      leftAnim = "left";
    }
    if (level == 3) {
      paper.anims.play("stopPaper", true);
    }
    if (level == 3 && countKid !== 0) {
      stopKid();
      countKid = 0;
    }

    this.add.image(400, 300, lost);

    if (inf == true) {
      this.add.text(353, 250, "Puntaje: " + countvac2, {
        fill: "#e5d6ff",
        font: "20px Franklin Gothic Demi",
      });
    }

    this.add
      .image(325, 315, bretry)
      .setInteractive()
      .on("pointerdown", () => {
        this.restart()
        if (sfx == true) {
          bnextsfx.play();
        }
        if (lvlfmsc !== undefined) {
          if (lvlfmsc.isPlaying = true) {
            lvlfmsc.destroy();
            lvlfmsc = undefined;
          }
        }
      });

    this.add
      .image(475, 315, bmenu)
      .setInteractive()
      .on("pointerdown", () => {
        this.exit()
        if (music == true) {
          lvlmsc.stop();
        } 
        if (sfx == true) {
          bnextsfx.play();
        }
        if (lvlfmsc !== undefined) {
          if (lvlfmsc.isPlaying = true) {
            lvlfmsc.destroy();
            lvlfmsc = undefined;
          }
        }
      });
  }

  //Se ejecuta esta función al ganarse un nivel.
  lvlfinish() {
    progressBar.clear();
    progressBar.fillStyle(0xffff1, 1);
    progressBar.fillRect(56.5, 16, 200, 19);
    if (music == true){
      lvlsupmsc = this.sound.add('lvlsupmsc')
      lvlsupmsc.play();
    }
    this.add.image(400, 300, overcome);
    player.destroy()
    player = new Player({ scene: this, x: 380, y: 470, texture: "player" });
    this.physics.pause();
    timedEvent.paused = true;
    player.anims.play("victory").setScale(0.43);
    
    if (level == 2) {
      ball.anims.play("stopBall", true);
    } else if (level !== 1 && stopAnim == "stop2") {
      timedEvent3.destroy();
      upAnim = "up";
      downAnim = "down";
      rightAnim = "right";
      leftAnim = "left";
    }
    if (level == 3) {
      paper.anims.play("stopPaper", true);
    }
    if (level == 3 && countKid !== 0) {
      stopKid();
      countKid = 0;
    }

    if (level < 3) {
      this.add
        .image(400, 315, bcontinue)
        .setScale(1.2)
        .setInteractive()
        .on("pointerdown", () => {
          this.continue()
          if (sfx == true) {
            bnextsfx.play();
          }  
          if (lvlsupmsc !== undefined) {
            if (lvlsupmsc.isPlaying = true) {
              lvlsupmsc.destroy();
              lvlsupmsc = undefined;
            }
          }
        });
      this.add
        .image(290, 390, bretry)
        .setInteractive()
        .on("pointerdown", () => {
          this.restart()
          if (sfx == true) {
            bnextsfx.play();
          }
          if (lvlsupmsc !== undefined) {
            if (lvlsupmsc.isPlaying = true) {
              lvlsupmsc.destroy();
              lvlsupmsc = undefined;
            }
          }
        });
  
      this.add
        .image(510, 390, bmenu)
        .setInteractive()
        .on("pointerdown", () => {
          this.exit()
          if (music == true) {
            lvlmsc.stop();
          } 
          if (sfx == true) {
            bbacksfx.play();
          }
          if (lvlsupmsc !== undefined) {
            if (lvlsupmsc.isPlaying = true) {
              lvlsupmsc.destroy();
              lvlsupmsc = undefined;
            }
          }
        });
    } else {
      this.add
        .image(325, 315, bretry)
        .setInteractive()
        .on("pointerdown", () => {
          this.restart()
          if (sfx == true) {
            bnextsfx.play();
          }
          if (lvlsupmsc !== undefined) {
            if (lvlsupmsc.isPlaying = true) {
              lvlsupmsc.destroy();
              lvlsupmsc = undefined;
            }
          }
        });
  
      this.add
        .image(475, 315, bmenu)
        .setInteractive()
        .on("pointerdown", () => {
          this.exit()
          if (music == true) {
            lvlmsc.stop();
          }
          if (sfx == true) {
            bbacksfx.play();
          }
          if (lvlsupmsc !== undefined) {
            if (lvlsupmsc.isPlaying = true) {
              lvlsupmsc.destroy();
              lvlsupmsc = undefined;
            }
          }
        });
    }
  }

  //Si se elige "reintentar nivel" se ejecuta esta función.
  continue() {
    if (level !== 1 && stopAnim == "stop2") {
      stopAnim = "stop";
    }
    if (level <= 2) {
      level++;
    }
    if (levOver <= 2 && i !== 0) {
      i = 0;
    }
    this.scene.start("gameplay");
  }

  restart() {
    timedEvent.paused = false;
    if (level !== 1 && stopAnim == "stop2") {
      stopAnim = "stop";
    }
    if (inf == true && countvac2 !== 0) {
      countvac2 = 0;
    }
    this.scene.start("gameplay");
  }

  //Si se elige "salir al menu principal" se ejeucta esta función.
  exit() {
    if (lives !== 3) {
      lives = 3;
    }
    if (score !== 0) {
      score = 0;
    }
    if (countKid !== 0) {
      countKid = 0;
    }
    timedEvent.paused = false;
    if (level !== 1 && stopAnim == "stop2") {
      upAnim = "up";
      downAnim = "down";
      rightAnim = "right";
      leftAnim = "left";
      stopAnim = "stop";
    }
    if (levOver < 3 && i == 0) {
      i = 1;
    }
    if (inf == true && countvac2 !== 0) {
      countvac2 = 0;
    }
    if (inf == true) {
      inf = false;
    }
    track = undefined;
    this.scene.start("main");
  }

  pause() {
    timedEvent.paused = true;
    bpause.destroy();
    this.physics.pause();
    cursors = undefined;
    player.anims.play(stopAnim);
    if (timedEvent4 !== undefined && iobject !== undefined) {
      iobject.destroy();
      timedEvent4.destroy();
    }
    if (level == 2) {
      ball.anims.play("stopBall", true);
    } else if (level == 3) {
      paper.anims.play("stopPaper", true);
    }
    if (level !== 1 && stopAnim == "stop2") {
      timedEvent3.paused = true;
    }
    if (level == 3 && countKid !== 0) {
      stopKid();
    }
    menu = this.add.image(400, 300, spause);

    button = this.add
      .image(400, 285, bresume)
      .setInteractive()
      .on("pointerdown", () => {
        this.outPause()
        if (sfx == true) {
          bnextsfx.play();
        }  
      });

    button2 = this.add
      .image(335, 355, bhelp2)
      .setInteractive()
      .on("pointerdown", () => {
        this.gameHelp()
        if (sfx == true) {
          bnextsfx.play();
        }  
      });

    button3 = this.add
      .image(465, 355, bmenu)
      .setInteractive()
      .on("pointerdown", () => {
        if (music == true) {
          lvlmsc.stop();
        }
        if (sfx == true) {
          bbacksfx.play();
        }
        this.exit()
      });
  }

  outPause() {
    menu.destroy();
    button.destroy();
    button2.destroy();
    button3.destroy();

    if (level == 2) {
      if (ball.body.velocity.x !== 0 || ball.body.velocity.y !== 0) {
        ball.anims.play("playBall", true);
      }
    }
    if (level == 3) {
      if (paper.body.velocity.x !== 0 || paper.body.velocity.y !== 0) {
        paper.anims.play("playPaper");
      }
    }
    if (level !== 1 && stopAnim == "stop2") {
      timedEvent3.paused = false;
    }
    if (level == 3 && countKid !== 0) {
      playKid();
    }
    this.physics.resume();
    cursors = this.input.keyboard.createCursorKeys()
    timedEvent.paused = false;
    bpause = this.add
      .image(770, 30, "bpause")
      .setInteractive()
      .on("pointerdown", () => {
        this.pause()
        if (sfx == true) {
          bnextsfx.play();
        }  
      });
  }

  gameHelp() {
    menu.destroy();
    button.destroy();
    button2.destroy();
    button3.destroy();
    menu = this.add
      .image(400, 300, shelp2)
      .setInteractive()
      .on(type, () => {
        if (iobject !== undefined) {
          iobject.destroy();
          iobject = undefined;
        }
      });

    //Implementamos los objetos que darán información al jugador al momento de pasar el mouse por ellos.
    fsoap = this.add
      .image(163, 330, "fsoap")
      .setInteractive()
      .on(type, () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(163, 330, isoap);
      });

    fvaccine = this.add
      .image(298, 328, "fvaccine")
      .setInteractive()
      .on(type, () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(298, 328, ivaccine);
      });

    falcohol = this.add
      .image(168, 413, "falcohol")
      .setInteractive()
      .on(type, () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(168, 413, ialcohol);
      });

    fchinstrap = this.add
      .image(295, 416, "fchinstrap")
      .setInteractive()
      .on(type, () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(295, 416, ichinstrap);
      });

    fmud = this.add
      .image(506, 328, "fmud")
      .setInteractive()
      .on(type, () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(506, 328, imud);
      });

    fvirus = this.add
      .image(648, 328, "fvirus")
      .setInteractive()
      .on(type, () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(648, 328, ivirus);
      });

    fkid = this.add
      .image(574, 407, "fkid")
      .setInteractive()
      .on(type, () => {
        if (iobject !== undefined) {
          iobject.destroy();
        }
        iobject = this.add.image(574, 407, ikid);
      });

    //Creación de botones y seteo de funciones de los mismos.
    button = this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => {
        this.outHelp()
        if (sfx == true) {
          bbacksfx.play();
        }
        if (iobject !== undefined) {
          iobject.destroy();
        }
      });

    button2 = this.add
      .image(677, 514, bcontrols)
      .setInteractive()
      .on("pointerdown", () => {
        this.gameControls()
        if (sfx == true) {
          bnextsfx.play();
        }  
        if (iobject !== undefined) {
          iobject.destroy();
        }
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
    fkid.destroy();
    button.destroy();
    button2.destroy();
    button3.destroy();
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
    fkid.destroy();
    button.destroy();
    button2.destroy();
    button3.destroy();
    menu = this.add.image(400, 300, scontrols2);
    button = this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => {
        this.outControls()
        if (sfx == true) {
          bbacksfx.play();
        }
      });
  }

  outControls() {
    menu.destroy();
    button.destroy();
    this.pause();
  }
}
export default gameplay;
