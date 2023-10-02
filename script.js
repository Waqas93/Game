const balloons = document.querySelectorAll(".balloon");
const yay = document.getElementById("yay");

balloons.forEach((balloon) => {
  balloon.addEventListener("click", () => {
    if (balloon.style.backgroundColor !== "transparent") {
      balloon.style.backgroundColor = "transparent";
      const remainingBalloons = [...balloons].filter(
        (b) => b.style.backgroundColor !== "transparent"
      );
      if (remainingBalloons.length === 0) {
        yay.style.display = "block";
        window.scrollTo(0, 0);
      }
    }
  });

  balloon.addEventListener("mouseout", () => {
    balloon.innerText = "";
  });
});
