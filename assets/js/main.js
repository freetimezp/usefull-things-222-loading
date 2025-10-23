const buttons = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");
const body = document.body;

// Define neon themes
const themes = {
    quantum: {
        background: "#011923",
        color: "#00f0ff",
    },
    energy: {
        background: "#0e0e0e",
        color: "#0062ff",
    },
    magnetic: {
        background: "#151a18",
        color: "#11d542",
    },
};

// Assign data-theme to each card
document.querySelector("#quantum-card").dataset.theme = "quantum";
document.querySelector("#energy-card").dataset.theme = "energy";
document.querySelector("#magnetic-card").dataset.theme = "magnetic";

// Button logic
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.loader + "-card";

        // Switch visible card
        cards.forEach((card) => {
            card.classList.toggle("visible", card.id === target);
            card.classList.toggle("hidden", card.id !== target);
        });

        // Animate background
        const { background } = themes[btn.dataset.loader];
        body.style.background = background;
    });
});

// Create magnetic orbs dynamically
const magnetic = document.querySelector("#magnetic");
for (let i = 0; i < 12; i++) {
    const span = document.createElement("span");
    span.style.animationDelay = i * 0.2 + "s";
    magnetic.appendChild(span);
}
