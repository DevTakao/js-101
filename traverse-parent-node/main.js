window.onload = function () {
  document.addEventListener("mouseover", (e) => {
    const target = e.target;
    if (target.getAttribute("id") === "starpolygon") {
      const closestSVG = target.closest("svg");

      console.log(closestSVG);

      if (closestSVG) {
        closestSVG.classList.add("blue");
      }
    }
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target;
    if (target.getAttribute("id") === "starpolygon") {
      const closestSVG = target.closest("svg");

      console.log(closestSVG);

      if (closestSVG) {
        closestSVG.classList.remove("blue");
      }
    }
  });
};
