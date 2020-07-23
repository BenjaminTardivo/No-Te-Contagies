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
    scene: [Scene1, Scene3, Scene2]
};

var game = new Phaser.Game(config);
var gameOver;

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


var timedEvent;
var timedEvent2;
var lives = 3;
                                                               