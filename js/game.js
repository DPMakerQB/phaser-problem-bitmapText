const config = {
    type: Phaser.CANVAS,
    parent: 'game',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.bitmapFont('lato', 'assets/lato_0.png', 'assets/lato.xml');
}

function create() {
    this.add.bitmapText(0, 0, 'lato', 'Testing').setOrigin(0);
}