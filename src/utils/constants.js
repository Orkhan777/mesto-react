/*
const popupProfileOpenButton = document.querySelector(".profile__edit-button");

const popupProfileName = document.getElementById("name");
const popupProfileJob = document.getElementById("profession");

const formAddProfilePopup = document.querySelector(".popup__edit-form");

const popupPlaceName = document.getElementById("name-card");
const imageLinkPopup = document.getElementById("images");
const formAddPlacePopup = document.querySelector("#add-form");
const popupProfileAddButton = document.querySelector(".profile__add-button");

const cards = document.querySelector(".elements");
const editAvatar = document.querySelector(".form-edit-avatar");
const avatarImg = document.querySelector(".profile__avatar")

const formValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__save-button",
  disabledButtonSelector: "popup__save-button_disabled",
  inputErrorSelector: "popup__input-error",
  errorClass: "popup__span-error_active",
  popupAddCard: "#popup_add-place",
  popupProfile: "#profile_popup",
  avatarSelector: ".profile__avatar",
  nameSelector: ".profile__name",
  aboutSelector: ".profile__position",
  popupZoom: "#img-popup",
  popupDelete: "#delete-card",
  templiteSelector: "#card__template",
  popupAddAvatar: "#add-avatar-popup",
};
*/

const apiSetting = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: "170233ef-c23e-45e5-9660-e0df0b55c268",
    'Content-Type': 'application/json'
  },
};

export { apiSetting };