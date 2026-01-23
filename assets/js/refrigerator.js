document.querySelector(".btn.white").addEventListener("click", () => {
  alert("Calling service...");
});

document.querySelector(".btn.yellow").addEventListener("click", () => {
  alert("Order form will open");
});

  const cards = document.querySelectorAll('.appliance-card:not(.disabled)');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

