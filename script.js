const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const ball = document.getElementById('ball');
const sc_p1= document.getElementById('sc_p1');
const sc_p2= document.getElementById('sc_p2');


let paddle1Y = 200;
let paddle2Y = 200;
let ballX = 390;
let ballY = 190;
let ballSpeedX = 2;
let ballSpeedY = 2;
let score_player1= 0;
let score_player2= 0;

sc_p1.textContent= score_player1;
sc_p2.textContent= score_player2;

document.addEventListener('keydown', (e) => {
    if (e.key === 'z' && paddle1Y > 60) paddle1Y -= 20;
    if (e.key === 's' && paddle1Y < 340) paddle1Y += 20;
    if (e.key === 'ArrowUp' && paddle2Y > 60) paddle2Y -= 20;
    if (e.key === 'ArrowDown' && paddle2Y < 340) paddle2Y += 20;
    paddle1.style.top = paddle1Y + 'px';
    paddle2.style.top = paddle2Y + 'px';
});

function incrementBallSpeed() {
    ballSpeedX *= 1.2;
    ballSpeedY *= 1.2;
}

function gameLoop() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY >= 380) ballSpeedY *= -1;
    if (ballX <= 0 || ballX >= 780) ballSpeedX *= -1;

    if (ballX <= 20 && ballY >= paddle1Y && ballY <= paddle1Y + 100) ballSpeedX *= -1;
    if (ballX >= 760 && ballY >= paddle2Y && ballY <= paddle2Y + 100) ballSpeedX *= -1;

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    requestAnimationFrame(gameLoop);
    
}
setInterval(incrementBallSpeed, 20000);
gameLoop();