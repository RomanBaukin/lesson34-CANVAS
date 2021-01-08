'use strict';

const canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  color = document.getElementById('color'),
  brushWidth = document.getElementById('brush_width'),
  olympicRings = document.getElementById('olympic_rings').getContext('2d');

const angle = (degrees = 360) => (Math.PI / 180) * degrees;

color.addEventListener('input', () => (ctx.strokeStyle = color.value));
brushWidth.addEventListener('input', () => (ctx.lineWidth = brushWidth.value));

canvas.addEventListener('mousemove', (event) => {
  const x = event.offsetX,
    y = event.offsetY,
    mx = event.movementX,
    my = event.movementY;

  if (event.buttons > 0) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - mx, y - my);
    ctx.stroke();
    ctx.closePath();
  }
});

olympicRings.lineWidth = '5';

olympicRings.beginPath();

olympicRings.moveTo(100, 150);
olympicRings.arc(75, 150, 25, 0, angle(360), false);
olympicRings.strokeStyle = 'blue';

olympicRings.stroke();

olympicRings.beginPath();

olympicRings.moveTo(160, 150);
olympicRings.arc(135, 150, 25, 0, angle(360), false);
olympicRings.strokeStyle = 'black';

olympicRings.stroke();

olympicRings.beginPath();

olympicRings.moveTo(220, 150);
olympicRings.arc(195, 150, 25, 0, angle(360), false);
olympicRings.strokeStyle = 'red';

olympicRings.stroke();

olympicRings.beginPath();

olympicRings.moveTo(130, 175);
olympicRings.arc(105, 175, 25, 0, angle(360), false);
olympicRings.strokeStyle = 'yellow';

olympicRings.stroke();

olympicRings.beginPath();

olympicRings.moveTo(190, 175);
olympicRings.arc(165, 175, 25, 0, angle(360), false);
olympicRings.strokeStyle = 'green';

olympicRings.stroke();
