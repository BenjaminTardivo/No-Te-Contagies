class scene1 extends Phaser.Scene {
constructor() {
    super('main');
}

preload(){
    this.load.image('menu', 'images/menu.png');
    this.load.image('ayuda', 'images/ayuda.png');
    this.load.image('controles', 'images/controles.png');
    this.load.image('background', 'images/background.png');
    this.load.image('background2', 'images/background2.png');
    this.load.image('nsuperado', 'images/nsuperado.png');
    this.load.image('nperdido', 'images/nperdido.png');
    this.load.image('arbol', 'images/arbol.png');
    this.load.image('arbol2', 'images/arbol2.png');
    this.load.image('fuente', 'images/fuente.png');
    this.load.image('credits', 'images/creditos.png');
    this.load.spritesheet('jugador', 'images/player.png', {
        frameHeight: 491,
        frameWidth: 298
    });
    this.load.image('bjugar', 'images/bjugar.png');
    this.load.image('btienda', 'images/btienda.png');
    this.load.image('bcreditos', 'images/bcreditos.png');
    this.load.image('bopciones', 'images/bopciones.png');
    this.load.image('bcontinuar', 'images/bcontinuar.png');
    this.load.image('bayuda', 'images/bayuda.png');
    this.load.image('bback', 'images/bback.png');
    this.load.image('bcontroles', 'images/bcontroles.png')
    this.load.image('virus', 'images/virus.png');
    this.load.image('nube', 'images/nube.png');
    this.load.image('breintentar', 'images/breintentar.png');
    this.load.image('bsalir','images/bsalir.png');
    this.load.image('bmenu','images/bmenu.png');
    this.load.image('bcomojugar', 'images/bcomojugar.png');
    this.load.image('collider', 'images/collider.png');
    this.load.image('collider2', 'images/collider2.png');
    this.load.image('barro', 'images/barro.png');
    this.load.image('jeringa', 'images/vacuna.png');
    this.load.image('jabon', 'images/jabon.png');
    this.load.image('alcohol', 'images/alcohol.png');
    this.load.image('barbijo', 'images/barbijo.png');
    this.load.image('corazon', 'images/corazon.png');
    this.load.image('falcohol', 'images/falcohol.png');
    this.load.image('fbarbijo', 'images/fbarbijo.png');
    this.load.image('fbarro', 'images/fbarro.png');
    this.load.image('fjabon', 'images/fjabon.png');
    this.load.image('fnube', 'images/fnube.png');
    this.load.image('fvacuna', 'images/fvacuna.png');
    this.load.image('fvirus', 'images/fvirus.png');
    this.load.image('ialcohol', 'images/ialcohol.png');
    this.load.image('ibarbijo', 'images/ibarbijo.png');
    this.load.image('ibarro', 'images/ibarro.png');
    this.load.image('iestornudo', 'images/iestornudos.png');
    this.load.image('ijabon', 'images/ijabon.png');
    this.load.image('ivacuna', 'images/ivacuna.png');
    this.load.image('ivirus', 'images/ivirus.png');
    this.load.image('inube', 'images/inube.png');
}

create(){
    this.add.image(400, 300, 'menu')

    var jugar= this.add.image(412, 225, 'bjugar');
    jugar.setInteractive()
    jugar.on('pointerdown', () => this.scene.start('nivel1'));

    var tienda= this.add.image(409, 288, 'btienda');
    tienda.setInteractive()
    tienda.on('pointerdown', () => this.scene.start('main'));

    var opciones= this.add.image(412, 347, 'bopciones');
    opciones.setInteractive()
    opciones.on('pointerdown', () => this.scene.start('main'));

    var creditos = this.add.image(410, 410, 'bcreditos');
    creditos.setInteractive()
    creditos.on('pointerdown', () => this.scene.start('creditos'));

    var ayuda = this.add.image(710, 558, 'bayuda');
    ayuda.setInteractive()
    ayuda.on('pointerdown', () => this.scene.start('ayuda'));

    var salir = this.add.image(95, 558, 'bsalir');
    salir.setInteractive()
    salir.on('pointerdown', () => window.location.href = 'http://www.google.com');
}
}           
