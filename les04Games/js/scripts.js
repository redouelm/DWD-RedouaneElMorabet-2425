/* global Game, Sprite, Preloader */

// DECLARATIONS

// variabelen
let numMisses = 0;
let numHits = 0;
const numBalloons = 20;
const playerWin = undefined;

// DOM
const spnHits = document.querySelector('#hits');
const spnMisses = document.querySelector('#misses');
const spnHighscore = document.querySelector('#highscore');

// create game
const game = new Game('#game');
game.setBackground('/img/startscreen.png');

// create sprites and add to game
const sprGround = new Sprite({ id: 'ground', url: '/img/ground.png', w: 960, h: 106, x: 480, y: 614 });
const sprClouds = new Sprite({ id: 'clouds', url: '/img/clouds.png', w: 300, h: 83, x: 480, y: 20 });
const sprHeli = new Sprite({ id: 'heli', url: '/img/heli.png', w: 126, h: 66, x: 480, y: 80, frames: [0, 126] });
const sprPlay = new Sprite({ id: 'play', url: '/img/play.png', w: 111, h: 41, x: 190, y: 350 });
const sprRabbit = new Sprite({ id: 'play', url: '/img/rabbit.png', w: 45, h: 75, x: 240, y: 545, frames: [0, 200, 400, 600, 800, 1000, 1200] });
game.addSprite(sprGround);
game.addSprite(sprClouds);
game.addSprite(sprHeli);
game.addSprite(sprPlay);
game.addSprite(sprRabbit);

// restore high score
const highscore = localStorage.getItem('highscore');
if (highscore) spnHighscore.innerHTML = highscore;

// FUNCTIONS

// start the game
function startGame() {
	// reset previous game
	spnHits.innerHTML = numHits = 0;
	spnMisses.innerHTML = numMisses = 0;

	// remove play button
	game.removeSprite(sprPlay);

	// switch background 
	game.setBackground('/img/sky.png');

	// initialize ground, clouds, and heli sprites
	sprGround.x = 0;
	sprGround.speedX = -0.5;
	sprClouds.x = 0;
	sprClouds.speedX = -2;
	sprHeli.x = 200;
	sprHeli.animDrag = 5;
	sprRabbit.animDrag = 15;

	// start game loop
	doLoop();
}

// game loop
function doLoop() {
	// repaint all
	game.repaint();


	// clouds logics
	if (sprClouds.x < -sprClouds.w) sprClouds.x = game.w;

	// ground logics
	if (sprGround.x < -game.w) sprGround.x = 0;

	// heli logics
	if (sprHeli.y < 0) sprHeli.y = 0;
	if (sprHeli.x < -sprHeli.w / 2) sprHeli.x = -sprHeli.w / 2;
	if (sprHeli.x > game.w - sprHeli.w / 2) sprHeli.x = game.w - sprHeli.w / 2;
	if (sprHeli.y > 500) sprHeli.y = 500;

	sprRabbit.x += 1; // Laat de rabbit naar rechts lopen
	if (sprRabbit.x > game.w + sprRabbit.w) sprRabbit.x = 0; // Reset bij het einde van het scherm


	// Heli positie updaten
	sprHeli.x += sprHeli.speedX;

	// Grenzen van het scherm bewaken
	if (sprHeli.x < 0) sprHeli.x = 0;
	if (sprHeli.x > game.w - sprHeli.w) sprHeli.x = game.w - sprHeli.w;

	if (sprHeli.y < 0) sprHeli.y = 0; // Voorkom dat de heli boven het scherm verdwijnt
	if (sprHeli.y > game.h - sprHeli.h) sprHeli.y = game.h - sprHeli.h; // Voorkom dat de heli op de grond verdwijnt


	// Repaint en volgende frame aanvragen
	game.repaint();

	// request next loop
	requestAnimationFrame(doLoop);
}

// EVENT HANDLERS

function handlePlay() {
	startGame();
}

// events
sprPlay.node.addEventListener('click', handlePlay);


// Event listener voor toetsenbord (alleen keydown)
document.addEventListener('keydown', (event) => {
	switch (event.key) {
	case 'ArrowLeft':
		sprHeli.speedX = -2; // Beweeg naar links
		sprHeli.direction = -1; // Spiegel naar links
		break;
	case 'ArrowRight':
		sprHeli.speedX = 2; // Beweeg naar rechts
		sprHeli.direction = 1; // Normale richting
		break;
	case 'ArrowUp':
		sprHeli.speedY = -2; // Beweeg omhoog
		break;
	case 'ArrowDown':
		sprHeli.speedY = 2; // Beweeg omlaag
		break;
	}
});

