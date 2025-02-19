const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Kiểm tra nếu có nút để tránh lỗi runtime
if (btnsOpenModal) {
  for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
  }
}

// Kiểm tra nếu các phần tử tồn tại trước khi gán sự kiện
if (btnCloseModal) {
  btnCloseModal.addEventListener("click", closeModal);
}

if (overlay) {
  overlay.addEventListener("click", closeModal);
}

document.addEventListener("keydown", function (e) {
  // Kiểm tra xem modal có đang ẩn hay không và phím Escape có được nhấn
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
