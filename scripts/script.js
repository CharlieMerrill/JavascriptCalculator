var show = document.getElementById('display');
var entry = "";

function toScreen(x) {
  if (x === 'c') {
    show.value = '';
    entry = '';
  } else if (x === '*' || x === '/' || x === '+' || x === '-') {
    show.value = '';
    entry += x;
  } else {
    show.value += x;
    entry += x;
  }
}

function equal() {
  show.value = eval(entry);
}
