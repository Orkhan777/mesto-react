import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        btnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form-section">
          <input
            className="popup__input"
            type="text"
            name="name"
            id="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="name-error popup__span-error" />
        </div>
        <div className="popup__form-section">
          <input
            className="popup__input"
            type="text"
            name="about"
            id="profession"
            placeholder="Ваша профессия"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="profession-error popup__span-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        btnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form-section">
          <input
            className="popup__input"
            type="text"
            name="name"
            id="name-card"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="name-card-error popup__span-error" />
        </div>
        <div className="popup__form-section">
          <input
            className="popup__input"
            type="url"
            name="link"
            id="images"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="images-error popup__span-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        btnText="Создать"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form-section">
          <input
            className="popup__input"
            type="url"
            name="avatar"
            id="avatar"
            placeholder="Ссылка на картинку"
          />
          <span className="avatar-error popup__span-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm name="delete-card" title="Вы уверены?" btnText="Да" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
