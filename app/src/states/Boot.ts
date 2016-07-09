export class Boot extends Phaser.State {
  public preload() {
    this.load.image('preload-bar', 'assets/loading.png');
  }

  public create() {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
    this.game.state.start('preload');
  }
}
