class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }

  preload() {
    // Charger les ressources nécessaires (images, sons, etc.)
    this.load.image("background", "assets/images/background.jpg");
    this.load.image("player", "assets/images/player.png");
  }

  create() {
    // Ajouter le fond
    this.add.image(400, 300, "background");

    // Ajouter le joueur
    this.player = this.add.sprite(400, 300, "player");

    // Activer les entrées clavier
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Mettre à jour le jeu à chaque frame
    if (this.cursors.left.isDown) {
      this.player.x -= 2;
    }
    if (this.cursors.right.isDown) {
      this.player.x += 2;
    }
    if (this.cursors.up.isDown) {
      this.player.y -= 2;
    }
    if (this.cursors.down.isDown) {
      this.player.y += 2;
    }
  }
}

export default MainScene;
