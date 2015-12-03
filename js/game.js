var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
var game = new Phaser.Game(800, 600, Phaser.AUTO, '');


game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('play',playState);
game.state.add('menu',menuState);

game.state.start('play');