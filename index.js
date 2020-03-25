// Your code here
let dodger = document.getElementById('dodger')

document.addEventListener('keydown', function(e) {
  if (e.key == 'ArrowRight') {
    console.log(e.key)
    moveDodgerRight();
  }
});

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px','');
  let left = parseInt(leftNumbers, 10);

  if (left < 400) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px','');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
