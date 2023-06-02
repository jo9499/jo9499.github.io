var visitedRooms = {
    bedroom: false,
    livingRoom: false,
    kitchen: false,
    bathroom: false,
    office: false
  };
  
  function checkAllRoomsVisited() {
    var allVisited = Object.values(visitedRooms).every(function(visited) {
      return visited;
    });
  
    if (allVisited) {
      window.location.href = 'final-page.html';
    }
  }
  
  document.getElementById('bedroom').addEventListener('click', function() {
    console.log('You clicked the bedroom!');
    sound.play();
    visitedRooms.bedroom = true;
    checkAllRoomsVisited();
  });
  
  document.getElementById('living-room').addEventListener('click', function() {
    console.log('You clicked the living room!');
    sound.play();
    visitedRooms.livingRoom = true;
    checkAllRoomsVisited();
  });
  
  document.getElementById('kitchen').addEventListener('click', function() {
    console.log('You clicked the kitchen!');
    sound.play();
    visitedRooms.kitchen = true;
    checkAllRoomsVisited();
  });
  
  document.getElementById('bathroom').addEventListener('click', function() {
    console.log('You clicked the bathroom!');
    sound.play();
    visitedRooms.bathroom = true;
    checkAllRoomsVisited();
  });
  
  document.getElementById('office').addEventListener('click', function() {
    console.log('You clicked the office!');
    sound.play();
    visitedRooms.office = true;
    checkAllRoomsVisited();
  });
  
  