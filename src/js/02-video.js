import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const videoPlayer = document.getElementById('vimeo-player');
const player = new Player(videoPlayer);
const VIDEO_PLAYER_TIME = 'videoplayer-current-time';

const playOn = (e) => {
	localStorage.setItem(VIDEO_PLAYER_TIME, e.seconds)
}

player.on('timeupdate', throttle(playOn, 1000));

const time = localStorage.getItem(VIDEO_PLAYER_TIME)

player.setCurrentTime(time || 0)