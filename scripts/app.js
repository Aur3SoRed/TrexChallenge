document.addEventListener('DOMContentLoaded', () => {
  const trex = document.querySelector('.trex');
  let dive = false;

  function control(bar) {
    if (bar.keyCode === 32) {
      if (!dive) {
        dive = true;
        jump();
      }
    }
  }
  document.addEventListener('keypress', control);

  function jump() {
    let position = 0;
    let chronoID = setInterval(function () {
      // gravity
      if (position === 150) {
        clearInterval(chronoID);
        console.log('stop');
        let downChronoID = setInterval(function () {
          if (position === 0) {
            clearInterval(downChronoID);
            dive = false;
          }
          position -= 30;
          trex.style.bottom = position + 'px';
        }, 20);
      }
      //for move
      console.log('theres a jump');
      position += 30;
      trex.style.bottom = position + 'px';
    }, 20);
  }
});
