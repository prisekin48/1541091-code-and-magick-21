'use strict';

var WIZARDS_QUANTITY = 4;
var WizardsProperties = {
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SECOND_NAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
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
 *  @return {array} array with generated similar wizards
 */
var getSimilarWizards = function (names = WizardsProperties.NAMES,
  secondNames = WizardsProperties.SECOND_NAMES,
  coatColors = WizardsProperties.COAT_COLORS,
  eyesColors = WizardsProperties.EYES_COLORS, quantity = WIZARDS_QUANTITY) {

  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    var wizard = {
      name: `${getRandomItem(names)}` + ` ${getRandomItem(secondNames)}`,
      coatColor: getRandomItem(coatColors),
      eyesColor: getRandomItem(eyesColors)
    };
    wizards.push(wizard);
  }
  return wizards;
};

var similarWizards = getSimilarWizards(WizardsProperties.NAMES, WizardsProperties.SECOND_NAMES,
  WizardsProperties.COAT_COLORS, WizardsProperties.EYES_COLORS, 4);

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/** Prepares wizard DOM-element
 *  @param {object} wizard - object with wizard properties
 *  @return {object} HTMLNode??
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
similarWizards.forEach(function (item) {
  fragment.appendChild(renderWizard(item))
});

similarListElement.appendChild(fragment);
