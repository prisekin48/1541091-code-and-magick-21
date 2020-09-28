'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');


/** Returns a random item of the given array
@param {array} arr - array of items
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
		}
		similarWizards.push(wizard);
	};
};

createSimilarWizard();
console.log(similarWizards);