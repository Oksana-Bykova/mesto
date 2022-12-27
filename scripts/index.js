const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');


const openPopup = function() {
  popupElement.classList.add('popup_opened');
  titlePopupElement.value = titleElement.textContent;
  hobbyPopupElement.value = hobbyElement.textContent;
} 

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);


let titleElement = document.querySelector('.profile__title');
let titlePopupElement = document.querySelector('.popup__form-title');
let hobbyElement = document.querySelector('.profile__hobby');
let hobbyPopupElement = document.querySelector('.popup__form-hobby');

const formElement = document.querySelector('.popup__form');

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  titleElement.textContent = titlePopupElement.value;
  hobbyElement.textContent = hobbyPopupElement.value;
  closePopup ();
}

formElement.addEventListener ('submit', handleFormSubmit);