const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__btn-close');

const popupEditButtonElement = document.querySelector('.popup__btn-edit');

const popupAddButtonElement = document.querySelector('.popup__btn-add');

const togglePopupVisibility = function() {
	popupElement.classList.toggle('popup_is-opened')
}

const openPopup = function() {
	popupElement.classList.add('popup_is-opened')
}

const closePopup = function() {
	popupElement.classList.remove('popup_is-opened')
}

const closePopupByClickOnOverlay = function(event) {
	if (event.target != event.currentTarget) {return
	}
	closePopup() 
}

popupEditButtonElement.addEventListener('click', openPopup);


popupCloseButtonElement.addEventListener ('click', closePopup);

popupElement.addEventListener('click', closePopupByClickOnOverlay);






