const content = document.querySelector('.content');
const popupClose = content.querySelector('.popup__close');
const popUp = content.querySelector('.popup');
const infoTitle = content.querySelector('.profile__info-title');
const infoSubtitle = content.querySelector('.profile__info-subtitle');
const popupForm = content.querySelector('.popup__form');
const editButton = content.querySelector('.profile__edit-button');

function openPopup() {
	popUp.classList.add('popup_opened');
}

function closePopup() {
	popUp.classList.remove('popup_opened');
}

function formSubmit(e) {
	e.preventDefault();

	infoTitle.textContent = inputTitle.value;
	infoSubtitle.textContent = inputSubtitle.value;

	closePopup();
}

function editProfile() {
	inputTitle.value = infoTitle.textContent;
	inputSubtitle.value = infoSubtitle.textContent;
}

popupClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmit);
editButton.addEventListener('click', editProfile);