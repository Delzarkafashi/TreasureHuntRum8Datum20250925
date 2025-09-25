let foundCount = 0;
let time = 0;
let timer;

document.addEventListener("DOMContentLoaded", () => {
  const foundCountEl = document.getElementById("foundCount");
  const timerEl = document.getElementById("timer");

  timer = setInterval(() => {
    time++;
    timerEl.textContent = time;
  }, 1000);

  const treasures = document.querySelectorAll(".treasure");

  treasures.forEach(treasure => {
    treasure.addEventListener("click", () => {
      if (!treasure.classList.contains("found")) {
        treasure.classList.add("found");
        foundCount++;
        foundCountEl.textContent = foundCount;

        alert("Grattis! Du hittade en skatt!");

        if (foundCount === treasures.length) {
          clearInterval(timer);
          alert("Alla skatter hittade på " + time + " sekunder!");
        }
      }
    });
  });
});
