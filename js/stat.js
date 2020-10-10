'use strict';

var Consts = {
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

/** Renders a rectangle with given arguments.
 *  @param {object} ctx - canvas context
 *  @param {int} x - x-axis coordinates of the rectangle beginning
 *  @param {int} y - y-axis coordinates of the rectangle beginning
 *  @param {string} color - rectangle color
 */
var renderRect = function (ctx, x, y, color) { // find and rename
  ctx.fillStyle = color;
  ctx.fillRect(x, y, Consts.CLOUD_WIDTH, Consts.CLOUD_HEIGHT);
};

/** Returns an element of the given array with a max value.
 *  @param {array} arr - array of elements
 *  @return {object} any item of the array
 */
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


/** Renders players' scores. Takes the following arguments:
 *  @param {object} ctx - canvas context;
 *  @param {array} names - array of the players' names;
 *  @param {array} times - array of the players' times.
 */
window.renderStatistics = function (ctx, names, times) {
  renderRect(ctx, 110, 20, `rgba(0, 0, 0, 0.7)`);
  renderRect(ctx, 100, 10, `#fff`);

  ctx.fillStyle = `#000`;


  ctx.font = `16px Mono`;
  ctx.fillText(`Ура вы победили!`, 140, 40);
  ctx.fillText(`Список результатов: `, 140, 60);

  var maxTime = getMaxElement(times);

  for (var i = 1; i <= names.length; i++) {

    var columnHeight = Math.round(Consts.MAX_COLUMN * times[i - 1] / maxTime);

    ctx.fillText(`${names[i - 1]}`, Consts.CLOUD_X * i + Consts.SMALL_GAP, Consts.CLOUD_HEIGHT - Consts.TINY_GAP);

    (names[i - 1] === 'Вы') ? ctx.fillStyle = `rgba(255, 0, 0, 1)` : ctx.fillStyle = `hsl(240, ${Math.round(Math.random() * 100)}%, 50%)`;

    ctx.fillRect(Consts.CLOUD_X * i + Consts.SMALL_GAP,
        (Consts.CLOUD_Y + Consts.CLOUD_HEIGHT) - columnHeight - Consts.GAP,
        Consts.COLUMN_WIDTH,
        columnHeight
    );

    ctx.fillStyle = `#000`;
    ctx.fillText(`${Math.round(times[i - 1])}`, Consts.CLOUD_X * i + Consts.SMALL_GAP, Consts.CLOUD_HEIGHT - columnHeight - Consts.GAP);
  }
};
