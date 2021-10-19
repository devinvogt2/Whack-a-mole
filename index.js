let score = 0;
let numOfHoles = 9;
const scoreDisplay = document.getElementById('score');
const holeDisplay = document.getElementById('numOfHoles');
const holes = document.getElementsByClassName('hole');

setInterval(function() {
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle('mole');
}, 3000);

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    score++;
    numOfHoles++;
    scoreDisplay.innerText = "Score:" + score;
    holeDisplay.innerText = "Current Holes:" + numOfHoles;
    addHole()
  }
});

function addHole () {
    let newHole = document.createElement("div");

    newHole.className = "hole";

    let board = document.getElementById("whack-a-mole");
    board.appendChild(newHole);
    
}