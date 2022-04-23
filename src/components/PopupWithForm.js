function PopupWithForm({ title, id, isOpen, onClose, buttonText, children }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`} id={id}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={`${id}-form`} noValidate>
          {children}
          <input type="submit" className="popup__submit" value={buttonText} />
        </form>
        <button className="popup__close" type="button" aria-label="закрыть" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;