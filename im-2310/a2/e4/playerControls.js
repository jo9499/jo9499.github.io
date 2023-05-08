(function() {

    const videoBox = document.querySelector('.video-box'),
      videoContent = videoBox.querySelector('.video-content'),
      pauseIcon = videoBox.querySelector('.pause-icon'),
      videoMain = videoBox.querySelector('.video-main'),
      playBtn = videoBox.querySelector('.play-btn'),
      fullScreenBtn = videoBox.querySelector('.full-screen-btn');
      progressBarBox = videoBox.querySelector('.progress-bar-box'),
      progressBarMain = videoBox.querySelector('.progress-bar-main'),
      progressBarLoad = videoBox.querySelector('.progress-bar-load');
  
      // setting video source
      videoMain.src = "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4"
  
      // to play 
      videoMain.addEventListener('canplay', () => {
        videoBox.style.display = 'block';
        totalT = Math.floor(videoMain.duration) || 0;
      });
  
      videoMain.addEventListener('timeupdate', () => {
        progressBarMain.style.width = `${Math.floor(videoMain.currentTime) / totalT * 100}%`;
        progressBarLoad.style.width = `${Math.floor(videoMain.buffered.end(0)) / totalT * 100}%`;
      });
  
      progressBarBox.addEventListener('click', (event) => {
        const x = event.offsetX;
        const totalW = progressBarBox.offsetWidth;
        videoMain.currentTime = x / totalW * totalT;
        progressBarMain.style.width = `${Math.floor(videoMain.currentTime) / totalT * 100}%`;
      });
  
      videoMain.addEventListener('play', () => {
        playBtn.textContent = 'pause_circle_outline';
        pauseIcon.style.display = 'none';
      });
  
      videoMain.addEventListener('pause', () => {
        playBtn.textContent = 'play_circle_outline';
        pauseIcon.style.display = 'block';
      });
  
      videoMain.addEventListener('click', () => {
        if(!!videoMain.paused) {
          videoMain.play();
        } else {
          videoMain.pause();
        }
      });
  
      playBtn.addEventListener('click', () => {
        if(!!videoMain.paused) {
          videoMain.play();
        } else {
          videoMain.pause();
        }
      });
  
      // full screen
      document.addEventListener('fullscreenchange', () => {
        if(document.fullscreenElement) {
          fullScreenBtn.textContent = 'fullscreen_exit';
        } else {
          fullScreenBtn.textContent = 'fullscreen';
        }
      });
  
      fullScreenBtn.addEventListener('click', () => {
        if(!document.fullscreenElement) {
          videoContent.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      });

      // mute, i had trouble adding the mute button into the control buttons, so i created a seperate section, but is united with
      // the rest of icons
      const muteBtn = document.querySelector('.mute-btn');
      muteBtn.addEventListener('click', () => {
        const video = document.querySelector('.video-main');
        video.muted = !video.muted;
        const muteIcon = muteBtn.querySelector('.material-icons:not(.hidden)');
        const unmuteIcon = muteBtn.querySelector('.material-icons.hidden');
        muteIcon.classList.toggle('hidden');
        unmuteIcon.classList.toggle('hidden');
      });      
  
  })();