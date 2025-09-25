// Räknare
let foundCount = 0;
let time = 0;
let timer;

document.addEventListener("DOMContentLoaded", () => {
  // Hämta HUD-element
  const foundCountEl = document.getElementById("foundCount");
  const timerEl = document.getElementById("timer");

  // Starta timern
  timer = setInterval(() => {
    time++;
    timerEl.textContent = time;
  }, 1000);

  // --- Här ska ni lägga in era egna skatter ---
  // Exempel: skatt 1
  const treasure1 = document.getElementById("treasure1");
  if (treasure1) {
    treasure1.addEventListener("click", () => {
      treasure1.style.color = "red";
      foundCount++;
      foundCountEl.textContent = foundCount;
      alert("Grattis! Du hittade en skatt!");

      if (foundCount === 10) {
        clearInterval(timer);
        alert("Alla skatter hittade på " + time + " sekunder!");
      }
    });
  }
});
