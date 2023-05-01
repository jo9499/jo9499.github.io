// i have changed up the functions a bit because i want to incoporate a loading bar after the button.
// while keeping the design minimal, but also to make the interaction a big more engaging and responsive with the simple loading animation
//The purpose of this function is to simulate a loading animation when the user clicks a button, and then redirect the user to the next page when the animation is complete.

function simulateLoading() {
  let progressBar = document.getElementById("progress-bar");
  let progressContainer = document.getElementById("progress-container");
  let button = document.getElementById("load-link");
  // Initialise the progress bar variables
  let width = 0;
  let interval = setInterval(frame, 175);

  // Disable the button and hide it while loading
  button.style.display = "none"; 
  progressContainer.style.display = "block"; 

  // Define the animation frame function
  function frame() {
    if (width >= 100) {
      clearInterval(interval);
      window.location.href = "hosono.html";
    } else {
      width += 2;
      progressBar.style.width = width + "%";
    }
  }
}

let loadlink = document.getElementById("load-link");
loadlink.addEventListener("click", simulateLoading);