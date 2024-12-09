const dropButton = document.querySelector(".center__top-drop");
const dropList = document.querySelector(".center__top-drop-list");
const dropArrow = document.querySelector(".center__top-drop img");

if (dropButton) {
  dropButton.addEventListener("click", () => {
    dropList.classList.toggle("active");
    dropArrow.classList.toggle("active");
  });
}

// функция переключения табов
const makeCodeUniversal = (
  tabItemsQuery,
  formItemsQuery,
  tabClassName = "active"
) => {
  const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
  const formItems = Array.from(document.querySelectorAll(formItemsQuery));

  const clearActiveTabs = (element) => {
    element.find((item) => item.classList.remove(tabClassName));
  };

  const setActiveTab = (element, index) => {
    element[index].classList.add(tabClassName);
  };

  const chekTab = (item, index) => {
    item.addEventListener("click", () => {
      clearActiveTabs(tabItems);
      clearActiveTabs(formItems);

      setActiveTab(tabItems, index);
      setActiveTab(formItems, index);
    });
  };
  tabItems.forEach(chekTab);
};
// /*табы / форма вход / регистрация*/
makeCodeUniversal(".profile-tab", ".profile-form");

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
