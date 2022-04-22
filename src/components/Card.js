function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="photos__element">
      <img className="photos__photo" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <button className="photos__delete-button" type="button" aria-label="удалить"></button>
      <div className="photos__photo-caption">
        <h2 className="photos__photo-title">{props.card.name}</h2>
        <div className="photos__like-container">
          <button className="photos__like-button" type="button" aria-label="лайк"></button>
          <span className="photos__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;