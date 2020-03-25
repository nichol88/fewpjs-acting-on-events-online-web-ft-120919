// Your code here
let dodger = document.getElementById('dodger')

document.addEventListener('keydown', function(e) {
  if (e.key == 'ArrowRight') {
    console.log(e.key)
    moveDodgerRight();
  } else if (e.key == 'ArrowLeft') {

  }
});

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px','');
  let left = parseInt(leftNumbers, 10);

  if (left < 360) {
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
