
  // Retrieve the mute state from the browser's storage or set it to false by default
  var isMuted = JSON.parse(localStorage.getItem('isMuted')) || false;
  var backgroundMusic = document.getElementById('backgroundMusic');
  var muteButton = document.getElementById('muteButton');

  // Set the mute state and update the button text accordingly
  function setMuteState(mute) {
    isMuted = mute;
    backgroundMusic.muted = mute;
    muteButton.textContent = mute ? 'Unmute' : 'Mute';
    localStorage.setItem('isMuted', JSON.stringify(isMuted));
  }

  // Toggle the mute state when the button is clicked
  muteButton.addEventListener('click', function() {
    setMuteState(!isMuted);
  });

  // Initialize the mute state and audio mute status on page load
  setMuteState(isMuted);

