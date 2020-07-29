class scene3 extends Phaser.Scene {
    constructor() {
        super('creditos');
    }

    create(){
        //seteamos el background del menú.
        this.add.image(400, 300, 'credits')

        //botones.
        var bback = this.add.image(102, 90, 'bback');
        bback.setInteractive()
        bback.on('pointerdown', () => this.scene.start('main'))
    }
}

