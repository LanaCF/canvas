const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.clientWidth;
const cHeight = canvas.clientHeight;
const formFigures = document.querySelector('.form-figures');
const parametersBox = document.querySelector('.parameters__box');
const form = document.forms['formFiguresCreate'];
let backgroundColor = '#ffffff';

window.addEventListener('load', () => {
  canvas.style.backgroundColor = '#ffffff';
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
        <div class="figure-parameters">
          <label for="widthSquare">Ширина:</label>
          <input type="number" id="widthSquare" name="width" min="1"><br>
          <label for="heightSquare">Висота:</label>
          <input type="number" id="heightSquare" name="height" min="1"><br>
          <label for="xSquare">X-координата:</label>
          <input type="number" id="xSquare" name="x" min="0"><br>
          <label for="ySquare">Y-координата:</label>
          <input type="number" id="ySquare" name="y" min="0"><br>
          <label for="colorSquare">Колір:</label>
          <input type="color" id="colorSquare" name="color" value="#38bcdb"><br>
          <button type="button" id="createFigure">Створити</button>
        </div>
      `;
      break;
    case 'rectangle':
      parametersBox.innerHTML = `
        <div class="figure-parameters">
          <label for="widthRectangle">Ширина:</label>
          <input type="number" id="widthRectangle" name="width" min="1"><br>
          <label for="heightRectangle">Висота:</label>
          <input type="number" id="heightRectangle" name="height" min="1"><br>
          <label for="xRectangle">X-координата:</label>
          <input type="number" id="xRectangle" name="x" min="0"><br>
          <label for="yRectangle">Y-координата:</label>
          <input type="number" id="yRectangle" name="y" min="0"><br>
          <label for="colorRectangle">Колір:</label>
          <input type="color" id="colorRectangle" name="color" value="#38bcdb"><br>
          <button type="button" id="createFigure">Створити</button>
        </div>
      `;
      break;
    case 'polygon':
      parametersBox.innerHTML = `
        <div class="figure-parameters">
          <label for="pointsPolygon">Кількість точок:</label>
          <input type="number" id="pointsPolygon" name="points" min="3"><br>
          <label for="sizePolygon">Розмір:</label>
          <input type="number" id="sizePolygon" name="size" min="1"><br>
          <label for="xPolygon">X-координата:</label>
          <input type="number" id="xPolygon" name="x" min="0"><br>
          <label for="yPolygon">Y-координата:</label>
          <input type="number" id="yPolygon" name="y" min="0"><br>
          <label for="colorPolygon">Колір:</label>
          <input type="color" id="colorPolygon" name="color" value="#38bcdb"><br>
          <button type="button" id="createFigure">Створити</button>
        </div>
      `;
      break;
    case 'triangle':
      parametersBox.innerHTML = `
        <div class="figure-parameters">
          <label for="baseTriangle">Основа:</label>
          <input type="number" id="baseTriangle" name="base" min="1"><br>
          <label for="heightTriangle">Висота:</label>
          <input type="number" id="heightTriangle" name="height" min="1"><br>
          <label for="xTriangle">X-координата:</label>
          <input type="number" id="xTriangle" name="x" min="0"><br>
          <label for="yTriangle">Y-координата:</label>
          <input type="number" id="yTriangle" name="y" min="0"><br>
          <label for="colorTriangle">Колір:</label>
          <input type="color" id="colorTriangle" name="color" value="#38bcdb"><br>
          <button type="button" id="createFigure">Створити</button>
        </div>
      `;
      break;
    case 'circle':
      parametersBox.innerHTML = `
        <div class="figure-parameters">
          <label for="radiusCircle">Радіус:</label>
          <input type="number" id="radiusCircle" name="radius" min="1"><br>
          <label for="xCircle">X-координата:</label>
          <input type="number" id="xCircle" name="x" min="0"><br>
          <label for="yCircle">Y-координата:</label>
          <input type="number" id="yCircle" name="y" min="0"><br>
          <label for="startAngleCircle">Початковий кут:</label>
          <input type="number" id="startAngleCircle" name="startAngle" min="0" max="360"><br>
          <label for="endAngleCircle">Кінцевий кут:</label>
          <input type="number" id="endAngleCircle" name="endAngle" min="0" max="360"><br>
          <label for="colorCircle">Колір:</label>
          <input type="color" id="colorCircle" name="color" value="#38bcdb"><br>
          <button type="button" id="createFigure">Створити</button>
        </div>
      `;
      break;
    case 'ellipse':
      parametersBox.innerHTML = `
        <div class="figure-parameters">
          <label for="radiusXEllipse">Радіус X:</label>
          <input type="number" id="radiusXEllipse" name="radiusX" min="1"><br>
          <label for="radiusYEllipse">Радіус Y:</label>
          <input type="number" id="radiusYEllipse" name="radiusY" min="1"><br>
          <label for="xEllipse">X-координата:</label>
          <input type="number" id="xEllipse" name="x" min="0"><br>
          <label for="yEllipse">Y-координата:</label>
          <input type="number" id="yEllipse" name="y" min="0"><br>
          <label for="colorEllipse">Колір:</label>
          <input type="color" id="colorEllipse" name="color" value="#38bcdb"><br>
          <button type="button" id="createFigure">Створити</button>
        </div>
      `;
      break;
    case 'line':
      parametersBox.innerHTML = `
        <div class="figure-parameters">
          <label for="xLine1">X1:</label>
          <input type="number" id="xLine1" name="x1" min="0"><br>
          <label for="yLine1">Y1:</label>
          <input type="number" id="yLine1" name="y1" min="0"><br>
          <label for="xLine2">X2:</label>
          <input type="number" id="xLine2" name="x2" min="0"><br>
          <label for="yLine2">Y2:</label>
          <input type="number" id="yLine2" name="y2" min="0"><br>
          <label for="colorLine">Колір:</label>
          <input type="color" id="colorLine" name="color" value="#38bcdb"><br>
          <button type="button" id="createFigure">Створити</button>
        </div>
      `;
      break;
      case 'text':
        parametersBox.innerHTML = `
          <div class="figure-parameters">
            <label for="textInputT">Текст:</label>
            <input type="text" id="textInputT" name="text"><br>
            <label for="xText">X координата:</label>
            <input type="number" id="xText" name="xText"><br>
            <label for="yText">Y координата:</label>
            <input type="number" id="yText" name="yText"><br>
            <label for="fontSizeText">Розмір шрифту:</label>
            <input type="number" id="fontSizeText" name="fontSize" min="1"><br>
            <label for="fontFamilyText">Шрифт:</label>
            <select id="fontFamilyText" name="fontFamily">
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
            </select><br>
            <label for="textColorT">Колір тексту:</label>
            <input type="color" id="textColorT" name="textColor" value="#38bcdb"><br>
            <button type="button" id="createText">Створити</button>
          </div>
        `;
        const createTextButton = document.getElementById('createText');
        createTextButton.addEventListener('click', () => {
          const text = document.getElementById('textInputT').value;
          const fontSize = parseInt(document.getElementById('fontSizeText').value);
          const textColor = document.getElementById('textColorT').value;
          const xText = parseInt(document.getElementById('xText').value);
          const yText = parseInt(document.getElementById('yText').value);
          const fontFamily = document.getElementById('fontFamilyText').value;
          drawText(xText, yText, text, fontSize, textColor, fontFamily);
          hideFigureParameters();
        });
        break;
    default:
      break;
  }
}

parametersBox.addEventListener('click', (event) => {
  if (event.target.id === 'createFigure') {
    switch (formFigures.figures.value) {
      case 'square':
        const width = parseInt(document.getElementById('widthSquare').value);
        const height = parseInt(document.getElementById('heightSquare').value);
        const x = parseInt(document.getElementById('xSquare').value);
        const y = parseInt(document.getElementById('ySquare').value);
        const color = document.getElementById('colorSquare').value;
        drawSquare(x, y, width, height, color);
        hideFigureParameters();
        break;
      case 'rectangle':
        const widthRectangle = parseInt(document.getElementById('widthRectangle').value);
        const heightRectangle = parseInt(document.getElementById('heightRectangle').value);
        const xRectangle = parseInt(document.getElementById('xRectangle').value);
        const yRectangle = parseInt(document.getElementById('yRectangle').value);
        const colorRectangle = document.getElementById('colorRectangle').value;
        drawRectangle(xRectangle, yRectangle, widthRectangle, heightRectangle, colorRectangle);
        hideFigureParameters();
        break;
      case 'polygon':
        const points = parseInt(document.getElementById('pointsPolygon').value);
        const size = parseInt(document.getElementById('sizePolygon').value);
        const xPolygon = parseInt(document.getElementById('xPolygon').value);
        const yPolygon = parseInt(document.getElementById('yPolygon').value);
        const colorPolygon = document.getElementById('colorPolygon').value;
        drawPolygon(xPolygon, yPolygon, points, size, colorPolygon);
        hideFigureParameters();
        break;
      case 'triangle':
        const base = parseInt(document.getElementById('baseTriangle').value);
        const heightTriangle = parseInt(document.getElementById('heightTriangle').value);
        const xTriangle = parseInt(document.getElementById('xTriangle').value);
        const yTriangle = parseInt(document.getElementById('yTriangle').value);
        const colorTriangle = document.getElementById('colorTriangle').value;
        drawTriangle(xTriangle, yTriangle, base, heightTriangle, colorTriangle);
        hideFigureParameters();
        break;
      case 'circle':
        const radius = parseInt(document.getElementById('radiusCircle').value);
        const xC = parseInt(document.getElementById('xCircle').value);
        const yC = parseInt(document.getElementById('yCircle').value);
        const startAngle = parseInt(document.getElementById('startAngleCircle').value);
        const endAngle = parseInt(document.getElementById('endAngleCircle').value);
        const colorC = document.getElementById('colorCircle').value;
        drawCircle(xC, yC, radius, startAngle, endAngle, colorC);
        hideFigureParameters();
        break;
      case 'ellipse':
        const radiusX = parseInt(document.getElementById('radiusXEllipse').value);
        const radiusY = parseInt(document.getElementById('radiusYEllipse').value);
        const xEllipse = parseInt(document.getElementById('xEllipse').value);
        const yEllipse = parseInt(document.getElementById('yEllipse').value);
        const colorEllipse = document.getElementById('colorEllipse').value;
        drawEllipse(xEllipse, yEllipse, radiusX, radiusY, colorEllipse);
        hideFigureParameters();
        break;
      case 'line':
        const x1 = parseInt(document.getElementById('xLine1').value);
        const y1 = parseInt(document.getElementById('yLine1').value);
        const x2 = parseInt(document.getElementById('xLine2').value);
        const y2 = parseInt(document.getElementById('yLine2').value);
        const colorLine = document.getElementById('colorLine').value;
        drawLine(x1, y1, x2, y2, colorLine);
        hideFigureParameters();
        break;
      case 'text':
        const text = document.getElementById('textInputT').value;
        const fontSize = parseInt(document.getElementById('fontSizeText').value);
        const textColor = document.getElementById('textColorT').value;
        const xText = parseInt(document.getElementById('xText').value);
        const yText = parseInt(document.getElementById('yText').value);
        const fontFamily = document.getElementById('fontFamilyText').value;
        drawText(xText, yText, text, fontSize, textColor, fontFamily);
        hideFigureParameters();
        break;
      default:
        break;
    }
  }
});

function hideFigureParameters() {
  const figureParameters = document.querySelector('.figure-parameters');
  figureParameters.style.display = 'none';

  const startOption = document.querySelector('.start');
  startOption.selected = true;
}

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawRectangle(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawPolygon(x, y, points, size, color) {
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

  for (let i = 1; i <= points; i++) {
    ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / points), y + size * Math.sin(i * 2 * Math.PI / points));
  }

  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawTriangle(x, y, base, height, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + base, y);
  ctx.lineTo(x + base / 2, y - height);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawCircle(x, y, radius, startAngle, endAngle, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, (startAngle * Math.PI) / 180, (endAngle * Math.PI) / 180);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawEllipse(x, y, radiusX, radiusY, color) {
  ctx.beginPath();
  ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
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

function drawText(x, y, text, fontSize, textColor, fontFamily) {
  ctx.fillStyle = textColor;
  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.fillText(text, x, y);
}

// Функція для фону
form.addEventListener('click', function(event) {
  if (event.target.name === 'addBgdColorBtn') { 
    backgroundColor = form.querySelector('input[type="color"]').value;
    canvas.style.backgroundColor = backgroundColor;
  }
});

// Функція для очищення канви
document.querySelector('[name="resetBtn"]').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.backgroundColor = '#ffffff';
});
