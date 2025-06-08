
const container = document.getElementById("people-container");
const fighter = document.getElementById("fighter");

function spawnPerson() {
  const person = document.createElement("div");
  person.classList.add("person");
  person.innerText = "🧍";
  person.style.left = "100%";
  person.style.bottom = "10px";
  container.appendChild(person);

  const interval = setInterval(() => {
    const personRect = person.getBoundingClientRect();
    const fighterRect = fighter.getBoundingClientRect();

    const distance = Math.abs(personRect.left - fighterRect.left);
    const heightDiff = Math.abs(personRect.top - fighterRect.top);

    if (distance < 60 && heightDiff < 80 && !person.classList.contains("dead")) {
      person.classList.add("dead");
      clearInterval(interval);
    }
  }, 100);

  setTimeout(spawnPerson, 3000 + Math.random() * 2000);
}

// Random movement every few seconds
function randomMoveFighter() {
  const gameArea = document.querySelector(".game-area");
  const maxX = gameArea.clientWidth - fighter.clientWidth;
  const maxY = gameArea.clientHeight - fighter.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  fighter.style.transition = "transform 1s ease";
  fighter.style.transform = `translate(${x}px, ${y}px)`;
}

// Touch movement
document.querySelector(".game-area").addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  const gameArea = e.currentTarget;
  const rect = gameArea.getBoundingClientRect();

  const x = touch.clientX - rect.left - fighter.clientWidth / 2;
  const y = touch.clientY - rect.top - fighter.clientHeight / 2;

  fighter.style.transition = "transform 0.5s ease";
  fighter.style.transform = `translate(${x}px, ${y}px)`;
});

setInterval(randomMoveFighter, 5000);
spawnPerson();
