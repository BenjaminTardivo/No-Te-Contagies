class Scene2 extends Phaser.Scene {
    constructor() {
        super('game');
    }


    create ()
    {
        //Fondo
        this.add.image(400, 300, 'backgorund')
        
        //personaje
        player = this.physics.add.image(400, 300, 'jugador')
        player.setCollideWorldBounds(true);

        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        };

        bombs = this.physics.add.group();
        //this.physics.add.collider(player, bombs, this.virushit, null, this)

        colliders = this.physics.add.staticGroup();
        colliders.create(-20, 300, 'collider');
        colliders.create(820, 300, 'collider');
        colliders.create(400, -20, 'collider2');
        colliders.create(400, 620, 'collider2');
        this.physics.add.collider(colliders, bombs, this.viruserrase, null, this)






    }
    



    update ()
    {
        if (cursors.left.isDown) {
        player.setVelocityX(-160)}
        
        else if (cursors.right.isDown) {
            player.setVelocityX(160)
        }
        else {
            player.setVelocityX(0)
        }

        if (cursors.down.isDown) {
            player.setVelocityY(160)}
            
            else if (cursors.up.isDown) {
                player.setVelocityY(-160)
            }
            else {
                player.setVelocityY(0)
            }
            var x =  Phaser.Math.Between(0, 800)
            var Y = Phaser.Math.Between(0, 600)


            var bomb = bombs.create (x, 0, 'malo');
            var bomb2 = bombs.create (0, Y, 'malo');
            var bomb3 = bombs.create (800, Y, 'malo');
            var bomb4 = bombs.create (x, 600, 'malo')

                bomb.setVelocityY (200)
                bomb2.setVelocityX (200)
                bomb3.setVelocityX (-200)
                bomb4.setVelocityY (-200)

               // if (bomb.y < 2) {
               //     bomb.destroy()
               //     console.log('c')
               // }


               if (lives <= 0){
               //    this.gameover()
               }



            
            bomb.allowGravity = false;
    }
    virushit(player, bomb){
        bomb.destroy()
        lives --
      //  console.log(lives)
    }
    viruserrase(collider, bomb){
        bomb.destroy()
        console.log('chau')
    }

    gameover(){
        gameOver = true;
        this.physics.pause();
    }

}

