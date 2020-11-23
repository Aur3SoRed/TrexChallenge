document.addEventListener('DOMContentLoaded', () => {
  const trex = document.querySelector('.trex');

  function control(bar) {
    if (bar.keyCode === 32) {
      jump();
    }
  }
  document.addEventListener('keypress', control);

  function jump() {
    let position = 0;
    let chronoID = setInterval(function () {
      // gravity
      if (position === 150) {
        console.log('stop');
        position -= 30;
        trex.style.bottom = position + 'px';
      }
      //for move
      console.log('theres a jump');
      position += 30;
      trex.style.bottom = position + 'px';
    }, 20);
  }
});
