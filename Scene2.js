class Scene2 extends Phaser.Scene {
    constructor() {
        super('game');
    }


    create ()
    {
        //Fondo
        this.add.image(400, 300, 'background');
        
        //personaje
        player = this.physics.add.image(400, 300, 'jugador').setSize(100, 450)
        .setScale(0.15);
        player.setCollideWorldBounds(true);
        //creacion de los cursores
       
        cursors = this.input.keyboard.createCursorKeys();
        
        //creacion de objetos y colliders con el personaje
        bads = this.physics.add.group();
        goods = this.physics.add.group();

        this.physics.add.collider(player, bads, this.badsHit, null, this);
        this.physics.add.collider(player, goods, this.collectGoods, null, this);
        //creacion de colliders
        colliders = this.physics.add.staticGroup();

        colliders.create(-60, 300, 'collider');
        colliders.create(820, 300, 'collider');
        colliders.create(400, -60, 'collider2');
        colliders.create(400, 620, 'collider2');

        this.physics.add.collider(colliders, bads, this.badsErrase, null, this);
        this.physics.add.collider(colliders, goods, this.goodsErrase, null, this);






        
        score = 0;
       
        timedEvent = this.time.addEvent({ delay: 1500, callback: this.timeEvent, callbackScope: this, loop: true });

        scoreText = this.add.text(16, 16, 'Inmunidad: ' + score + '/100%', { fontSize: '25px', fill: '#000', fontFamily: 'Arial'});
        corazones = this.add.group({
            key: 'corazon',
            repeat: 2,
            setXY:
            {
                x: 16,
                y: 540,
                stepX: 39
            },
        })
    }

    timeEvent(){
        var GorE = Phaser.Math.FloatBetween(0, 1);

        if (GorE < 0.6){
            this.badies()
        }
        else {
            this.goodies()
        }

    }

    badies(){
        var x =  Phaser.Math.Between(0, 800);
        var x2 =  Phaser.Math.Between(0, 800);
        var Y = Phaser.Math.Between(0, 600);  
        var Y2 = Phaser.Math.Between(0, 600);   
        patron = Phaser.Math.FloatBetween(0, 1);



      
         var bad = bads.create (x, 0);
         var bad2 = bads.create (0, Y);
         var bad3 = bads.create (800, Y2, 'malo');
         var bad4 = bads.create (x2, 600, 'malo');


 
        if (patron < 0.5){
            bad.setTexture('barro')
            .setSize(50, 50, true)
            .setScale(0.5);
        }
        else{
            bad.setTexture('virus')
            .setSize(50, 50, true)
            .setScale(0.5);
        };
        
        if(patron > 0.5){
            bad2.setTexture('barro')
            .setSize(50, 50, true)
            .setScale(0.5);
        }
        else{
            bad2.setTexture('virus')
            .setSize(50, 50, true)
            .setScale(0.5);
        };
        
        if(patron < 0.5){
            bad3.setTexture('barro')
            .setSize(50, 50, true)
            .setScale(0.5);
        }
        else{
            bad3.setTexture('virus')
            .setSize(50, 50, true)
            .setScale(0.5);
        };

        if(patron < 0.5){
            bad4.setTexture('barro')
            .setSize(50, 50, true)
            .setScale(0.5);
        }
        else{
            bad4.setTexture('virus')
            .setSize(50, 50, true)
            .setScale(0.5);
        };


        bad.setVelocityY (200);
        bad2.setVelocityX (200);
        bad3.setVelocityX (-200);
        bad4.setVelocityY (-200);




    }

    goodies(){


        var x =  Phaser.Math.Between(0, 800);
        var x2 =  Phaser.Math.Between(0, 800);
        var Y = Phaser.Math.Between(0, 600);
        var Y2 = Phaser.Math.Between(0, 600);
        patron = Phaser.Math.FloatBetween(0, 1);

        var good = goods.create(x, 0, 'player');
        var good2 = goods.create(0, Y, 'player');
        var good3 = goods.create(x2, 600, 'player');
        var good4 = goods.create(800, Y2, 'player');


        if (patron < 0.5){
            good.setTexture('jabon')
            .setSize(50, 50, true)
            .setScale(0.50)
            //child.score = 5
            id1 = 0;
        }
        else{
            good.setTexture('jeringa')
            .setSize(50, 50, true)
            .setScale(0.40)
            id1 = 1;
            //child.score = 10
        }

        if (patron > 0.5){
            good2.setTexture('jabon')
            .setSize(50, 50, true)
            .setScale(0.50)
            //child.score = 5
            id2 = 0;
        }
        else{
            good2.setTexture('jeringa')
            .setSize(50, 50, true)
            .setScale(0.40)
            //child.score = 10
            id2 = 1;
        }

        if (patron < 0.5){
            good3.setTexture('jabon').setSize(50, 50, true)
            .setScale(0.50)
            //child.score = 5
            id3 = 0;
        }
        else{
            good3.setTexture('jeringa')
            .setSize(50, 50, true)
            .setScale(0.40)
            //child.score = 10
            id3 = 1;
        }

        if (patron > 0.5){
            good4.setTexture('jabon').setSize(50, 50, true)
            .setScale(0.50)
            //child.score = 5
            id4 = 0;
        }
        else{
            good4.setTexture('jeringa')
            .setSize(50, 50, true)
            .setScale(0.40)
            //child.score = 10
            id4 = 1;
        }
    




        good.setVelocityY(200);
        good2.setVelocityX(200);
        good3.setVelocityY(-200);
        good4.setVelocityX(-200);
       

    }


    update ()
    {
        if (cursors.left.isDown) {
        player.setVelocityX(-220)}
        
        else if (cursors.right.isDown) {
            player.setVelocityX(220)
        }
        else {
            player.setVelocityX(0)
        }

        if (cursors.down.isDown) {
            player.setVelocityY(220)}
            
            else if (cursors.up.isDown) {
                player.setVelocityY(-220)
            }
            else {
                player.setVelocityY(0)
            }


               if (lives <= 0){
                   this.gameover()
               }

               if(score == 100){
                   this.lvlfinish()
               }
          

    }
    collectGoods(player, goods){
        goods.destroy()
        score += 5
        scoreText.setText('Inmunidad: ' + score + '%/100%');
        if (id1 == 1 || id2 == 1 || id3 == 1 || id4 == 1){
            console.log("si")
        }
        else if (id1 == 0 || id2 == 0 || id3 == 0 || id4 == 0){
            console.log("no")
        }

    }

    badsHit(player, bads){
        bads.destroy()
        lives --
        
        if (lives > -1){
            // Se quita un corazón cada vez que se choca con una rata:
                var chau = corazones.getChildren()[corazones.getChildren().length -1]

                if (chau !== undefined){
                chau.destroy()
                }
        }
    }

    badsErrase(collider, bads){
        bads.destroy()
    }

    goodsErrase(collider, goods){
        goods.destroy()
    }

    gameover(){
        this.physics.pause();
        timedEvent.paused = true;
        var gameOverText = this.add.text(400, 300, 'Te has contagiado...', { fontFamily: 'Arial', fontSize: 70, color: '#000' });
        var bretry = this.add.image(300, 350, 'breintentar').setScale(0.56)
        bretry.setInteractive()
        bretry.on('pointerdown', () => this.reinicio())

        var bquit = this.add.image(500, 350, 'bsalir').setScale(0.56)
        bquit.setInteractive()
        bquit.on('pointerdown',() => (this.salir()))

        Phaser.Display.Align.In.Center(gameOverText, this.add.zone(400, 150, 200, 300));

    }

    lvlfinish(){
        this.physics.pause();
        timedEvent.paused = true;

        var lvlcomplete = this.add.text(400, 300, '¡Nivel Superado!', {fontFamily: 'Arial', fontSize: 70, color: '#000'})
        Phaser.Display.Align.In.Center(lvlcomplete, this.add.zone(400, 150, 200, 300));

        var bretry = this.add.image(300, 350, 'breintentar').setScale(0.56)
        bretry.setInteractive()
        bretry.on('pointerdown', () => this.reinicio())

        var bquit = this.add.image(500, 350, 'bsalir').setScale(0.56)
        bquit.setInteractive()
        bquit.on('pointerdown',() => (this.salir()))

    }
    reinicio(){
        this.scene.start('game');

        timedEvent.paused = false;
        lives = 3
        score = 0
    }
    salir(){
        this.scene.start('start');
        timedEvent.paused = false;
        lives = 3
        score = 0
    }


}
