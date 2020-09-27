'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var COLUMN_WIDTH = 40;
var BASE_GAP = 50;
var MAX_COLUMN = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, 100, 10, `#fff`);

  ctx.fillStyle = `#000`;


  ctx.font = `16px Mono`;
  ctx.fillText(`Ура вы победили!`, 140, 40);
  ctx.fillText(`Список результатов: `, 140, 60);

  var maxTime = getMaxElement(times);

  for (var i = 1; i <= names.length; i++) {

    var columnHeight = Math.round(MAX_COLUMN * times[i - 1] / maxTime);

    ctx.fillText(`${names[i - 1]}`, (CLOUD_X + BASE_GAP * 0.3) * i, CLOUD_HEIGHT - BASE_GAP * 0.05);

    if (names[i - 1] === 'Вы') {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240, ${Math.round(Math.random() * 100)}%, 50%)`;
    }

    ctx.fillRect((CLOUD_X + BASE_GAP * 0.3) * i,
        (CLOUD_Y + CLOUD_HEIGHT) - columnHeight - BASE_GAP * 0.65,
        COLUMN_WIDTH,
        columnHeight
    );

    ctx.fillStyle = `#000`;
    ctx.fillText(`${Math.round(times[i - 1])}`, (CLOUD_X + BASE_GAP * 0.3) * i, CLOUD_HEIGHT - columnHeight - BASE_GAP * 0.65);
  }
};
