import React from "react";
import Card from "./Card.js";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick, currentUser, cards, onCardLike, onCardDelete } = props;

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-edit">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Фотография профиля"
              onClick={onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__item">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__position">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Фотографии">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              currentUser={currentUser}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
