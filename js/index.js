const dropButton = document.querySelector(".center__top-drop");
const dropList = document.querySelector(".center__top-drop-list");
const dropArrow = document.querySelector(".center__top-drop img");

if (dropButton) {
  dropButton.addEventListener("click", () => {
    dropList.classList.toggle("active");
    dropArrow.classList.toggle("active");
  });
}

const forgotPassword = document.querySelector(".profile-form p");
const profileWrap = document.querySelector(".profile-wrap");
const profileRecovery = document.querySelector(".profile-wrap__recovery");
const recoveryBack = document.querySelector(".recovery-top img");
const eventsListTypeYellow = document.querySelector(".events-list_type-yellow");

if (forgotPassword) {
  forgotPassword.addEventListener("click", () => {
    profileWrap.classList.add("active");
    profileRecovery.classList.add("active");
    eventsListTypeYellow.classList.add("active");
  });
}
if (recoveryBack) {
  recoveryBack.addEventListener("click", () => {
    profileWrap.classList.remove("active");
    profileRecovery.classList.remove("active");
    eventsListTypeYellow.classList.remove("active");
  });
}

const sProfile = document.getElementById("s-profile");
const sMain = document.getElementById("s-main");
const sMenu = document.getElementById("s-menu");
const mainPage = document.querySelector(".main");
const profilePage = document.querySelector(".right-aside");
const asidePage = document.querySelector(".aside");
const mainMobileTop = document.querySelector(".main-mobile-top");

if (sProfile) {
  sProfile.addEventListener("click", () => {
    mainPage.style.display = "none";
    asidePage.style.display = "none";
    profilePage.style.display = "flex";
    mainMobileTop.style.display = "none";
  });
}

if (sMain) {
  sMain.addEventListener("click", () => {
    profilePage.style.display = "none";
    asidePage.style.display = "none";
    mainPage.style.display = "block";
    mainMobileTop.style.display = "flex";
  });
}

if (sMenu) {
  sMenu.addEventListener("click", () => {
    mainPage.style.display = "none";
    profilePage.style.display = "none";
    asidePage.style.display = "flex";
    mainMobileTop.style.display = "flex";
  });
}

//всплывающие окна
const popupWindows = document.querySelector(".drop-window-btn");
const dropWindowPage = document.querySelector(".drop-window");
if (popupWindows) {
  popupWindows.addEventListener("click", () => {
    dropWindowPage.classList.toggle("active");
  });
}

//маска для ввода телефона
window.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector('input[type="tel"]'); // Выбираем первое поле ввода телефона
  let keyCode;

  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault();

    let matrix = "+7 (___) ___ ____",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) : a;
      });

    i = new_value.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      new_value = new_value.slice(0, i);
    }

    let reg = matrix
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");

    reg = new RegExp("^" + reg + "$");

    if (
      !reg.test(this.value) ||
      this.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
    ) {
      this.value = new_value;
    }

    if (event.type == "blur" && this.value.length < 5) {
      this.value = "";
    }
  }

  if (input) {
    // Проверяем, существует ли поле
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  }
});

//поиск
const inputElement = document.querySelector(".menu__form input");
const dropdownElement = document.querySelector(".menu__form-drop");

inputElement.addEventListener("click", () => {
  dropdownElement.classList.add("active");
  inputElement.classList.add("active");
});

document.addEventListener("click", (event) => {
  if (!inputElement.contains(event.target)) {
    dropdownElement.classList.remove("active");
    inputElement.classList.remove("active");
  }
});
