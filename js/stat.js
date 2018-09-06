'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_POSITION_X = 100;
var CLOUD_POSITION_Y = 10;
var SHADOW_GAP = 10;
var TEXT_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, y1) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y1);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function getRandomInt() {
  return Math.floor(Math.random() * (100 - 0)) + 0;
}
function getRandomColor(ctx) {
  ctx.fillStyle = 'hsl(240, ' + getRandomInt() + '% ' + ',50%)'
}

var renderBar = function (ctx, names, x, y, x1, y1, width, height, times, max) {
  ctx.fillStyle = '#000000';
  ctx.fillText(names, x, y);
  ctx.fillText(times, x, max);
  if (names === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(x1, y1, width, height);
  } else {
    getRandomColor(ctx);
    ctx.fillRect(x1, y1, width, height);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_POSITION_X + SHADOW_GAP, CLOUD_POSITION_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_POSITION_X, CLOUD_POSITION_Y, '#fff');
  renderText(ctx, CLOUD_POSITION_X + TEXT_GAP, CLOUD_POSITION_Y + TEXT_GAP, CLOUD_POSITION_Y + TEXT_GAP + SHADOW_GAP);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    renderBar(ctx, names[i], CLOUD_POSITION_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT, CLOUD_POSITION_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_POSITION_X + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime, Math.floor(times[i]), (CLOUD_POSITION_X + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime) - SHADOW_GAP);
  }
};
