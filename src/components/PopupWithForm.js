function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? "popup popup_opened" : "popup"} id={props.id}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.id}-form`} noValidate>
          {props.children}
          <input type="submit" className="popup__submit" value="Сохранить" />
        </form>
        <button className="popup__close" type="button" aria-label="закрыть" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;