const dropButton = document.querySelector(".main__drop");
const dropList = document.querySelector(".main__drop-list");

if (dropButton) {
  dropButton.addEventListener("click", () => {
    dropList.classList.toggle("active");
  });
}
