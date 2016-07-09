/// <reference path="./definitions.d.ts"/>

import { Boot, Preload, Main } from './states/index.ts';

class Game extends Phaser.Game {
  constructor() {
    super({
      width: 960,
      height: 720,
      transparent: false,
      enableDebug: true,
      renderer: Phaser.AUTO,
    });

    this.state.add('boot', Boot);
    this.state.add('preload', Preload);
    this.state.add('main', Main);

    this.state.start('boot');
  }
}

window.onload = function() {
  new Game();
};
