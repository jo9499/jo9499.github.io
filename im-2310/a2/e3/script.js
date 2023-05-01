function simulateLoading() {
    let progressBar = document.getElementById("progress-bar");
    let width = 0;
    let interval = setInterval(frame, 50);
  
    function frame() {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width += 2;
        progressBar.style.width = width + "%";
      }
    }
  }
  
  simulateLoading();