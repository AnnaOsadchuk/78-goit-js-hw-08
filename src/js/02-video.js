import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime != null) {
  player.setCurrentTime(currentTime);
}
