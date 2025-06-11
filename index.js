  // for setting the time
  const clock = document.getElementById("clock");

  function getTime() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString() + " GMT+1"; // returns in HH:MM:SS format
  }

  getTime();

// refresh
  const intervalID = setInterval(getTime, 1000);

  // for dark mode 

    function toggleTheme() {
    document.querySelector("body").classList.toggle("darkmode");
  }
  //the grab thing 

  ddocument.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.style.position = "absolute";

    card.addEventListener("mousedown", (e) => {
      const shiftX = e.clientX - card.getBoundingClientRect().left;
      const shiftY = e.clientY - card.getBoundingClientRect().top;

      function moveAt(pageX, pageY) {
        card.style.left = pageX - shiftX + "px";
        card.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMouseMove);
      }, { once: true });
    });

    card.ondragstart = () => false; // prevent default browser drag
  });
});




