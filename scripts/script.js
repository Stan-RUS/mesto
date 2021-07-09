const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__btn-close');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupEditButtonElement = document.querySelector('.profile__btn-edit');
const popupAddButtonElement = document.querySelector('.profile__btn-add');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const occupationInput = formElement.querySelector('.popup__input_type_occupation');
const cardTemplate = document.querySelector(".card-template").content;
const gridElement = document.querySelector(".photo-grid__list");

function setEventListeners (cardElement) {
	cardElement.querySelector(".photo-grid__item-delete").addEventListener('click', handleDelete);
}


function renderCard(name, link) {
	const cardElement = cardTemplate.cloneNode(true);
	const cardImage = cardElement.querySelector(".photo-grid__item-image");
	cardElement.querySelector(".photo-grid__item-place").textContent = name;
	cardImage.src = link;
	cardImage.alt = name;

  setEventListeners(cardElement);

	gridElement.appendChild(cardElement);
}

initialCards.forEach(function(initialCards) {
	renderCard(initialCards.name, initialCards.link);
});


const likeButton = gridElement.querySelector(".photo-grid__item-like");
likeButton.addEventListener('click', function(event) {
	event.target.classList.toggle('photo-grid__item-like_active');
});


// function enlargePhoto(event)


function handleDelete(event) {
	event.target.closest(".photo-grid__item").remove();
	}




const openPopup = function() {
	popupElement.classList.add('popup_is-opened')
}

const closePopup = function() {
	popupElement.classList.remove('popup_is-opened')
}

function formSubmitHandler (evt) {
	evt.preventDefault();

	profileName.textContent = nameInput.value;
	profileOccupation.textContent = occupationInput.value;

	closePopup();
}

function editProfile() {
	nameInput.value = profileName.textContent;
	occupationInput.value = profileOccupation.textContent;

	openPopup();
}

popupCloseButtonElement.addEventListener ('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
popupEditButtonElement.addEventListener('click', editProfile);

