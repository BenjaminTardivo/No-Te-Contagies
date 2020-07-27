class Scene3 extends Phaser.Scene {
    constructor() {
        super('Creditos');
    }

    create(){
        this.add.image(400, 300, 'credits')

        var backb = this.add.image(30, 30, 'bback').setScale(0.5)
        backb.setInteractive()
        backb.on('pointerdown', () => this.scene.start('start'))
    }


}

