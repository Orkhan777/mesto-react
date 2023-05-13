function Card(props) {
  const { card, onCardClick } = props;

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <div
        className="card__image"
        id="card__image"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleCardClick}
      ></div>
      <div className="card__text">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__info-like">
          <button className="card__button-like" type="button" />
          <span className="card__like-score">{card.likes.length}</span>
        </div>
      </div>
      <button className="button-remove" type="button" />
    </article>
  );
}

export default Card;
