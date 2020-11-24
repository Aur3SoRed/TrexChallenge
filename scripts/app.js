document.addEventListener('DOMContentLoaded', () => {
  const trex = document.querySelector('.trex');
  const grid = document.querySelector('.grid');
  //const obstacle = document.querySelector('.obstacle');
  let dive = false;
  let fall = 0.9;

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

  function createObstacles() {
    let randomTiming = Math.random() * 2000;
    let obstaclePosition = 1000;
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    grid.appendChild(obstacle);
    console.log('works?');
    obstacle.style.left = obstaclePosition + 'px';

    let chronoID = setInterval(function () {
      //movement
      if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {
        clearInterval(chronoID);
        alert('Game Over');
      }
      obstaclePosition -= 10;
      obstacle.style.left = obstaclePosition + 'px';
    }, 20);
    setTimeout(createObstacles, randomTiming);
  }
  createObstacles();
});
