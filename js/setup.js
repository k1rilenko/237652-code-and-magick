'use strict';
var gameSetup = document.querySelector('.setup');
gameSetup.classList.remove('hidden');
var wizardSetup = document.querySelector('.setup-similar');
wizardSetup.classList.remove('hidden');
var wizardList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomValue = function (arr) {
  return arr[Math.floor((Math.random() * arr.length))];
};

var getRandomWizard = function () {
  return {
    name: getRandomValue(names) + ' ' + getRandomValue(lastNames),
    coatColor: getRandomValue(coatColors),
    eyesColor: getRandomValue(eyesColors)
  };
};

var wizzards = [];
var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  wizzards[i] = getRandomWizard();
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizzards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizzards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizzards[i].eyesColor;
  fragment.appendChild(wizardElement);
}
wizardList.appendChild(fragment);
