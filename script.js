let foundCount = 0;
let time = 0;
let timer;

// När sidan laddats klart körs detta
document.addEventListener("DOMContentLoaded", () => {
  // Hämta HUD-elementen (där vi visar antal skatter + tid)
  const foundCountEl = document.getElementById("foundCount");
  const timerEl = document.getElementById("timer");

  // Starta timern: öka tiden varje sekund och skriv ut i HUD
  timer = setInterval(() => {
    time++;
    timerEl.textContent = time;
  }, 1000);

  // Hämta alla skatter (ord med class="treasure")
  const treasures = document.querySelectorAll(".treasure");

  // Lägg till klick-funktion på varje skatt
  treasures.forEach(treasure => {
    treasure.addEventListener("click", () => {
      // Om den inte redan är hittad
      if (!treasure.classList.contains("found")) {
        treasure.classList.add("found"); // Markera som hittad (blir röd med CSS)
        foundCount++; // Öka antalet hittade skatter
        foundCountEl.textContent = foundCount; // Uppdatera HUD

        alert("Grattis! Du hittade en skatt!");

        // Om alla skatter hittats -> stoppa timern och visa tid
        if (foundCount === treasures.length) {
          clearInterval(timer);
          alert("Alla skatter hittade på " + time + " sekunder!");
        }
      }
    });
  });
});

// detta är bara focuserat på röda knappen
document.addEventListener("DOMContentLoaded", () => {
  const treasures = document.querySelectorAll(".treasure");

  treasures.forEach(treasure => {
    treasure.addEventListener("click", () => {
      if (!treasure.classList.contains("found")) {
        treasure.classList.add("found"); // Bara färga röd
        alert("Grattis! Du hittade en skatt!");
      }
    });
  });
});

