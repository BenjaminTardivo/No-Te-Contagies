class Scene1 extends Phaser.Scene {
constructor() {
    super('start');
}

preload ()
{
    this.load.image('si', 'images/122268.jpg');
    this.load.image('titulo', 'images/titulo.jpg');
    this.load.image('backgorund', 'images/bg.jpg');
    this.load.image('jugador', 'images/star.png')
}

create ()
{
    var titulo= this.add.image(400, 300, 'si').setScale(0.56);
    titulo.setInteractive()
    titulo.on('pointerdown', () => this.scene.start('game'), console.log ('iniciando'));
}



}
