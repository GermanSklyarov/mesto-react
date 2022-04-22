function ImagePopup(props) {
  return (
    <div className={props.card ? "popup popup_type_photo popup_opened" : "popup popup_type_photo"}>
      <div className="popup__photo-container">
        <figure className="popup__figure">
          <img className="popup__photo" src={props.card ? `${props.card.link}` : ""}
            alt={props.card ? props.card.name : ""} />
          <figcaption className="popup__photo-caption">{props.card ? props.card.name : ""}</figcaption>
        </figure>
        <button className="popup__close" type="button" aria-label="закрыть" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;