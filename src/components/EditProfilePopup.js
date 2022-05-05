import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm title="Редактировать профиль" id="edit" isOpen={isOpen} onClose={onClose} buttonText="Сохранить"
      onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" className="popup__field" value={name} placeholder="Имя"
        minLength="2" maxLength="40" onChange={handleNameChange} required />
      <span className="name-error popup__form-input-error"></span>
      <input type="text" name="about" id="about" className="popup__field" value={description}
        placeholder="Деятельность" minLength="2" maxLength="200" onChange={handleDescriptionChange} required />
      <span className="about-error popup__form-input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;