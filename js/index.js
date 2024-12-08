const dropButton = document.querySelector(".main__drop");
const dropList = document.querySelector(".main__drop-list");
const dropArrow = document.querySelector(".main__drop img");

if (dropButton) {
  dropButton.addEventListener("click", () => {
    dropList.classList.toggle("active");
    dropArrow.classList.toggle("active");
  });
}
