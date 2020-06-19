class Scene2 extends Phaser.Scene {
    constructor() {
        super('game');
    }


    create ()
    {
        //Fondo
        this.add.image(400, 300, 'titulo')
        
        //personaje
        player = this.physics.add.image(400, 300, 'jugador')
        this.bomba = this.add.image(config.width/2 - 50, config.height/2,'malo')
        player.setCollideWorldBounds(true);

        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        };

        bombs = this.physics.add.group();




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

            var bomb = bombs.create (x, Y, 'malo');
            if (bomb.y >= 600){
                bomb.setVelocityY(Phaser.Math.Between(10), 20);
            }
                else {
                    bomb.setVelocityY(Phaser.Math.Between(-10), 0);
                }
            
            
            bomb.allowGravity = false;
    }
}

