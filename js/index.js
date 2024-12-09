const dropButton = document.querySelector(".main__drop");
const dropList = document.querySelector(".main__drop-list");
const dropArrow = document.querySelector(".main__drop img");

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

if (forgotPassword) {
  forgotPassword.addEventListener("click", () => {
    profileWrap.classList.add("active");
    profileRecovery.classList.add("active");
  });
}
if (recoveryBack) {
  recoveryBack.addEventListener("click", () => {
    profileWrap.classList.remove("active");
    profileRecovery.classList.remove("active");
  });
}
