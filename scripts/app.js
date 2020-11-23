document.addEventListener('DOMContentLoaded', () => {
  const trex = document.querySelector('.trex');

  function control(bar) {
    if (bar.keyCode === 32) {
      jump();
    }
  }
  document.addEventListener('keyup', control);

  function jump() {
    let position = 0;
    let chronoID = setInterval(function () {
      console.log('theres a jump');
      position += 30;
      trex.style.bottom = position + 'px';
    }, 30);
  }
});
