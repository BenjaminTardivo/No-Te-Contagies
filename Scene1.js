class Scene1 extends Phaser.Scene {
constructor() {
    super('start');
}

preload ()
{
    this.load.image('titulo', 'images/122268.jpg');
    this.load.image('backgorund', 'images/background.png');
    this.load.image('jugador', 'images/star.png');
    this.load.image('boton', 'images/boton.jpg');
    this.load.image('malo', 'images/bomb.png');
    this.load.image('collider', 'images/collider.png')
    this.load.image('collider2', 'images/collider2.png')
}

create ()
{
    this.add.image(400, 300, 'titulo').setScale(0.56)
    var titulo= this.add.image(400, 300, 'boton').setScale(0.56);
    titulo.setInteractive()
    titulo.on('pointerdown', () => this.scene.start('game'));
}



}           
