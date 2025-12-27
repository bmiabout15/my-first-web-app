const flashcardsList = document.getElementById("flashcards-list");

// サーバーからデータを取得する関数を作成してください
export async function fetchFlashcards(){
  try{
    const response = await fetch("/api/flashcards");
    return await response.json();
  }
  catch{
    console.log("エラーが発生しました");
    return [];
  }
}

export async function setupFlashcards() {
  // 暗記カード機能に必要な処理を作成してください
  async function renderFlashcards(wordList){
    flashcardsList.innerHTML='';
    for (const word of wordList) {
      const flashcard = `<div class="flashcard">
        <div class="flashcard-content">
          <p class="flashcard-title">${word.word}</p>
          <div class="flashcard-icons">
            <button class="flashcard-meaning" data-toggle="${word.id}">
              <span class="ri-eye-line"></span>
            </button>
          </div>
        </div>
        <div data-meaning="${word.id}" class="hidden">
          <p>${word.meaning}</p>
        </div>
      </div>`;

      flashcardsList.innerHTML += flashcard;
    }
  }

  async function readFlashcards(){
    const wordList = await fetchFlashcards();
    renderFlashcards(wordList);
  }

  await readFlashcards();

  function toggleMeaning(id){
    const cardMeaningElement = `[data-meaning="${id}"]`;
    const meaningElement = document.querySelector(cardMeaningElement);
    if (meaningElement) {
      const hasClass = meaningElement.classList.contains("hidden");
      
      if(hasClass)meaningElement.classList.remove("hidden");
      else meaningElement.classList.add("hidden");
    }
    else {
      console.log('要素が見つかりませんでした。');
    }
  }

  flashcardsList.addEventListener("click", (event) =>{
    // クリックされた要素から最も近い .flashcard-meaning 要素を探す
    const clickedMeaningElement = event.target.closest('.flashcard-meaning');

    if (clickedMeaningElement) {
        const cardId = clickedMeaningElement.dataset.toggle;
        console.log('暗記カードのID:', cardId);
        toggleMeaning(cardId);
    }
    else{
      return;
    }
    return;
  });
}
