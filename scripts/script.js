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
const popupAddNewCard = document.querySelector('.popup_add-card'); //попап заполнения новой карточки места (4)
const popupAddNewTitle = popupAddNewCard.querySelector('.popup__title');
const linkInput = popupAddNewCard.querySelector('.popup__input_type_pic-link'); //поле для ссылки на картинку в попапе карточки нового места (11)
const pupupCloseNewCard = popupAddNewCard.querySelector('.popup__btn-close-new'); //Кнопка Х закрытия попапа новой карточки (6)
const popupCloseButtonElement = popupElement.querySelector('.popup__btn-close');
const profileName = document.querySelector('.profile__name'); //имя, отображаемое на странице в профиле (8)
const profileOccupation = document.querySelector('.profile__occupation'); //профессия, отображаемая на странице в профиле (9)

const popupEdit = document.querySelector('.popup__profile-edit'); //попап редактирования профиля (3)

const popupEditButtonElement = document.querySelector('.profile__btn-edit'); //кнопка карандаш редактирования профиля (1)
const popupButtonSave = document.querySelector('.popup__btn-save'); //кнопка Сохранить в разных попапах (14)
const popupAddButtonElement = document.querySelector('.profile__btn-add'); //кнопка + добаления новой карточки (2)
const popupCloseProfile = document.querySelector('.popup__btn-close-profile'); //кнопка Х закрытия попапа редактирования профиля (5)
const popupCardPlace = document.querySelector('.popup__input_type_place'); //поле для места в попапе новой карточки (10)
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name'); //поле для имени в попапе редактирования профиля (12)
const occupationInput = formElement.querySelector('.popup__input_type_occupation'); //поле для профессии в попапе редактирования профиля (13)
const cardTemplate = document.querySelector(".card-template").content; //содержание шаблона (19)
const gridElement = document.querySelector(".photo-grid__list"); //галлерия фотографий (18)
const popupImageBig = document.querySelector('.popup__image'); //клик по картинке для раскрытия (15)
const popupImageCaption = document.querySelector('.popup__image-caption'); //подпись под картинкой (16)
const popupImage = document.querySelector('.popup_view-image'); //попап с всплывающей картинкой (17)
const popupCloseImage = document.querySelector('.popup__close_view-image'); //кнопка X закрытия увеличенной картинки (7)
const editForm = document.querySelector('.popup__form_type_add-card'); //форма добавления нового места с полями (20)

function setEventListeners (cardElement) {
	cardElement.querySelector(".photo-grid__item-delete").addEventListener('click', handleDelete);
  cardElement.querySelector(".photo-grid__item-like").addEventListener('click', handleLike);
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


function handleLike(event) {
  event.target.classList.toggle('photo-grid__item-like_active');
}
// function enlargePhoto(event)


function handleDelete(event) {
	event.target.closest(".photo-grid__item").remove();
	}



const openPopup = function() {
	popupElement.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-open');
    closePopup(openedPopup);
  }
}

const closePopup = function() {
	popupElement.classList.remove('popup_is-opened');
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