//definimos la variable más importante del juego y seteamos la info que contiene (configuraciones primordiales para que el juego funcione).
var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH, //centramos el juego a la mitad de la ventana del navegador.
    width: 800, //ancho de la pantalla.
    height: 600, //alto de la pantalla.
  },
  physics: {
    default: "arcade", //tipo de físicas usadas en nuestro juego.
    arcade: {
      gravity: { y: 0 }, //gravedad del entorno.
      debug: false, //si deseamos habilitar o no el debugging (permite detectar errores en el código).
    },
  },
  scene: [scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8], //escenas que abarcan al juego (menús, niveles, etc).
};

//inicializamos phaser con los ajustes definidos anteriormente (variable "config" - línea 2).
var game = new Phaser.Game(config);

//declaramos las variables que utilizará nuestro juego en las demás escenas y, si es necesario, seteamos valores (algunos valores serán seteados máds adelante).
var lives = 3;
var score = 0;
var nivel = 1;
var nivsup = 0;
var menu;
var delay;
var porcentaje;
var timedEvent;
var timedEvent2;
var timedEvent3;
var player;
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
var iobject;
var velX;
var velY;
var velX2;
var velY2;
var vel2X;
var vel2X2;
var vel2Y;
var vel2Y2;
var x;
var x2;
var y;
var y2;
var i;
var track;
var bpausa;
var pausa;
var boton;
var boton2;
var boton3;
var boton4;
var fjabon;
var fvacuna;
var falcohol;
var fbarbijo;
var fbarro;
var fvirus;
var fnube;