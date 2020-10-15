'use strict';

(function () {
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
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  document.querySelector('.setup-similar').classList.remove('hidden');

  /** Generates and returns wizards with random data of given parameters and add them into an array.
   *  @param {array} wizardsData - An object with wizards mock properties
   *  @param {int} quantity - Quantity of needed wizards
   *  @return {array} array with generated similar wizards
   */
  var getSimilarWizards = function (wizardsData, quantity) {

    var wizards = [];
    for (var i = 0; i < quantity; i++) {
      var wizard = {
        name: `${window.util.getRandomItem(wizardsData.NAMES)}` + ` ${window.util.getRandomItem(wizardsData.SECOND_NAMES)}`,
        coatColor: window.util.getRandomItem(wizardsData.COAT_COLORS),
        eyesColor: window.util.getRandomItem(wizardsData.EYES_COLORS)
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

  var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
  var wizardCoat = setupWizardAppearance.querySelector('.wizard-coat');
  var wizardEyes = setupWizardAppearance.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var eyesColorInput = setupWizardAppearance.querySelector('input[name="eyes-color"]');
  var coatColorInput = setupWizardAppearance.querySelector('input[name="coat-color"]');
  var fireballColorInput = fireball.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    var color = window.util.getRandomItem(WizardsProperties.COAT_COLORS);
    wizardCoat.style.fill = color;
    coatColorInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.util.getRandomItem(WizardsProperties.EYES_COLORS);
    wizardEyes.style.fill = color;
    eyesColorInput.value = color;
  });

  fireball.addEventListener('click', function () {
    var color = window.util.getRandomItem(WizardsProperties.FIREBALL_COLORS);
    fireball.style.background = color;
    fireballColorInput.value = color;
  });
})();
