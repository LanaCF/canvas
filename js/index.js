const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.clientWidth;
const cHeight = canvas.clientHeight;
const formFigures = document.querySelector('.form-figures');
const parametersBox = document.querySelector('.parameters__box');
const form = document.forms['formTagCreate'];

form.addEventListener('click', function(event) {
  if (event.target.name === 'addTagBtn') { // Перевірка, чи був натиснутий відповідний кнопка
    const color = form.querySelector('input[type="color"]').value; // Отримання значення кольору з поля вводу
    canvas.style.backgroundColor = color; // Встановлення вибраного кольору як фон канви
  }
});

formFigures.addEventListener('change', (event) => {
  const selectedFigure = event.target.value;
  renderParameters(selectedFigure);
});

function renderParameters(selectedFigure) {
  parametersBox.innerHTML = '';

  switch (selectedFigure) {
    case 'square':
      parametersBox.innerHTML = `
        <label for="width">Ширина:</label>
        <input type="number" id="width" name="width" min="1"><br>
        <label for="height">Висота:</label>
        <input type="number" id="height" name="height" min="1"><br>
        <label for="x">X-координата:</label>
        <input type="number" id="x" name="x" min="0"><br>
        <label for="y">Y-координата:</label>
        <input type="number" id="y" name="y" min="0"><br>
        <label for="color">Колір:</label>
        <input type="color" id="color" name="color"><br>
        <button type="button" id="createFigure">Створити</button>
      `;
      break;
    case 'rectangle':
      parametersBox.innerHTML = `
        <label for="width">Ширина:</label>
        <input type="number" id="width" name="width" min="1"><br>
        <label for="height">Висота:</label>
        <input type="number" id="height" name="height" min="1"><br>
        <label for="x">X-координата:</label>
        <input type="number" id="x" name="x" min="0"><br>
        <label for="y">Y-координата:</label>
        <input type="number" id="y" name="y" min="0"><br>
        <label for="color">Колір:</label>
        <input type="color" id="color" name="color"><br>
        <button type="button" id="createFigure">Створити</button>
      `;
      break;
    case 'polygon':
      parametersBox.innerHTML = `
        <label for="points">Кількість точок:</label>
        <input type="number" id="points" name="points" min="3"><br>
        <label for="size">Розмір:</label>
        <input type="number" id="size" name="size" min="1"><br>
        <label for="x">X-координата:</label>
        <input type="number" id="x" name="x" min="0"><br>
        <label for="y">Y-координата:</label>
        <input type="number" id="y" name="y" min="0"><br>
        <label for="color">Колір:</label>
        <input type="color" id="color" name="color"><br>
        <button type="button" id="createFigure">Створити</button>
      `;
      break;
    case 'triangle':
      parametersBox.innerHTML = `
        <label for="base">Основа:</label>
        <input type="number" id="base" name="base" min="1"><br>
        <label for="height">Висота:</label>
        <input type="number" id="height" name="height" min="1"><br>
        <label for="x">X-координата:</label>
        <input type="number" id="x" name="x" min="0"><br>
        <label for="y">Y-координата:</label>
        <input type="number" id="y" name="y" min="0"><br>
        <label for="color">Колір:</label>
        <input type="color" id="color" name="color"><br>
        <button type="button" id="createFigure">Створити</button>
      `;
      break;
    case 'circle':
      parametersBox.innerHTML = `
        <label for="radius">Радіус:</label>
        <input type="number" id="radius" name="radius" min="1"><br>
        <label for="x">X-координата:</label>
        <input type="number" id="x" name="x" min="0"><br>
        <label for="y">Y-координата:</label>
        <input type="number" id="y" name="y" min="0"><br>
        <label for="color">Колір:</label>
        <input type="color" id="color" name="color"><br>
        <button type="button" id="createFigure">Створити</button>
      `;
      break;
    case 'ellipse':
      parametersBox.innerHTML = `
        <label for="radiusX">Радіус X:</label>
        <input type="number" id="radiusX" name="radiusX" min="1"><br>
        <label for="radiusY">Радіус Y:</label>
        <input type="number" id="radiusY" name="radiusY" min="1"><br>
        <label for="x">X-координата:</label>
        <input type="number" id="x" name="x" min="0"><br>
        <label for="y">Y-координата:</label>
        <input type="number" id="y" name="y" min="0"><br>
        <label for="color">Колір:</label>
        <input type="color" id="color" name="color"><br>
        <button type="button" id="createFigure">Створити</button>
      `;
      break;
    case 'line':
      parametersBox.innerHTML = `
        <label for="x1">X1:</label>
        <input type="number" id="x1" name="x1" min="0"><br>
        <label for="y1">Y1:</label>
        <input type="number" id="y1" name="y1" min="0"><br>
        <label for="x2">X2:</label>
        <input type="number" id="x2" name="x2" min="0"><br>
        <label for="y2">Y2:</label>
        <input type="number" id="y2" name="y2" min="0"><br>
        <label for="x">X-координата:</label>
        <input type="number" id="x" name="x" min="0"><br>
        <label for="y">Y-координата:</label>
        <input type="number" id="y" name="y" min="0"><br>
        <label for="color">Колір:</label>
        <input type="color" id="color" name="color"><br>
        <button type="button" id="createFigure">Створити</button>
      `;
      break;
    case 'text':
      parametersBox.innerHTML = `
      <label for="text">Текст:</label>
      <input type="text" id="text" name="text"><br>
      <label for="x">X координата:</label>
      <input type="number" id="x" name="x"><br>
      <label for="y">Y координата:</label>
      <input type="number" id="y" name="y"><br>
      <label for="fontSize">Розмір шрифту:</label>
      <input type="number" id="fontSize" name="fontSize" min="1"><br>
      <label for="fontFamily">Шрифт:</label>
      <select id="fontFamily" name="fontFamily">
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
      </select><br>
      <label for="fontColor">Колір тексту:</label>
      <input type="color" id="fontColor" name="fontColor"><br>
      <button type="button" id="createText">Створити текст</button>
      `;
      break;
    default:
      break;
  }
}

parametersBox.addEventListener('click', (event) => {
  if (event.target.id === 'createFigure') {
    // const x = parseInt(document.getElementById('x').value);
    // const y = parseInt(document.getElementById('y').value);

    switch (formFigures.tag.value) {
      case 'square':
        const width = parseInt(document.getElementById('width').value);
        const height = parseInt(document.getElementById('height').value);
        const x = document.getElementById('x').value;
        const y = document.getElementById('y').value;
        const color = document.getElementById('color').value;
        drawRectangle(x, y, width, height, color);
        break;
      case 'rectangle':
        const widthRectangle = document.getElementById('width').value;
        const heightRectangle = document.getElementById('height').value;
        const colorRectangle = document.getElementById('color').value;
        drawRectangle(widthRectangle, heightRectangle, colorRectangle);
        break;
      case 'polygon':
        const points = document.getElementById('points').value;
        const size = document.getElementById('size').value;
        const colorPolygon = document.getElementById('color').value;
        drawPolygon(points, size, colorPolygon);
        break;
      case 'triangle':
        const base = document.getElementById('base').value;
        const heightTriangle = document.getElementById('height').value;
        const colorTriangle = document.getElementById('color').value;
        drawTriangle(base, heightTriangle, colorTriangle);
        break;
      case 'circle':
        const radius = document.getElementById('radius').value;
        const colorCircle = document.getElementById('color').value;
        drawCircle(radius, colorCircle);
        break;
      case 'ellipse':
        const radiusX = document.getElementById('radiusX').value;
        const radiusY = document.getElementById('radiusY').value;
        const colorEllipse = document.getElementById('color').value;
        drawEllipse(radiusX, radiusY, colorEllipse);
        break;
      case 'line':
        const x1 = document.getElementById('x1').value;
        const y1 = document.getElementById('y1').value;
        const x2 = document.getElementById('x2').value;
        const y2 = document.getElementById('y2').value;
        const colorLine = document.getElementById('color').value;
        drawLine(x1, y1, x2, y2, colorLine);
        break;
      case 'text':
        const text = document.getElementById('text').value;
        const fontSize = document.getElementById('fontSize').value;
        const textColor = document.getElementById('textColor').value;
        const xText = document.getElementById('x').value;
        const yText = document.getElementById('y').value;
        
        ctx.fillStyle = textColor;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText(text, xText, yText);
        break;
      default:
        break;
    }
  }
});

function drawSquare(width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawRectangle(width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawPolygon(points, size, color) {
  ctx.beginPath();
  ctx.moveTo(100, 100);
  for (let i = 0; i < points; i++) {
    ctx.lineTo(100 + size * Math.cos(2 * Math.PI * i / points), 100 + size * Math.sin(2 * Math.PI * i / points));
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawTriangle(base, height, color) {
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(100 + base, 100);
  ctx.lineTo(100 + base / 2, 100 - height);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawCircle(radius, color) {
  ctx.beginPath();
  ctx.arc(100, 100, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawEllipse(radiusX, radiusY, color) {
  ctx.beginPath();
  ctx.ellipse(100, 100, radiusX, radiusY, Math.PI / 4, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.stroke();
}

function drawText(x, y, text, fontSize, textColor) {
  ctx.fillStyle = textColor;
  ctx.font = `${fontSize}px Arial`;
  ctx.fillText(text, x, y);
}

// Функція для очищення канви
document.querySelector('[name="resetBtn"]').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff'; // Встановлюємо колір фону на білий
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Заповнюємо фон білим кольором
});
