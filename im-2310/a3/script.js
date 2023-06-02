document.getElementById('bedroom').addEventListener('click', function() {
  console.log('You clicked on the bedroom!');
});

document.getElementById('living-room').addEventListener('click', function() {
  console.log('You clicked on the living room!');
});

document.getElementById('kitchen').addEventListener('click', function() {
  console.log('You clicked on the kitchen!');
});

document.getElementById('bathroom').addEventListener('click', function() {
  console.log('You clicked on the bathroom!');
});

document.getElementById('office').addEventListener('click', function() {
  console.log('You clicked on the office!');
});


document.addEventListener('mousemove', function(event) {
  const customCursor = document.querySelector('.custom-cursor');
  const xPos = event.clientX;
  const yPos = event.clientY;

  customCursor.style.left = xPos + 'px';
  customCursor.style.top = yPos + 'px';
});


const backgroundMusic = document.getElementById('backgroundMusic');

backgroundMusic.play();

backgroundMusic.pause();