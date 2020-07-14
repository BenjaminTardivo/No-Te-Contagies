class Scene1 extends Phaser.Scene {
constructor() {
    super('start');
}

preload ()
{
    this.load.image('Menu', 'images/Menu.png');
    this.load.image('credits', 'images/creditos.png');
    this.load.image('jugador', 'images/Pj.png');
    this.load.image('boton-jugar', 'images/boton-jugar.png');
    this.load.image('bcreditos', 'images/bcreditos.png')
    this.load.image('bback', 'images/bback.png')
    this.load.image('virus', 'images/virus.png');
    this.load.image('breintentar', 'images/breintenar.png');
    this.load.image('bsalir','images/bsalir.png')
    this.load.image('collider', 'images/collider.png');
    this.load.image('collider2', 'images/collider2.png');
    this.load.image('barro', 'images/barro.png')
    this.load.image('jeringa', 'images/vacuna.png')
    this.load.image('jabon', 'images/Jabon.png')
}

create ()
{
    this.add.image(400, 300, 'Menu')
    var jugar= this.add.image(400, 300, 'boton-jugar').setScale(0.56);
    jugar.setInteractive()
    jugar.on('pointerdown', () => this.scene.start('game'));

    var creditos = this.add.image(400, 375, 'bcreditos').setScale(0.56);
    creditos.setInteractive()
    creditos.on('pointerdown', () => (this.scene.start('Creditos')))
}



}           
