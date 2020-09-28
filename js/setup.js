'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

/** Returns a random item of the given array
@param {array} arr - array of items
@return {object} returns any array item
*/
var getRandomItem = function (arr) {
  var randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
};

var similarWizards = [];

/** Creates wizards with random data of given parameters and add them into similarWizards array.
@param {array} names - array with names
@param {array} secondNames - array with second names
@param {array} coatColors - array with colors (rgb format)
@param {array} eyesColors - array with eyes colors (named color)
@param {int} quantity - quantity of needed wizards
*/
var createSimilarWizard = function (names = NAMES, secondNames = SECOND_NAMES, coatColors = COAT_COLORS, eyesColors = EYES_COLORS, quantity = 4) {
  for (var i = 0; i < quantity; i++) {
    var wizard = {
      name: `${getRandomItem(names)}` + ` ${getRandomItem(secondNames)}`,
      coatColor: getRandomItem(coatColors),
      eyesColor: getRandomItem(eyesColors)
    };
    similarWizards.push(wizard);
  }
};

createSimilarWizard();

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/** Prepares wizard DOM-element
@param {object} wizard - object with wizard properties
@return {object} HTMLNode??
*/
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < similarWizards.length; i++) {
  fragment.appendChild(renderWizard(similarWizards[i]));
}

similarListElement.appendChild(fragment);
