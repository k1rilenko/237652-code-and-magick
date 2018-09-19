'use strict';
var KEY_ESC = 27;
var KEY_ENTER = 13;
var gameSetup = document.querySelector('.setup');
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

var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = gameSetup.querySelector('.setup-close');
var setupUserName = gameSetup.querySelector('.setup-user-name');

var popupEscPressHandler = function (evt) {
  if (evt.keyCode === KEY_ESC) {
    closePopup();
  }
};

var openPopup = function () {
  gameSetup.classList.remove('hidden');
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEY_ESC && document.activeElement !== setupUserName) {
      closePopup();
    }
  });
};

var closePopup = function (evt) {
  gameSetup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
};


setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_ENTER) {
    openPopup();
  }
});
setupClose.addEventListener('click', function () {
  closePopup();
});
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_ENTER) {
    closePopup();
  }
});
var setupWizard = document.querySelector('.setup-wizard');
var inputCoatColor = document.querySelector('input[name=coat-color]');
var inputEyesColor = document.querySelector('input[name=eyes-color]');
var inputFireballColor = document.querySelector('input[name=fireball-color]');
var getWizardColor = function (wizElem, arr, elem) {
  var randomValue = getRandomValue(arr);
  setupWizard.querySelector(wizElem).style.fill = randomValue;
  elem.value = randomValue;
};
setupWizard.querySelector('.wizard-coat').addEventListener('click', function () {
  getWizardColor('.wizard-coat', coatColors, inputCoatColor);
});
setupWizard.querySelector('.wizard-eyes').addEventListener('click', function () {
  getWizardColor('.wizard-eyes', eyesColors, inputEyesColor);
});

var fireballsColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardFireball = document.querySelector('.setup-fireball-wrap');
wizardFireball.addEventListener('click', function () {
  var randomColorFireball = getRandomValue(fireballsColor);
  wizardFireball.style.background = randomColorFireball;
  inputFireballColor.value = randomColorFireball;
});
