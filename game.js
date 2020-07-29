var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: false
        }
    },
    scene: [scene1, scene2, scene3, scene4, scene5, scene6]
};

var game = new Phaser.Game(config);
var lives = 3;  

var timedEvent;
var timedEvent2;
var player;
var score;
var cursors;
var bads;
var goods;
var colliders;
var patron;
var puntaje;
var corazones;
var progressBar;
var progressBox;
var vacunas;
var barbijos;
var arboles;
var fuente;
var contvac;
var velX;
var velY;
var velX2;
var velY2;
var iobject;
var i;                