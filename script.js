const searchInput = document.querySelector("#search");
const cards = [...document.querySelectorAll(".subject-card")];
const emptyState = document.querySelector("#empty-state");
const resultsCount = document.querySelector("#results-count");
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

function filterSubjects() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  let visible = 0;
  cards.forEach((card) => {
    const text = (card.textContent + " " + (card.dataset.search || "")).toLocaleLowerCase("es");
    const matches = text.includes(query);
    card.hidden = !matches;
    if (matches) visible++;
  });
  emptyState.hidden = visible !== 0;
  resultsCount.textContent = visible + (visible === 1 ? " asignatura" : " asignaturas");
}
searchInput.addEventListener("input", filterSubjects);
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();