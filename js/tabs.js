// ここからコードを書いてください
export default setupTabs;

const homeLink = document.querySelector('[data-tab="home"]');
const converterTab = document.querySelector('[data-tab="converter"]');
const homeSection = document.querySelector("#home");
const converterSection = document.querySelector("#converter");

export function setupTabs(){
    if (homeLink) {
        homeLink.addEventListener("click", (event) => {
            event.preventDefault(); 
            
            converterSection.classList.add("hidden");
            homeSection.classList.remove("hidden");
        });
    }

    if (converterTab) {
        converterTab.addEventListener("click", (event) => {
            event.preventDefault(); 
            
            homeSection.classList.add("hidden");
            converterSection.classList.remove("hidden");
        });
    }
}