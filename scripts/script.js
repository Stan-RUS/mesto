const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__btn-close');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupEditButtonElement = document.querySelector('.profile__btn-edit');
const popupAddButtonElement = document.querySelector('.profile__btn-add');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input-name');
const occupationInput = formElement.querySelector('.popup__input-occupation');
con

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