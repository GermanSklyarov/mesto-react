function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="photos__element">
      <img className="photos__photo" src={card.link} alt={card.name} onClick={handleClick} />
      <button className="photos__delete-button" type="button" aria-label="удалить"></button>
      <div className="photos__photo-caption">
        <h2 className="photos__photo-title">{card.name}</h2>
        <div className="photos__like-container">
          <button className="photos__like-button" type="button" aria-label="лайк"></button>
          <span className="photos__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;