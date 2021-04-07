<! -- Ashique Arman -->

const canvas = document.getElementById("canvas");
const colorSelected = document.getElementById("color");
const clear = document.getElementById("clear");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const ctx = canvas.getContext("2d");
var sizeBox = document.getElementById("size");

let size = 20;
let isPressed = false;
let color;
let x;
let y;

increase.addEventListener("click", () => {
  size += 1;
  sizeBox.innerHTML = size;
});

decrease.addEventListener("click", () => {
  if (size > 0) {
    size -= 1;
    sizeBox.innerHTML = size;
  }
});

clear.addEventListener("click", () => {
  location.reload();
});

canvas.addEventListener("mousedown", e => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", e => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", e => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = colorSelected.value;
  ctx.fill();
};

drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = colorSelected.value;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

function saveAsImage() {
  var canv = document.getElementById("canvas");
  canv.toBlob(blob => {
    saveAs(blob, "image.png");
  });
}
