// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const range = player.querySelectorAll('player__slider');

// Build out functions

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);