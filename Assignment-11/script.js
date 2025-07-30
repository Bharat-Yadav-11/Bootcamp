let count = 0;

const counter = document.getElementById("counter");

function updateCounter() {
  counter.textContent = count;
  counter.style.color = count > 0 ? "#27ae60" : count < 0 ? "#c0392b" : "#333";
}

function increase() {
  count++;
  updateCounter();
}

function decrease() {
  count--;
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}
