'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');


  /**
   * Handles an esc press closing setup window
   * @param  {event} evt Taken event
   */
  var onSetupEscPress = function (evt) {
    if (document.activeElement.name !== 'username') {
      window.util.isEscEvent(evt, closeSetupHandler);
    }
  };

  /**
   * Shows setup window and adds event listener for document object
   */
  var openSetupHandler = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
  };

  /**
   * Closes setup window and removes event listener for document object
   */
  var closeSetupHandler = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
    setup.style.left = window.move.initSetupCoords.x;
    setup.style.top = window.move.initSetupCoords.y;
  };

  setupOpen.addEventListener('click', function () {
    openSetupHandler();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openSetupHandler);
  });

  setupClose.addEventListener('click', function () {
    closeSetupHandler();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeSetupHandler);
  });
})();

