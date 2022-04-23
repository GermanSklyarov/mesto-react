import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
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
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          {userAvatar && (<img className="profile__avatar" src={userAvatar} alt="аватар" />)}
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button className="profile__edit-button" type="button" aria-label="редактировать" onClick={onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" aria-label="добавить" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="photos">
          {cards.map((card) => {
            return <Card key={card._id} card={card} onCardClick={onCardClick} />
          })
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;