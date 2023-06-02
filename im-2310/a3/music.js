  var isMuted = JSON.parse(localStorage.getItem('isMuted')) || false;
  var backgroundMusic = document.getElementById('backgroundMusic');
  var muteButton = document.getElementById('muteButton');

  function setMuteState(mute) {
    isMuted = mute;
    backgroundMusic.muted = mute;
    muteButton.textContent = mute ? 'Unmute' : 'Mute';
    localStorage.setItem('isMuted', JSON.stringify(isMuted));
  }

  muteButton.addEventListener('click', function() {
    setMuteState(!isMuted);
  });

  setMuteState(isMuted);

