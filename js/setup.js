'use strict';

var WIZARDS_QUANTITY = 4;
var WizardsProperties = {
  NAMES: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  SECOND_NAMES: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  COAT_COLORS: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};


var similarListElement = document.querySelector('.setup-similar-list');

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

/** Returns a random item of the given array
 *  @param {array} arr - array of items
 *  @return {object} returns any array item
 */
var getRandomItem = function (arr) {
  var randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
};


/** Generates and returns wizards with random data of given parameters and add them into an array.
 *  @param {array} names - array with names
 *  @param {array} secondNames - array with second names
 *  @param {array} coatColors - array with colors (rgb format)
 *  @param {array} eyesColors - array with eyes colors (named color)
 *  @param {int} quantity - Quantity of needed wizards
 *  @return {array} array with generated similar wizards
 */
var getSimilarWizards = function (wizardsData, quantity) {

  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    var wizard = {
      name: `${getRandomItem(wizardsData.NAMES)}` + ` ${getRandomItem(wizardsData.SECOND_NAMES)}`,
      coatColor: getRandomItem(wizardsData.COAT_COLORS),
      eyesColor: getRandomItem(wizardsData.EYES_COLORS)
    };
    wizards.push(wizard);
  }
  return wizards;
};

var similarWizards = getSimilarWizards(WizardsProperties, WIZARDS_QUANTITY);

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/** Prepares wizard DOM-element
 *  @param {object} wizard - object with wizard properties
 *  @return {object} HTML-element object
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
similarWizards.forEach(function (wizard) {
  fragment.appendChild(renderWizard(wizard));
});

similarListElement.appendChild(fragment);


var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');

/**
 * Handles an esc press closing setup window
 * @param  {event} evt Taken event
 */
var onSetupEscPress = function (evt) {
  if (evt.key === 'Escape' && document.activeElement.name !== 'username') {
    evt.preventDefault();
    closeSetupHandler();
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
};

setupOpen.addEventListener('click', function () {
  openSetupHandler();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openSetupHandler();
  }
});

setupClose.addEventListener('click', function () {
  closeSetupHandler();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closeSetupHandler();
  }
});
