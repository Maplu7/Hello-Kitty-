import Phaser from "phaser";

// so old scene files that reference Phaser directly still work
window.Phaser = Phaser;

import { Boot } from "./scenes/Boot";
import { Preloader } from "./scenes/Preloader";
//import { MainMenu } from "./scenes/MainMenu";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";

export function createGame(parent) {
  const config = {
    type: Phaser.AUTO,
    
    width: window.innerWidth,
    height: window.innerHeight,
    parent,

    transparent: true,
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
      default: "arcade",
      arcade: { gravity: { y: 300 }, debug: false },
    },
    scene: [Boot, Preloader, Game, GameOver],
  };

  return new Phaser.Game(config);
}
