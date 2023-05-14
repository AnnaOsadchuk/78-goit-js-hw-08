import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeupdate', throttle(onTimeupdate, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds
);
