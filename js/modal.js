const modal = document.querySelectorAll(".modal");
const modalOverlay = document.querySelectorAll(".modal-overlay");
const modalOpen = document.querySelectorAll(".modal-open");
const modalClose = document.querySelectorAll(".modal-close");

for (let i = 0; i < 5; i++) {
  const openModal = () => {
    modal[i].classList.remove("hidden");
  };
  const closeModal = () => {
    modal[i].classList.add("hidden");
  };
  modalOverlay[i].addEventListener("click", closeModal);
  modalClose[i].addEventListener("click", closeModal);
  modalOpen[i].addEventListener("click", openModal);
}
