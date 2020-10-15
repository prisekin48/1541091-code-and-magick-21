'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    Consts: {
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
      },
    /** Renders a rectangle with given arguments.
     *  @param {object} ctx - canvas context
     *  @param {int} x - x-axis coordinates of the rectangle beginning
     *  @param {int} y - y-axis coordinates of the rectangle beginning
     *  @param {string} color - rectangle color
     */
    renderRect: function (ctx, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, window.util.Consts.CLOUD_WIDTH, window.util.Consts.CLOUD_HEIGHT);
    },
    /** Returns an element of the given array with a max value.
     *  @param {array} arr - array of elements
     *  @return {object} any item of the array
     */
    getMaxElement: function (arr) {
      var maxElement = arr[0];

      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }

      return maxElement;
    },
    /** Returns a random item of the given array
     *  @param {array} arr - array of items
     *  @return {object} returns any array item
     */
    getRandomItem: function (arr) {
      var randomItem = arr[Math.floor(Math.random() * arr.length)];
      return randomItem;
    },
    /**
     * Invokes action if Escape is pressed
     * @param  {object.Event}  evt  Given event
     * @param  {object.function}  action Given function to be invoked
     */
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();
        action();
      }
    },
    /**
     * Invokes action if Enter is pressed
     * @param  {object.Event}  evt  Given event
     * @param  {object.function}  action Given function to be invoked
     */
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();
