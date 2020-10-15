'use strict';
(function () {


  /** Renders players' scores. Takes the following arguments:
   *  @param {object} ctx - canvas context;
   *  @param {array} names - array of the players' names;
   *  @param {array} times - array of the players' times.
   */
  window.renderStatistics = function (ctx, names, times) {
    window.util.renderRect(ctx, 110, 20, `rgba(0, 0, 0, 0.7)`);
    window.util.renderRect(ctx, 100, 10, `#fff`);

    ctx.fillStyle = `#000`;


    ctx.font = `16px Mono`;
    ctx.fillText(`Ура вы победили!`, 140, 40);
    ctx.fillText(`Список результатов: `, 140, 60);

    var maxTime = window.util.getMaxElement(times);

    for (var i = 1; i <= names.length; i++) {

      var columnHeight = Math.round(window.util.Consts.MAX_COLUMN * times[i - 1] / maxTime);

      ctx.fillText(`${names[i - 1]}`, window.util.Consts.CLOUD_X * i + window.util.Consts.SMALL_GAP, window.util.Consts.CLOUD_HEIGHT - window.util.Consts.TINY_GAP);

      (names[i - 1] === 'Вы') ? ctx.fillStyle = `rgba(255, 0, 0, 1)` : ctx.fillStyle = `hsl(240, ${Math.round(Math.random() * 100)}%, 50%)`;

      ctx.fillRect(window.util.Consts.CLOUD_X * i + window.util.Consts.SMALL_GAP,
          (window.util.Consts.CLOUD_Y + window.util.Consts.CLOUD_HEIGHT) - columnHeight - window.util.Consts.GAP,
          window.util.Consts.COLUMN_WIDTH,
          columnHeight
      );

      ctx.fillStyle = `#000`;
      ctx.fillText(`${Math.round(times[i - 1])}`, window.util.Consts.CLOUD_X * i + window.util.Consts.SMALL_GAP, window.util.Consts.CLOUD_HEIGHT - columnHeight - window.util.Consts.GAP);
    }
  };
})();
