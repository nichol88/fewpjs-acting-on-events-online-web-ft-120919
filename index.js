// Your code here
dodger = document.getElementById('dodger')

document.addEventListener('keydown', function(e) {
  if (e.key == 'ArrowRight') {
    moveDodgerRight();
  }
});