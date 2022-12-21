const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
console.log(popupCloseButtonElement);

const openPopup = function() {
  popupElement.classList.add('popup_is-opened');
} 

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);