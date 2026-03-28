//console.log("JS есть");//
const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

// открыть
openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

// закрыть по крестику
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// закрыть при клике вне окна
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
