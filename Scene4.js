class Scene4 extends Phaser.Scene {
    constructor() {
        super('game2');

    }

    create() {
        //Fondo
        this.add.image(400, 300, 'background2');

        //personaje
        player = this.physics.add.sprite(400, 150, 'jugador').setSize(170, 450)
            .setScale(0.15);
        player.setCollideWorldBounds(true);
        //animaciones del personaje
        this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers('jugador', { start: 0, end: 4 }),
            framerate: 10,
            repeat: 0
        });

        this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers('jugador', { start: 5, end: 9 }),
            framerate: 10,
            repeat: 0
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers('jugador', { start: 10, end: 15 }),
            framerate: 10,
            repeat: 0
        });
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers('jugador', { start: 16, end: 21 }),
            framerate: 10,
            repeat: 0
        });
        this.anims.create({
            key: "stop",
            frames: [{ key: 'jugador', frame: 5 }],
            framerate: 10,
            repeat: 0
        });
        //creacion de los cursores
        cursors = this.input.keyboard.createCursorKeys();

        //creacion de objetos y colliders (vacuna creada como un grupo independiente).
        bads = this.physics.add.group();
        goods = this.physics.add.group();
        vacunas = this.physics.add.group();

        this.physics.add.collider(player, bads, this.badsHit, null, this);
        this.physics.add.collider(player, goods, this.collectGoods, null, this);
        this.physics.add.collider(player, vacunas, this.vacunado, null, this);

        colliders = this.physics.add.staticGroup();

        colliders.create(-60, 300, 'collider').setImmovable(true);
        colliders.create(820, 300, 'collider').setImmovable(true);
        colliders.create(400, -60, 'collider2').setImmovable(true);
        colliders.create(400, 620, 'collider2').setImmovable(true);

        arboles = this.physics.add.staticGroup();

        arboles.create(650, 150, 'arbol').setImmovable(true).setSize(40, 40).setOrigin(0.59, 0.4);
        arboles.create(180, 420, 'arbol2').setImmovable(true).setSize(45, 45).setOrigin(0.57, 0.43);

        fuente = this.physics.add.staticGroup();

        fuente.create(400, 300, 'fuente').setImmovable(true).setSize(145, 140);

        this.physics.add.collider(colliders, bads, this.badsErrase, null, this);
        this.physics.add.collider(colliders, goods, this.goodsErrase, null, this);
        this.physics.add.collider(colliders, vacunas, this.vacunasErrase, null, this);
        this.physics.add.collider(player, arboles);
        this.physics.add.collider(player, fuente);

        //seteamos el puntaje en 0 y las vidas en 3.
        score = 0;
        lives = 3;

        //seteo de velocidad de movimiento del personaje y contador de respawn de vacunas.
        contvac = 0;
        velX = -220;
        velX2 = 220;
        velY = 220;
        velY2 = -220;

        //creacion el evento para la generacion de objetos.
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.timeEvent, callbackScope: this, loop: true });

        //creacion del evento para el cambio de velocidad del personaje al vacunarse.
        //creacion la barra de inmunidad
        progressBox = this.add.graphics();
        progressBar = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(16, 16, 206, 25);

        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        //creacion de los corazones
        corazones = this.add.group({
            key: 'corazon',
            repeat: 2,
            setXY: {
                x: 16,
                y: 540,
                stepX: 39
            },
            setScale: {
                x: 0.25,
                y: 0.25,
            }
        });

    }

    //funcion para randomizar los objetos
    timeEvent() {
        var GorE = Phaser.Math.FloatBetween(0, 1);

        if (GorE < 0.6) {
            this.badies();
        }
        else {
            this.goodies();
        }

    }
    //funcion para aparicion de objetos malos
    badies() {
        var x = Phaser.Math.Between(0, 800);
        var x2 = Phaser.Math.Between(0, 800);
        var Y = Phaser.Math.Between(0, 600);
        var Y2 = Phaser.Math.Between(0, 600);
        patron = Phaser.Math.FloatBetween(0, 1);




        var bad = bads.create(x, 0);
        var bad2 = bads.create(0, Y);
        var bad3 = bads.create(800, Y2, 'malo');
        var bad4 = bads.create(x2, 600, 'malo');



        if (patron < 0.5) {
            bad.setTexture('barro')
                .setSize(50, 50, true)
                .setScale(0.5);
        }
        else {
            bad.setTexture('virus')
                .setSize(50, 50, true)
                .setScale(0.5);
        };

        if (patron > 0.5) {
            bad2.setTexture('barro')
                .setSize(50, 50, true)
                .setScale(0.5);
        }
        else {
            bad2.setTexture('virus')
                .setSize(50, 50, true)
                .setScale(0.5);
        };

        if (patron < 0.5) {
            bad3.setTexture('barro')
                .setSize(50, 50, true)
                .setScale(0.5);
        }
        else {
            bad3.setTexture('virus')
                .setSize(50, 50, true)
                .setScale(0.5);
        };

        if (patron < 0.5) {
            bad4.setTexture('barro')
                .setSize(50, 50, true)
                .setScale(0.5);
        }
        else {
            bad4.setTexture('virus')
                .setSize(50, 50, true)
                .setScale(0.5);
        };

        //seteamos las velocidades de los objetos
        bad.setVelocityY(200);
        bad2.setVelocityX(200);
        bad3.setVelocityX(-200);
        bad4.setVelocityY(-200);




    }
    //funcion para aparicion de objetos buenos
    goodies() {

        var x = Phaser.Math.Between(0, 800);
        var x2 = Phaser.Math.Between(0, 800);
        var Y = Phaser.Math.Between(0, 600);
        var Y2 = Phaser.Math.Between(0, 600);
        patron = Phaser.Math.FloatBetween(0, 1);

        if (patron >= 0.1){
            goods.create(x, 0, 'jabon').setVelocityY(200).setSize(50, 50, true).setScale(0.50)
            //child.score = 5 
        }
            else if (patron < 0.1 && contvac == 0){
                vacunas.create(x, 0, 'jeringa').setVelocityY(200).setSize(150, 50, true).setScale(0.40)
                contvac++
                //child.score = 10
            }

        if (patron >= 0.1){
            goods.create(0, Y, 'alcohol').setVelocityX(200).setSize(200, 350, true).setScale(0.10)
            //child.score = 5
            
        }
            else if (patron < 0.1 && contvac == 0){
                vacunas.create(0, Y, 'jeringa').setVelocityX(200).setSize(150, 50, true).setScale(0.40)
                contvac++
                //child.score = 10
            }

        if (patron >= 0.1){
            goods.create(x2, 600, 'jabon').setVelocityY(-200).setSize(50, 50, true).setScale(0.50)
            //child.score = 5
            
        }
            else if (patron < 0.1 && contvac == 0){
                vacunas.create(x2, 600, 'jeringa').setVelocityY(-200).setSize(150, 50, true).setScale(0.40)
                contvac++
                //child.score = 10
            }

        if (patron >= 0.1){
            goods.create(800, Y2, 'alcohol').setVelocityX(200).setSize(200, 350, true).setScale(0.10)
            //child.score = 5
            
        }
            else if (patron < 0.1 && contvac == 0){
                vacunas.create(800, Y2, 'jeringa').setVelocityX(200).setSize(150, 50, true).setScale(0.40)
                contvac++
                //child.score = 10
            }

    }

    //función que se ejecuta al agarrar una vacuna.
    vacunado(player, vacunas) {
        vacunas.destroy();
        score += 10;
        progressBar.fillRect(19, 19, 2.5 * score, 19);
        velX = -350;
        velX2 = 350;
        velY = 350;
        velY2 = -350;
        timedEvent2 = this.time.addEvent({ delay: 10000, callback: this.finvacuna, callbackScope: this, loop: false });
    }

    //función llamada por timedEvent2 (dentro de la función "vacunado" la cual se encuentra arriba).
    finvacuna() {
        velX = -220;
        velX2 = 220;
        velY = 220;
        velY2 = -220;
        timedEvent2.pause = true;
    }

    //velocidades seteadas en variables para modificarlas a la hora de agarrar una vacuna, por ej.
    update() {
        if (cursors.left.isDown) {
            player.setVelocityX(velX);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(velX2);

            player.anims.play('right', true);
        }
        else {
            player.setVelocityX(0);
        }

        if (cursors.down.isDown) {
            player.setVelocityY(velY);

            player.anims.play('down', true);
        }
        else if (cursors.up.isDown) {
            player.setVelocityY(velY2);

            player.anims.play('up', true);
        }
        else {
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
    }

    badsHit(player, bads) {
        bads.destroy();
        lives--;

        if (lives > -1) {
            // Se quita un corazón cada vez que se choca con un objeto malo
            var chau = corazones.getChildren()[corazones.getChildren().length - 1];

            if (chau !== undefined) {
                chau.destroy();
            }
        }
    }

    badsErrase(collider, bads) {
        bads.destroy();
    }

    goodsErrase(collider, goods) {
        goods.destroy();
    }

    vacunasErrase(collider, vacunas) {
        vacunas.destroy();
    }

    gameover() {
        this.physics.pause();
        player.anims.play('stop');
        timedEvent.paused = true;
        var gameOverText = this.add.text(400, 300, 'Te has contagiado...', { fontFamily: 'Arial', fontSize: 70, color: '#000' });

        var bretry = this.add.image(300, 350, 'breintentar').setScale(0.56);
        bretry.setInteractive();
        bretry.on('pointerdown', () => this.reinicio());

        var bquit = this.add.image(500, 350, 'bsalir').setScale(0.56);
        bquit.setInteractive();
        bquit.on('pointerdown', () => (this.salir()));

        Phaser.Display.Align.In.Center(gameOverText, this.add.zone(400, 150, 200, 300));

    }

    lvlfinish() {
        this.physics.pause();
        player.anims.play('stop');
        timedEvent.paused = true;

        var lvlcomplete = this.add.text(400, 300, '¡Nivel Superado!', { fontFamily: 'Arial', fontSize: 70, color: '#000' });
        Phaser.Display.Align.In.Center(lvlcomplete, this.add.zone(400, 150, 200, 300));

        var bretry = this.add.image(300, 350, 'breintentar').setScale(0.56);
        bretry.setInteractive();
        bretry.on('pointerdown', () => this.reinicio());

        var bquit = this.add.image(500, 350, 'bsalir').setScale(0.56);
        bquit.setInteractive();
        bquit.on('pointerdown', () => (this.salir()));

    }
    reinicio() {
        this.scene.start('game2');

        timedEvent.paused = false;
        lives = 3;
        score = 0;
    }
    salir() {
        this.scene.start('start');
        timedEvent.paused = false;
        lives = 3;
        score = 0;
    }


}
