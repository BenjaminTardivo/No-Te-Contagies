//Definimos la clase (debe coincidir con el nombre de la escena, por ejemplo, scene1)
class scene3 extends Phaser.Scene {
  //Le permitimos extender propiedades, para que se pueda comportar como una escena de phaser.
  constructor() {
    super("game"); //definimos un constructor, es decir, un nombre amigable para la escena, el cual usaremos para referenciarla dentro del código.
  }

  create() {
    //Creación del background.
    if (nivel == 1) {
      this.add.image(400, 300, "background");
    } else if (nivel == 2) {
      this.add.image(400, 300, "background2");
    }

    //Creación del personaje como un sprite que posee físicas y animación.
    if (nivel == 1) {
      player = this.physics.add.sprite(400, 300, "jugador");
    } else if (nivel == 2) {
      player = this.physics.add.sprite(400, 150, "jugador");
    }

    player
      .setOrigin(0.2, 0.5) //seteamos el punto de origen (el centro) del asset (para poder establecer su collider).
      .setSize(250, 450) //establecemos el tamaño de su collider.
      .setScale(0.15) //lo escalamos a un tamaño acorde.
      .setCollideWorldBounds(true); //el jugador choca con los extremos/límites del mundo (no se puede ir de la pantalla).

    bpausa = this.add
      .image(770, 30, "bpausa")
      .setInteractive()
      .on("pointerdown", () => this.pausa());

    //Creamos las animaciones del personaje.
    this.anims.create({
      key: "up", //Definimos nombre a la animación.
      frames: this.anims.generateFrameNumbers("jugador", { start: 0, end: 4 }), //definimos los frames que abarca.
      framerate: 10, //velocidad de frames/frames por segundo.
      repeat: 0, //cuantas veces se repite (0 = infinitamente).
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("jugador", { start: 5, end: 9 }),
      framerate: 10,
      repeat: 0,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("jugador", {
        start: 10,
        end: 15,
      }),
      framerate: 10,
      repeat: 0,
    });
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("jugador", {
        start: 16,
        end: 21,
      }),
      framerate: 10,
      repeat: 0,
    });
    this.anims.create({
      key: "stop",
      frames: [{ key: "jugador", frame: 5 }],
      framerate: 10,
      repeat: 0,
    });

    //creacion de los controles.
    cursors = this.input.keyboard.createCursorKeys();

    //creacion de objetos y colliders.
    bads = this.physics.add.group(); //grupo de objetos malos (contienen físicas).
    goods = this.physics.add.group(); //grupo de objetos buenos (contienen físicas).
    vacunas = this.physics.add.group(); //grupo de vacunas, porque tiene que comportarse diferente que los demás objetos buenos por el boost que otorga (contienen físicas).
    barbijos = this.physics.add.group(); //grupo de barbijos, por el mismo motivo anterior (se comportará un tanto diferente a los demás objetos buenos). (Contienen físicas).

    this.physics.add.collider(player, bads, this.badsHit, null, this); //collider que ejecuta la función "badHit" cuando el jugador choca con un objeto malo (línea 297).
    this.physics.add.collider(player, goods, this.collectGoods, null, this); //collider que ejecuta la función "collectGoods" cuando el jugador choca con un objeto bueno (línea 291).
    this.physics.add.collider(
      player,
      barbijos,
      this.collectBarbijo,
      null,
      this
    ); //collider que ejecuta la función "collectGoods" cuando el jugador choca con un barbijo (línea 291).
    //El escudo de inmunidad por unos segundos que otorgaría el barbijo TODAVIA NO SE PROGRAMÓ (estructura formada para futura funcionalidad).

    //collider que ejecutan la función de boost de velocidad por 10s.
    this.physics.add.collider(player, vacunas, this.vacunado, null, this);

    colliders = this.physics.add.staticGroup(); // creamos un grupo de objetos que funcionarán como colliders para la eliminación de objetos una vez salidos de la pantalla.
    //seteamos donde se creará (puntos 'x' e 'y'), seguido del nombre del asset (definido en la escena "game.js").
    colliders.create(-60, 300, "collider").setImmovable(true); //definimos como "objetos inamovibles" a los colliders.
    colliders.create(860, 300, "collider").setImmovable(true);
    colliders.create(400, -60, "collider2").setImmovable(true);
    colliders.create(400, 660, "collider2").setImmovable(true);

    if (nivel == 2) {
      arboles = this.physics.add.staticGroup();

      arboles
        .create(650, 150, "arbol")
        .setImmovable(true)
        .setSize(40, 40)
        .setOrigin(0.59, 0.4);
      arboles
        .create(180, 420, "arbol2")
        .setImmovable(true)
        .setSize(45, 45)
        .setOrigin(0.57, 0.43);

      fuente = this.physics.add.staticGroup();
      fuente.create(400, 300, "fuente").setImmovable(true).setSize(145, 140);

      this.physics.add.collider(player, arboles);
      this.physics.add.collider(player, fuente);
    }

    this.physics.add.collider(colliders, bads, this.badsErrase, null, this); //collider que ejecuta la función "badsErrase" cuando un objeto malo choca con un collider (línea 312).
    this.physics.add.collider(colliders, goods, this.goodsErrase, null, this); //collider que ejecuta la función "goodsErrase" cuando un objeto bueno choca con un collider (línea 316).
    this.physics.add.collider(
      colliders,
      vacunas,
      this.vacunasErrase,
      null,
      this
    ); //collider que ejecuta la función "vacunasErrase" cuando una vacuna choca con un collider (línea 320).
    this.physics.add.collider(
      colliders,
      barbijos,
      this.barbijosErrase,
      null,
      this
    ); //collider que ejecuta la función "barbijosErrase" cuando un barbijo choca con un collider (línea 324).

    //seteo de velocidad de movimiento del personaje y contador de respawn de vacunas.
    contvac = 0;
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
      delay: 2500,
      callback: this.timeEvent,
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
    corazones = this.add.group({
      key: "corazon",
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

    if (nivel == 1) {
      porcentaje = 0.5;
    } else if (nivel == 2) {
      porcentaje == 0.55;
    }  
  }

  //funcion para randomizar los objetos
  timeEvent() {
    var GorE = Phaser.Math.FloatBetween(0, 1);
    patron = Phaser.Math.FloatBetween(0, 1);
    x = Phaser.Math.Between(0, 800);
    x2 = Phaser.Math.Between(0, 800);
    y = Phaser.Math.Between(0, 600);
    y2 = Phaser.Math.Between(0, 600);

    if (GorE <= porcentaje) {
      this.badies();
    } else {
      this.goodies();
    }
  }

  //funcion para aparicion de objetos malos
  badies() {
    if (nivel == 1){
        bads
          .create(x, 0, "virus")
          .setVelocityY(200)
          .setSize(500, 500, true)
          .setScale(0.06);
    }    
    else if (nivel == 2){
    if (patron <= 0.5) {
      bads
        .create(x, 0, "barro")
        .setVelocityY(200)
        .setSize(500, 500, true)
        .setScale(0.06);
    } else if (patron > 0.5) {
      bads
        .create(x, 0, "virus")
        .setVelocityY(200)
        .setSize(500, 500, true)
        .setScale(0.06);
    }
  }
    if (nivel == 1){
      bads
      .create(0, y, "virus")
      .setVelocityX(200)
      .setSize(500, 500, true)
      .setScale(0.06);
    }
    if (nivel == 2){
    if (patron <= 0.5) {
      bads
        .create(0, y, "virus")
        .setVelocityX(200)
        .setSize(500, 500, true)
        .setScale(0.06);
    } else if (patron > 0.5) {
      bads
        .create(0, y, "barro")
        .setVelocityX(200)
        .setSize(500, 500, true)
        .setScale(0.06);
    }
  }
    if (nivel == 1){
      bads
      .create(800, y2, "virus")
      .setVelocityX(-200)
      .setSize(500, 500, true)
      .setScale(0.06);
    }
    else if (nivel == 2){
    if (patron <= 0.5) {
      bads
        .create(800, y2, "barro")
        .setVelocityX(-200)
        .setSize(500, 500, true)
        .setScale(0.06);
    } else if (patron > 0.5) {
      bads
        .create(800, y2, "virus")
        .setVelocityX(-200)
        .setSize(500, 500, true)
        .setScale(0.06);
    }
  }
    if (nivel == 1){
      bads
      .create(x2, 600, "virus")
      .setVelocityY(-200)
      .setSize(500, 500, true)
      .setScale(0.06);
    }
    else if(nivel == 2){
    if (patron <= 0.5) {
      bads
        .create(x2, 600, "virus")
        .setVelocityY(-200)
        .setSize(500, 500, true)
        .setScale(0.06);
    } else if (patron > 0.5) {
      bads
        .create(x2, 600, "barro")
        .setVelocityY(-200)
        .setSize(500, 500, true)
        .setScale(0.06);
    }
  }
  }

  //funcion para aparicion de objetos buenos
  goodies() {
    if (patron >= 0.2) {
      goods
        .create(x, 0, "jabon")
        .setVelocityY(200)
        .setSize(750, 450, true)
        .setScale(0.05);
    } else if (patron < 0.1 && contvac == 0) {
      vacunas
        .create(x, 0, "jeringa")
        .setVelocityY(200)
        .setOrigin(0.9, 0.1)
        .setSize(750, 350, true)
        .setScale(0.08);
      contvac++;
    } else if (patron > 0.1 && patron < 0.2 && nivel !== 1) {
      barbijos
        .create(x, 0, "barbijo")
        .setVelocityY(200)
        .setOrigin(0.9, 0.1)
        .setSize(1000, 750, true)
        .setScale(0.035);
    }

    if (patron >= 0.2) {
      goods
        .create(0, y, "alcohol")
        .setVelocityX(200)
        .setSize(200, 400, true)
        .setScale(0.11);
    } else if (patron > 0.1 && patron < 0.2 && contvac == 0) {
      vacunas
        .create(0, y, "jeringa")
        .setVelocityX(200)
        .setOrigin(0.9, 0.1)
        .setSize(750, 350, true)
        .setScale(0.08);
      contvac++;
    } else if (patron < 0.1 && nivel !== 1) {
      barbijos
        .create(0, y, "barbijo")
        .setVelocityX(200)
        .setOrigin(0.9, 0.1)
        .setSize(1000, 750, true)
        .setScale(0.035);
    }

    if (patron >= 0.1 && patron <= 0.9) {
      goods
        .create(800, y2, "jabon")
        .setVelocityX(-200)
        .setSize(750, 450, true)
        .setScale(0.05);
    } else if (patron < 0.1 && contvac == 0) {
      vacunas
        .create(800, y2, "jeringa")
        .setVelocityX(-200)
        .setOrigin(0.9, 0.1)
        .setSize(750, 350, true)
        .setScale(0.03);
      contvac++;
    } else if (patron > 0.9 && nivel !== 1) {
      barbijos
        .create(800, y2, "barbijo")
        .setVelocityX(-200)
        .setOrigin(0.9, 0.1)
        .setSize(1000, 750, true)
        .setScale(0.035);
    }

    if (patron <= 0.8) {
      goods
        .create(x2, 600, "alcohol")
        .setVelocityY(-200)
        .setSize(200, 400, true)
        .setScale(0.11);
    } else if (patron > 0.9 && contvac == 0) {
      vacunas
        .create(x2, 600, "jeringa")
        .setVelocityY(-200)
        .setOrigin(0.9, 0.1)
        .setSize(750, 350, true)
        .setScale(0.08);
      contvac++;
    } else if (patron > 0.8 && patron <= 0.9 && nivel !== 1) {
      barbijos
        .create(x2, 600, "barbijo")
        .setVelocityY(-200)
        .setOrigin(0.9, 0.1)
        .setSize(1000, 750, true)
        .setScale(0.035);
    }
  }

  //velocidades seteadas en variables para modificarlas a la hora de agarrar una vacuna, por ej.

  update() {
    if (cursors.left.isDown && cursors.up.isDown) {
      player.anims.play("left", true).setVelocityX(vel2X).setVelocityY(vel2Y2);
    } else if (cursors.left.isDown && cursors.down.isDown) {
      player.anims.play("left", true).setVelocityX(vel2X).setVelocityY(vel2Y);
    } else if (cursors.right.isDown && cursors.up.isDown) {
      player.anims
        .play("right", true)
        .setVelocityX(vel2X2)
        .setVelocityY(vel2Y2);
    } else if (cursors.right.isDown && cursors.down.isDown) {
      player.anims.play("right", true).setVelocityX(vel2X2).setVelocityY(vel2Y);
    } else if (cursors.left.isDown) {
      player.setVelocityX(velX);
      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(velX2);
      player.anims.play("right", true);
    } else {
      player.setVelocityX(0);
    }

    if (cursors.left.isDown && cursors.up.isDown) {
      player.anims.play("left", true).setVelocityX(vel2X).setVelocityY(vel2Y2);
    } else if (cursors.left.isDown && cursors.down.isDown) {
      player.anims.play("left", true).setVelocityX(vel2X).setVelocityY(vel2Y);
    } else if (cursors.right.isDown && cursors.up.isDown) {
      player.anims.play("right", true).setVelocityX(vel2X2).setVelocityY(vel2Y2);
    } else if (cursors.right.isDown && cursors.down.isDown) {
      player.anims.play("right", true).setVelocityX(vel2X2).setVelocityY(vel2Y);
    } else if (cursors.down.isDown) {
      player.setVelocityY(velY);
      player.anims.play("down", true);
    } else if (cursors.up.isDown) {
      player.setVelocityY(velY2);
      player.anims.play("up", true);
    } else {
      player.setVelocityY(0);
    }

    if (lives <= 0) {
      this.gameover();
    }

    if (score == 100) {
      this.lvlfinish();
    }
  }

  collectGoods(player, goods) {
    goods.destroy();
    score += 5;
    progressBar.fillRect(19, 19, 2 * score, 19);
    track = this.sound.add("goodiesfx", { loop: false });
    track.play();
  }

  badsHit(player, bads) {
    bads.destroy();
    lives--;

    if (lives > -1) {
      // Se quita un corazón cada vez que se choca con un objeto malo
      var corazonErrase = corazones.getChildren()[
        corazones.getChildren().length - 1
      ];

      if (corazonErrase !== undefined) {
        corazonErrase.destroy();
      }
    }
  }

  //función que se ejecuta al agarrar una vacuna.
  vacunado(player, vacunas) {
    vacunas.destroy();
    score += 20;
    progressBar.fillRect(19, 19, 2.5 * score, 19);
    track = this.sound.add("vacunasfx", { loop: false });
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
      callback: this.finvacuna,
      callbackScope: this,
      loop: false,
    });
  }

  //función llamada por timedEvent2 (dentro de la función "vacunado" la cual se encuentra arriba).
  finvacuna() {
    velX = -220;
    velX2 = 220;
    velY = 220;
    velY2 = -220;
    vel2X = -170;
    vel2X2 = 170;
    vel2Y = 170;
    vel2Y2 = -170;
    timedEvent2.pause = true;
  }

  collectBarbijo(player, barbijos) {
    barbijos.destroy();
    score += 5;
    progressBar.fillRect(19, 19, 2 * score, 19);
    track = this.sound.add("goodiesfx", { loop: false });
    track.play();
    timedEvent3 = this.time.addEvent({
      delay: 10000,
      callback: this.finbarbijo,
      callbackScope: this,
      loop: false,
    });
  }

  finbarbijo() {}

  badsErrase(collider, bads) {
    bads.destroy();
  }

  goodsErrase(collider, goods) {
    goods.destroy();
  }

  vacunasErrase(collider, vacunas) {
    vacunas.destroy();
  }

  barbijosErrase(collider, barbijos) {
    barbijos.destroy();
  }

  pausa() {
    this.physics.pause();
    player.anims.play("stop");
    timedEvent.paused = true;
    bpausa.destroy();

    menu = this.add.image(400, 300, "pause");

    boton = this.add
      .image(335, 285, "breanudar")
      .setInteractive()
      .on("pointerdown", () => this.fuerapausa());

    boton2 = this.add
      .image(465, 285, "bopciones2")
      .setInteractive()
      .on("pointerdown", () => this.opciones());

    boton3 = this.add
      .image(335, 355, "bayuda2")
      .setInteractive()
      .on("pointerdown", () => {
        this.ayuda();
      });

    boton4 = this.add
      .image(465, 355, "bmenu")
      .setInteractive()
      .on("pointerdown", () => this.salir());
  }

  fuerapausa() {
    menu.destroy();
    boton.destroy();
    boton2.destroy();
    boton3.destroy();
    boton4.destroy();

    this.physics.resume();
    timedEvent.paused = false;
    bpausa = this.add
      .image(770, 30, "bpausa")
      .setInteractive()
      .on("pointerdown", () => this.pausa());
  }

  opciones() {
    menu.destroy();
    boton.destroy();
    boton2.destroy();
    boton3.destroy();
    boton4.destroy();
    menu = this.add.image(400, 300, "opciones2");
    boton = this.add
      .image(259, 404, "bback")
      .setInteractive()
      .on("pointerdown", () => this.fueraopciones());

    boton2 = this.add.image(422, 284, "barra");
    boton3 = this.add.image(422, 344, "barra");
  }

  fueraopciones() {
    menu.destroy();
    boton.destroy();
    boton2.destroy();
    boton3.destroy();
    this.pausa();
  }

  ayuda() {
    menu.destroy();
    boton.destroy();
    boton2.destroy();
    boton3.destroy();
    boton4.destroy();
    menu = this.add
      .image(400, 300, "ayuda2")
      .setInteractive()
      .on("pointerover", () => {
        iobject.destroy();
        i--;
      });

    //Implementamos los objetos que darán información al jugador al momento de pasar el mouse por ellos.
    fjabon = this.add
      .image(163, 330, "fjabon")
      .setInteractive()
      .on("pointerover", () => {
        if (i == 0) {
          iobject = this.add.image(163, 330, "ijabon");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(163, 330, "ijabon");
        }
      });

    fvacuna = this.add
      .image(298, 328, "fvacuna")
      .setInteractive()
      .on("pointerover", () => {
        if (i == 0) {
          iobject = this.add.image(298, 328, "ivacuna");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(298, 328, "ivacuna");
        }
      });

    falcohol = this.add
      .image(168, 413, "falcohol")
      .setInteractive()
      .on("pointerover", () => {
        if (i == 0) {
          iobject = this.add.image(168, 413, "ialcohol");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(168, 413, "ialcohol");
        }
      });

    fbarbijo = this.add
      .image(295, 416, "fbarbijo")
      .setInteractive()
      .on("pointerover", () => {
        if (i == 0) {
          iobject = this.add.image(295, 416, "ibarbijo");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(295, 416, "ibarbijo");
        }
      });

    fbarro = this.add
      .image(506, 336, "fbarro")
      .setInteractive()
      .on("pointerover", () => {
        if (i == 0) {
          iobject = this.add.image(506, 336, "ibarro");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(506, 336, "ibarro");
        }
      });

    fvirus = this.add
      .image(648, 348, "fvirus")
      .setInteractive()
      .on("pointerover", () => {
        if (i == 0) {
          iobject = this.add.image(648, 345, "ivirus");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(648, 345, "ivirus");
        }
      });

    fnube = this.add
      .image(567, 426, "fnube")
      .setInteractive()
      .on("pointerover", () => {
        if (i == 0) {
          iobject = this.add.image(567, 426, "inube");
          i++;
        } else {
          iobject.destroy();
          iobject = this.add.image(567, 426, "inube");
        }
      });

    i = 0;

    //Creación de botones y seteo de funciones de los mismos.
    boton = this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => this.fuerayuda());

    boton2 = this.add
      .image(677, 514, "bcontroles")
      .setInteractive()
      .on("pointerdown", () => this.controles());
  }

  fuerayuda() {
    menu.destroy();
    fjabon.destroy();
    fvacuna.destroy();
    falcohol.destroy();
    fbarbijo.destroy();
    fbarro.destroy();
    fvirus.destroy();
    fnube.destroy();
    boton.destroy();
    boton2.destroy();
    this.pausa();
  }

  controles() {
    menu.destroy();
    fjabon.destroy();
    fvacuna.destroy();
    falcohol.destroy();
    fbarbijo.destroy();
    fbarro.destroy();
    fvirus.destroy();
    fnube.destroy();
    boton.destroy();
    boton2.destroy();
    menu = this.add.image(400, 300, "controles2");
    boton = this.add
      .image(102, 90, "bback")
      .setInteractive()
      .on("pointerdown", () => this.fueracontroles());
  }

  fueracontroles() {
    menu.destroy();
    boton.destroy();
    this.pausa();
  }

  //Se ejecuta esta función al perderse todas las vidas.
  gameover() {
    this.physics.pause();
    player.anims.play("stop");
    timedEvent.paused = true;

    this.add.image(400, 300, "nperdido");

    this.add
      .image(325, 315, "breintentar")
      .setInteractive()
      .on("pointerdown", () => this.reinicio());

    this.add
      .image(475, 315, "bmenu")
      .setInteractive()
      .on("pointerdown", () => this.salir());
  }

  //Se ejecuta esta función al ganarse un nivel.
  lvlfinish() {
    this.physics.pause();
    player.anims.play("stop");
    timedEvent.paused = true;

    this.add.image(400, 300, "nsuperado");

    this.add
      .image(250, 315, "bcontinuar")
      .setInteractive()
      .on("pointerdown", () => this.continuar());

    this.add
      .image(400, 315, "breintentar")
      .setInteractive()
      .on("pointerdown", () => this.reinicio());

    this.add
      .image(550, 315, "bmenu")
      .setInteractive()
      .on("pointerdown", () => this.salir());
  }

  //Si se elige "reintentar nivel" se ejecuta esta función.
  continuar() {
    lives = 3;
    score = 0;
    if (nivel == 1) {
      nivel++;
      nivsup++;
    }
    this.scene.start("game");
  }

  reinicio() {
    this.scene.start("game");
    timedEvent.paused = false;

    lives = 3;
    score = 0;
  }

  //Si se elige "salir al menu principal" se ejeucta esta función.
  salir() {
    this.scene.start("main");
    timedEvent.paused = false;
    lives = 3;
    score = 0;
    track = undefined;
  }
}
