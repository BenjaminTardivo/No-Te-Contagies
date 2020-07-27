class Scene1 extends Phaser.Scene {
constructor() {
    super('start');
}

preload ()
{
    this.load.image('Menu', 'images/Menu.png');
    this.load.image('background', 'images/background.png');
    this.load.image('background2', 'images/background2.png');
    this.load.image('arbol', 'images/arbol.png');
    this.load.image('arbol2', 'images/arbol2.png');
    this.load.image('fuente', 'images/fuente.png');
    this.load.image('credits', 'images/creditos.png');
    this.load.spritesheet('jugador', 'spritesheets/spritesheet pj.png', {
        frameHeight: 491,
        frameWidth: 298
    });
    this.load.image('boton-jugar', 'images/boton-jugar.png');
    this.load.image('bcreditos', 'images/bcreditos.png');
    this.load.image('bcontinuar', 'images/bcontinuar.png');
    this.load.image('bback', 'images/bback.png');
    this.load.image('virus', 'images/virus.png');
    this.load.image('breintentar', 'images/breintenar.png');
    this.load.image('bsalir','images/bsalir.png')
    this.load.image('collider', 'images/collider.png');
    this.load.image('collider2', 'images/collider2.png');
    this.load.image('barro', 'images/barro.png');
    this.load.image('jeringa', 'images/vacuna.png');
    this.load.image('jabon', 'images/Jabon.png');
    this.load.image('alcohol', 'images/alcohol.png');
    this.load.image('barbijo', 'images/barbijo.png');
    this.load.image('corazon', 'images/corazonzon.jpg');


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
