// Your code here
let dodger = document.getElementById('dodger')

document.addEventListener('keydown', function(e) {
  if (e.key == 'ArrowRight') {
    moveDodgerRight();
  }
});

function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace('px','');
  let left = parseInt(leftNumbers, 10);

  if (left < 400) {
    dodger.style.left = `${left + 1}px`
  }
}
