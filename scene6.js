class scene6 extends Phaser.Scene {
    constructor (){
        super('controles')
    }

    create(){
        //seteamos el background del menú.
        this.add.image(400, 300, 'controles')
    
        //botones.
        var bback = this.add.image(102, 90, 'bback');
        bback.setInteractive()
        bback.on('pointerdown', () => this.scene.start('main'))
    
        var bcontroles = this.add.image(676, 509, 'bcomojugar');
        bcontroles.setInteractive()
        bcontroles.on('pointerdown', () => this.scene.start('ayuda'))
    }
}