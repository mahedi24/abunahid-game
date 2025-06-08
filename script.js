const container = document.getElementById("people-container");
const fighter = document.getElementById("fighter");

function spawnPerson() {
  const person = document.createElement("div");
  person.classList.add("person");
  person.innerText = "🧍";
  container.appendChild(person);

  person.style.bottom = "10px";

  const interval = setInterval(() => {
    const personRect = person.getBoundingClientRect();
    const fighterRect = fighter.getBoundingClientRect();

    const distance = Math.abs(personRect.left - fighterRect.right);

    if (distance < 50 && !person.classList.contains("dead")) {
      person.classList.add("dead");
      clearInterval(interval);
    }
  }, 100);

  setTimeout(spawnPerson, 3000 + Math.random() * 2000);
}

spawnPerson();
