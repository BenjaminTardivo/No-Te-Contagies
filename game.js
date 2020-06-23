var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: false
        }
    },
    scene: [Scene1, Scene2]
};

var game = new Phaser.Game(config);
var gameOver;

var player;
var score;
var cursors;
var bombs;
var colliders;
var lives = 3;
                   