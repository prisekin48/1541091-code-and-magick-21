'use strict';

var CONSTS = {
  CLOUD_WIDTH: 420,
  CLOUD_HEIGHT: 270,
  CLOUD_X: 100,
  CLOUD_Y: 10,
  COLUMN_WIDTH: 40,
  MAX_COLUMN: 150,
  BASE_GAP: 50,
  TINY_GAP: 2.5,
  SMALL_GAP: 15,
  GAP: 32.5
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CONSTS.CLOUD_WIDTH, CONSTS.CLOUD_HEIGHT);
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

    var columnHeight = Math.round(CONSTS.MAX_COLUMN * times[i - 1] / maxTime);

    ctx.fillText(`${names[i - 1]}`, (CONSTS.CLOUD_X + CONSTS.SMALL_GAP) * i, CONSTS.CLOUD_HEIGHT - CONSTS.TINY_GAP);

    if (names[i - 1] === 'Вы') {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240, ${Math.round(Math.random() * 100)}%, 50%)`;
    }

    ctx.fillRect((CONSTS.CLOUD_X + CONSTS.SMALL_GAP) * i,
        (CONSTS.CLOUD_Y + CONSTS.CLOUD_HEIGHT) - columnHeight - CONSTS.GAP,
        CONSTS.COLUMN_WIDTH,
        columnHeight
    );

    ctx.fillStyle = `#000`;
    ctx.fillText(`${Math.round(times[i - 1])}`, (CONSTS.CLOUD_X + CONSTS.SMALL_GAP) * i, CONSTS.CLOUD_HEIGHT - columnHeight - CONSTS.GAP);
  }
};
