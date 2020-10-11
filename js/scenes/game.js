import main from "./main.js";
import selector from "./selector.js";
import gameplay from "./gameplay.js";
import store from "./store.js";
import options from "./options.js";
import credits from "./credits.js";
import help from "./help.js";
import controls from "./controls.js";

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
  scene: [main, selector, gameplay, store, options, credits, help, controls], //escenas que abarcan al juego (menús, niveles, etc).
};

//inicializamos phaser con los ajustes definidos anteriormente (variable "config" - línea 2).
game = new Phaser.Game(config);

isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) type = "pointerdown";
else {
  type = "pointerover";
}
