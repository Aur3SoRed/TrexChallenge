document.addEventListener('DOMContentLoaded', () => {
  const trex = document.querySelector('.trex');
  const grid = document.querySelector('.grid');
  const alert = document.getElementById('alert');
  const resultDisplay = document.querySelector('.span');
  let dive = false;
  let fall = 0.9;
  let addScore = 0;
  let gameOver = false;

  function control(bar) {
    if (bar.keyCode === 32) {
      if (!dive) {
        dive = true;
        jump();
      }
    }
  }
  document.addEventListener('keypress', control);
  //position;
  let position = 0;
  function jump() {
    let count = 0;
    let chronoID = setInterval(function () {
      // gravity
      if (count === 15) {
        clearInterval(chronoID);
        console.log('stop');
        let downChronoID = setInterval(function () {
          if (count === 0) {
            clearInterval(downChronoID);
            dive = false;
          }
          position -= 5;
          count--;
          position = position * fall;
          console.log('suma');
          addScore += 6;
          console.log('y sigue');
          trex.style.bottom = position + 'px';
        }, 20);
      }
      //for move
      console.log('theres a jump');
      position += 30;

      count++;
      position = position * fall;
      trex.style.bottom = position + 'px';
      console.log(trex.style.bottom);
    }, 20);
  }

  /////////////SCORING///////
  resultDisplay.textContent = addScore;
  /////////////////////////////////

  function createObstacles() {
    let randomTiming = Math.random() * 4500;
    let obstaclePosition = 1000;
    const obstacle = document.createElement('div');
    if (!gameOver) obstacle.classList.add('obstacle');
    grid.appendChild(obstacle);
    //console.log('works?');
    obstacle.style.left = obstaclePosition + 'px';

    let chronoID = setInterval(function () {
      //movement
      if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {
        clearInterval(chronoID);
        alert.innerHTML = 'Game Over';
        gameOver = true;
        //remove children
        while (grid.firstChild) {
          grid.removeChild(grid.lastChild);
        }
      }
      obstaclePosition -= 10;
      obstacle.style.left = obstaclePosition + 'px';
    }, 20);
    if (!gameOver) setTimeout(createObstacles, randomTiming);
  }
  createObstacles();
});
