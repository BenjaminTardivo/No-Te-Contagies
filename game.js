var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: true
        }
    },
    scene: [Scene1, Scene2]
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
var scoreText;

var timedEvent;
var timedEvent2;
var lives = 3;
                   