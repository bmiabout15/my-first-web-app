export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");
  const flashcardsTab = document.querySelector('[data-tab="flashcards"]');
  const flashcardSection = document.getElementById("flashcards");
  
  homeLink.addEventListener("click", () => {
    converterSection.classList.add("hidden");
    flashcardSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });

  converterTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    flashcardSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });

  flashcardsTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    flashcardSection.classList.remove("hidden");
    converterSection.classList.add("hidden");
  });
}
