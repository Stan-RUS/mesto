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
const closePreviewImageButton = document.querySelector('.popup__btn-close-image');
const saveCardButton = document.querySelector('.popup__btn-save-card');

const popupEditProfileElement = document.querySelector('.popup_type_profile-edit');
const popupAddCardElement = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_view-image');

const imagePopup = document.querySelector('.popup__image');
const captionPopup = document.querySelector('.popup__image-caption');

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const editForm = document.querySelector('.popup__form_type_add-card');

const inputProfileNameValue = document.querySelector('.popup__input_type_name');
const inputProfileOccupationValue = document.querySelector('.popup__input_type_occupation');
const inputPlaceValue = document.querySelector('.popup__input_type_place');
const inputLinkValue = document.querySelector('.popup__input_type_pic-link');

const cardTemplate = document.querySelector('.card-template').content;
const gridElement = document.querySelector('.photo-grid__list');


const createCard = (name, link) => {
    const newCard = cardTemplate.cloneNode(true);
    const cardImage = newCard.querySelector('.photo-grid__item-image');
    newCard.querySelector('.photo-grid__item-place').textContent = name;
    cardImage.src = link;
    cardImage.alt = name;

    function setEventListeners() {
        const likeButton = newCard.querySelector(".photo-grid__item-like").addEventListener('click', handleLike);
        const deleteButton = newCard.querySelector(".photo-grid__item-delete").addEventListener('click', handleDelete);
        cardImage.addEventListener('click', function (evt) {
            openPopup(popupImage);

            imagePopup.src = cardImage.src;
            imagePopup.alt = name;
            captionPopup.textContent = name;
        })
    }

    setEventListeners();
    return newCard;


}
initialCards.forEach(function (element) {
    gridElement.append(createCard(element.name, element.link))
});

const openPopup = (popupElement) => {
    popupElement.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeByEscape);
    document.addEventListener('mousedown', closePopupByClickOnOverlay);
};

const closePopup = (popupElement) => {
    popupElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeByEscape);
    document.removeEventListener('mousedown', closePopupByClickOnOverlay);
};

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closePopup(openedPopup);
    }
}

const closePopupByClickOnOverlay = function (event) {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (event.target === openedPopup) {
        closePopup(openedPopup);
    }
};

const fillEditProfile = () => {
    inputProfileNameValue.value = profileName.textContent;
    inputProfileOccupationValue.value = profileOccupation.textContent;
};

const resetForm = (editForm) => {
    editForm.reset();
};

function handleLike(event) {
    event.target.classList.toggle('photo-grid__item-like_active');
}

function handleDelete(event) {
    event.target.closest(".photo-grid__item").remove();
}

addCardButton.addEventListener('click', function () {
    resetForm(editForm);
    openPopup(popupAddCardElement);
});

closeAddCardButton.addEventListener('click', function () {
    closePopup(popupAddCardElement);
});

editProfileButton.addEventListener('click', function () {
    openPopup(popupEditProfileElement);
    fillEditProfile(popupEditProfileElement);
});

closeEditProfileButton.addEventListener('click', function () {
    closePopup(popupEditProfileElement);
});

const handleProfileSave = (evt) => {
    evt.preventDefault();
    profileName.textContent = inputProfileNameValue.value;
    profileOccupation.textContent = inputProfileOccupationValue.value;
    closePopup(popupEditProfileElement);
};

popupEditProfileElement.addEventListener('submit', handleProfileSave);

const handleCardSave = (evt) => {
    evt.preventDefault();

    newName = inputPlaceValue.value,
        newLink = inputLinkValue.value,
        gridElement.prepend(createCard(newName, newLink))
    closePopup(popupAddCardElement);
    saveCardButton.setAttribute('disabled', true);
    saveCardButton.classList.add('popup__save_inactive-button');
};

popupAddCardElement.addEventListener('submit', handleCardSave);

closePreviewImageButton.addEventListener('click', function (event) {
    closePopup(popupImage)
});