var box = document.getElementById('display');

function toScreen(x) {
  box.value += x;
  if (x === 'c') {
    box.value = '';
  }
}

function equal() {
  box.value = eval(box.value);
}
