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

const addCardButton = document.querySelector('.profile__btn-add');
const editProfileButton = document.querySelector('.profile__btn-edit');
const closeAddCardButton = document.querySelector('.popup__btn-close-new');
const closeEditProfileButton = document.querySelector('.popup__btn-close-profile');
const closePreviewImageButton = document.querySelector('.popup__close_view-image');

const popupElement = document.querySelector('.popup');
const popupEditProfileElement = document.querySelector('.popup__profile-edit');
const popupAddCardElement = document.querySelector('.popup__add-card');
const popupImage = document.querySelector('.popup_view-image');

const captionPopup = document.querySelector('.popup__image-caption');

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
<<<<<<< HEAD
const popupEditButtonElement = document.querySelector('.profile__btn-edit');
const popupAddButtonElement = document.querySelector('.profile__btn-add');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const occupationInput = formElement.querySelector('.popup__input_type_occupation');

const openPopup = function() {
	popupElement.classList.add('popup_is-opened')
=======
const editForm = document.querySelector('.popup__form_type_add-card');

const inputProfileNameValue = document.querySelector('.popup__input_type_name');
const inputProfileOccupationValue = document.querySelector('.popup__input_type_occupation');
const inputPlaceValue = document.querySelector('.popup__input_type_place');
const inputLinkValue = document.querySelector('.popup__input_type_pic-link');

const cardTemplate = document.querySelector('.card-template').content;
const gridElement = document.querySelector('.photo-grid__list');


const openPopup = (popupElement) => {
  popupElement.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
};

function closeByEscape(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
>>>>>>> develop
}

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_is-opened');
};

addCardButton.addEventListener('click', function() {
  resetForm(editForm);
  openPopup(popupAddCardElement);
});

closeAddCardButton.addEventListener('click', function() {
  closePopup(popupAddCardElement);
});

editProfileButton.addEventListener('click', function() {
  openPopup(popupEditProfileElement);
  fillEditProfile(popupEditProfileElement);
});

closeEditProfileButton.addEventListener('click', function() {
  closePopup(popupEditProfileElement);
});

const fillEditProfile = () => {
  inputProfileNameValue.value = profileName.textContent;
  inputProfileOccupationValue.value = profileOccupation.textContent;
};

const handleProfileSave =  (evt) => {
  evt.preventDefault();
  profileName.textContent = inputProfileNameValue.value;
  profileOccupation.textContent = inputProfileOccupationValue.value;
  closePopup(popupEditProfileElement);
};

popupEditProfileElement.addEventListener('submit', handleProfileSave);

const resetForm = (editForm) => {
  editForm.reset();
};

function setEventListeners (cardElement) {
  cardElement.querySelector(".photo-grid__item-delete").addEventListener('click', handleDelete);
  cardElement.querySelector(".photo-grid__item-like").addEventListener('click', handleLike);
 
}

function setEventListeners (newCard) {
  newCard.querySelector(".photo-grid__item-delete").addEventListener('click', handleDelete);
  newCard.querySelector(".photo-grid__item-like").addEventListener('click', handleLike);
}

function renderCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".photo-grid__item-image");
  cardElement.querySelector(".photo-grid__item-place").textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  
  setEventListeners(cardElement);

  cardImage.addEventListener('click', function(evt) {
    openPopup(popupImage);
    const imagePopup = document.querySelector('.popup__image');
    imagePopup.src = evt.target.src;
    imagePopup.alt = name;
    captionPopup.textContent = name;
  });

  gridElement.appendChild(cardElement);
}

initialCards.forEach(function(initialCards) {
  renderCard(initialCards.name, initialCards.link);
});

function handleLike(event) {
  event.target.classList.toggle('photo-grid__item-like_active');
}

function handleDelete(event) {
  event.target.closest(".photo-grid__item").remove();
  }

const createCard = (name, link) => {
 const newCard = cardTemplate.cloneNode(true);
 const cardImage = newCard.querySelector('.photo-grid__item-image');
 newCard.querySelector('.photo-grid__item-place').textContent = inputPlaceValue.value;

 name = inputPlaceValue.value;
 cardImage.src = inputLinkValue.value;
 cardImage.alt = name;

 setEventListeners(newCard);

  cardImage.addEventListener('click', function(event) {
    openPopup(popupImage);
    const imagePopup = document.querySelector('.popup__image');
    imagePopup.src = cardImage.src;
    imagePopup.alt = name;
    captionPopup.textContent = name;
  });

 gridElement.prepend(newCard);
};



const handleCardSave = (evt) => {
  evt.preventDefault();
  const newCard = createCard({name: inputPlaceValue.textContent, link: inputLinkValue.value});
  gridElement.append(newCard);
  closePopup(popupAddCardElement);
}; 

popupAddCardElement.addEventListener('submit', handleCardSave);

closePreviewImageButton.addEventListener('click', function(event) {
  closePopup(popupImage);
});

const closePopupByClickOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};