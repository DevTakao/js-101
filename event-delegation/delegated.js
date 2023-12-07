const handleClick = (e) => {
  if (Array.from(e.target.classList).includes("product-card")) {
    let x = 0;
    while (x < 1000000) {
      x = x + Math.random() * 10;
    }
    console.log("x has exceeded one million", x);
  }
};

const container = document.querySelector("#list-container");
container.addEventListener("click", handleClick);
