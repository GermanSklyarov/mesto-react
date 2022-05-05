import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link
    });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm title="Новое место" id="add" isOpen={isOpen} onClose={onClose} buttonText="Создать" onSubmit={handleSubmit}>
      <input type="text" name="name" id="place" className="popup__field" placeholder="Название" minLength="2"
        maxLength="30" onChange={handleNameChange} value={name} required />
      <span className="place-error popup__form-input-error"></span>
      <input type="url" name="link" id="url" className="popup__field" placeholder="Ссылка на картинку"
        onChange={handleLinkChange} value={link} required />
      <span className="url-error popup__form-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;