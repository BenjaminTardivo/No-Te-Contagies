class scene5 extends Phaser.Scene {
    constructor(){
        super('ayuda');
    }

create(){
    //seteamos el background del menú.
    var ayuda = this.add.image(400, 300, 'ayuda').setInteractive();

    //implementamos los objetos que darán información al jugador al momento de pasar el mause por ellos.
    var fjabon = this.add.image(163, 330, 'fjabon').setInteractive();
    var fvacuna = this.add.image(298, 328, 'fvacuna').setInteractive();
    var falcohol = this.add.image(168, 413, 'falcohol').setInteractive();
    var fbarbijo = this.add.image(295, 416, 'fbarbijo').setInteractive();
    var fbarro = this.add.image(506, 336, 'fbarro').setInteractive();
    var fvirus = this.add.image(648, 348, 'fvirus').setInteractive();
    var fnube = this.add.image(567, 426, 'fnube').setInteractive();
    i = 0;

    fjabon.on('pointerover', () => this.icreate());
    fvacuna.on('pointerover', () => this.icreate2());
    falcohol.on('pointerover', () => this.icreate3());
    fbarbijo.on('pointerover', () => this.icreate4());
    fbarro.on('pointerover', () => this.icreate5());
    fvirus.on('pointerover', () => this.icreate6());
    fnube.on('pointerover', () => this.icreate7());
    ayuda.on('pointerover', () => this.iErrase());

    //botones.
    var bback = this.add.image(102, 90, 'bback');
    bback.setInteractive()
    bback.on('pointerdown', () => this.scene.start('main'))

    var bcontroles = this.add.image(677, 509, 'bcontroles');
    bcontroles.setInteractive()
    bcontroles.on('pointerdown', () => this.scene.start('controles'))
}

    icreate(){
        if (i == 0){
            iobject = this.add.image(163, 330, 'ijabon');
            i++
        }

            else{
                iobject.destroy();
                iobject = this.add.image(163, 330, 'ijabon');
            }
    }

    icreate2(){
        if (i == 0){
            iobject = this.add.image(298, 328, 'ivacuna');
            i++
        }

            else{
                iobject.destroy();
                iobject = this.add.image(298, 328, 'ivacuna');
            }
    }

    icreate3(){
        if (i == 0){
            iobject = this.add.image(168, 413, 'ialcohol');
            i++
        }

            else{
                iobject.destroy();
                iobject = this.add.image(168, 413, 'ialcohol');
            }
    }

    icreate4(){
        if (i == 0){
            iobject = this.add.image(295, 416, 'ibarbijo');
            i++
        }

            else{
                iobject.destroy();
                iobject = this.add.image(295, 416, 'ibarbijo');
            }
    }

    icreate5(){
        if (i == 0){
            iobject = this.add.image(506, 336, 'ibarro');
            i++
        }

            else{
                iobject.destroy();
                iobject = this.add.image(506, 336, 'ibarro');
            }
    }

    icreate6(){
        if (i == 0){
            iobject = this.add.image(648, 345, 'ivirus');
            i++
        }

            else{
                iobject.destroy();
                iobject = this.add.image(648, 345, 'ivirus');
            }   
    }

    icreate7(){
        if (i == 0){
            iobject = this.add.image(567, 426, 'inube');
            i++
        }

            else{
                iobject.destroy();
                iobject = this.add.image(567, 426, 'inube');
            }   
    }

    iErrase(){
        iobject.destroy();
        i--;
    }
}