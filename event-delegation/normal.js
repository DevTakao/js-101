const handleClick = () => {
  let x = 0;
  while (x < 1000000) {
    x = x + Math.random() * 10;
  }
  console.log("x has exceeded one million", x);
};

const cards = document.querySelectorAll(".product-card");
for (const card of cards) {
  card.addEventListener("click", handleClick);
}
