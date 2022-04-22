import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, items]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button className="profile__edit-button" type="button" aria-label="редактировать" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" aria-label="добавить" onClick={props.onAddPlace}></button>
      </section>
      <PopupWithForm title="Редактировать профиль" id="edit" isOpen={props.isOpen.isEditProfilePopupOpen} onClose={props.onClose}>
        <input type="text" name="name" id="name" className="popup__field" value="Жак-Ив Кусто" placeholder="Имя"
          minLength="2" maxLength="40" required />
        <span className="name-error popup__form-input-error"></span>
        <input type="text" name="about" id="about" className="popup__field" value="Исследователь океана"
          placeholder="Деятельность" minLength="2" maxLength="200" required />
        <span className="about-error popup__form-input-error"></span>
      </PopupWithForm>
      <PopupWithForm title="Новое место" id="add" isOpen={props.isOpen.isAddPlacePopupOpen} onClose={props.onClose}>
        <input type="text" name="name" id="place" className="popup__field" placeholder="Название" minLength="2"
          maxLength="30" required />
        <span className="place-error popup__form-input-error"></span>
        <input type="url" name="link" id="url" className="popup__field" placeholder="Ссылка на картинку" required />
        <span className="url-error popup__form-input-error"></span>
      </PopupWithForm>
      <ImagePopup card={props.card} onClose={props.onClose} />
      <PopupWithForm title="Вы уверены?" id="confirm" />
      <PopupWithForm title="Обновить аватар" id="edit-avatar" isOpen={props.isOpen.isEditAvatarPopupOpen} onClose={props.onClose}>
        <input type="url" name="avatar" id="url-avatar" className="popup__field" placeholder="Ссылка на картинку"
          required />
        <span className="url-avatar-error popup__form-input-error"></span>
      </PopupWithForm>

      <section className="elements">
        <ul className="photos">
          {cards.map((card) => {
            return <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          })
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;