export class Preload extends Phaser.State {
  private preloadBar: Phaser.Sprite;

  public preload() {
    this.preloadBar = this.add.sprite(290, 290, 'preload-bar');
    this.load.setPreloadSprite(this.preloadBar);

    // load stuff

  }

  public create() {
    this.game.state.start('main');
  }
}
