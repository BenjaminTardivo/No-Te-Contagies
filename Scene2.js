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
        player.setCollideWorldBounds(true);

        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }

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
    }
}

