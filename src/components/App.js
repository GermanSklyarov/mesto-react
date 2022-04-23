import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Footer from './Footer.js';
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <PopupWithForm title="Редактировать профиль" id="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
        <input type="text" name="name" id="name" className="popup__field" value="Жак-Ив Кусто" placeholder="Имя"
          minLength="2" maxLength="40" required />
        <span className="name-error popup__form-input-error"></span>
        <input type="text" name="about" id="about" className="popup__field" value="Исследователь океана"
          placeholder="Деятельность" minLength="2" maxLength="200" required />
        <span className="about-error popup__form-input-error"></span>
      </PopupWithForm>
      <PopupWithForm title="Новое место" id="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Создать">
        <input type="text" name="name" id="place" className="popup__field" placeholder="Название" minLength="2"
          maxLength="30" required />
        <span className="place-error popup__form-input-error"></span>
        <input type="url" name="link" id="url" className="popup__field" placeholder="Ссылка на картинку" required />
        <span className="url-error popup__form-input-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm title="Вы уверены?" id="confirm" buttonText="Да" />
      <PopupWithForm title="Обновить аватар" id="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
        <input type="url" name="avatar" id="url-avatar" className="popup__field" placeholder="Ссылка на картинку"
          required />
        <span className="url-avatar-error popup__form-input-error"></span>
      </PopupWithForm>
      <Footer />
    </div>
  );
}

export default App;
