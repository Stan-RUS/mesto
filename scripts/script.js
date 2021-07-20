
const addCardButton = document.querySelector('.profile__btn-add');
const editProfileButton = document.querySelector('.profile__btn-edit');
const closeAddCardButton = document.querySelector('.popup__btn-close-new');
const closeEditProfileButton = document.querySelector('.popup__btn-close-profile');
const closePreviewImageButton = document.querySelector('.popup__btn-close-image');

const popupEditProfileElement = document.querySelector('.popup_type_profile-edit');
const popupAddCardElement = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_view-image');

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



function renderList() {
  const listItems = initialCards.map(createCard);
  gridElement.append(...listItems);
}

renderList();

const createCard = (cardData) => {
const newCard = cardTemplate.cloneNode(true);
const cardImage = document.querySelector('.photo-grid__item-image');
cardImage.addEventListener('click', function(evt) {
  const eventTarget = evt.target;
  imagePopup.setAttribute("src", eventTarget.getAttribute("src"));
  imagePopup.setAttribute("alt", cardData.name);
  captionPopup.textContent = cardData.name;
  openPopup(popupImage);
})
cardImage.src = cardData.link;
const newCardDeleteButton = document.querySelector('.photo-grid__item-delete');
newCardDeleteButton.addEventListener('click', function(evt) {
  const eventTarget = evt.target;
  eventTarget.closest('.photo-grid__item').remove();
})
const newCardPlace = document.querySelector('.photo-grid__item-place');
newCardPlace.textContent = cardData.name;
const newCardLikeButton = document.querySelector('.photo-grid__item-like');
newCardLikeButton.addEventListener('click', function(evt) {
  evt.target.classList.toggle('photo-grid__item-like_active');
})
return newCard;
};

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

const handleCardSave = (evt) => {
  evt.preventDefault();
  const newCard = createCard({name: inputPlaceValue.textContent, link: inputLinkValue.value});
  gridElement.append(newCard);
  closePopup(popupAddCardElement);
}; 


const openPopup = (popupElement) => {
  popupElement.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
};

function closeByEscape(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape); 
};

const resetForm = (editForm) => {
  editForm.reset();
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

closePreviewImageButton.addEventListener('click', function(event) {
  closePopup(popupImage);
});

const closePopupByClickOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};

popupEditProfileElement.addEventListener('submit', handleProfileSave);
popupAddCardElement.addEventListener('submit', handleCardSave);


// // function setEventListeners (cardElement) {
// //   cardElement.querySelector(".photo-grid__item-delete").addEventListener('click', handleDelete);
// //   cardElement.querySelector(".photo-grid__item-like").addEventListener('click', handleLike);
 
// // }

// function setEventListeners (newCard) {
//   newCard.querySelector(".photo-grid__item-delete").addEventListener('click', handleDelete);
//   newCard.querySelector(".photo-grid__item-like").addEventListener('click', handleLike);
// }

// //               function renderCard(name, link) {
// //                 const cardElement = cardTemplate.cloneNode(true);
// //                 const cardImage = cardElement.querySelector(".photo-grid__item-image");
// //                 cardElement.querySelector(".photo-grid__item-place").textContent = name;
// //                 cardImage.src = link;
// //                 cardImage.alt = name;
                
// //                 setEventListeners(cardElement);

// //                 cardImage.addEventListener('click', function(evt) {
// //                   openPopup(popupImage);
// //                   const imagePopup = document.querySelector('.popup__image');
// //                   imagePopup.src = evt.target.src;
// //                   imagePopup.alt = name;
// //                   captionPopup.textContent = name;
// //                 });

// //                 gridElement.appendChild(cardElement);
// //               }

// //               initialCards.forEach(function(initialCards) {
// //                 renderCard(initialCards.name, initialCards.link);
// //               });

// function handleLike(event) {
//   event.target.classList.toggle('photo-grid__item-like_active');
// }

// function handleDelete(event) {
//   event.target.closest(".photo-grid__item").remove();
//   }

                
          
              


//                 // newCard.querySelector('.photo-grid__item-place').textContent = inputPlaceValue.value;

//                 // name = inputPlaceValue.value;
//                 // cardImage.src = inputLinkValue.value;
//                 // cardImage.alt = name;

//                 // setEventListeners(newCard);

//                 //   cardImage.addEventListener('click', function(event) {
//                 //     openPopup(popupImage);
//                 //     const imagePopup = document.querySelector('.popup__image');
//                 //     imagePopup.src = cardImage.src;
//                 //     imagePopup.alt = name;
//                 //     captionPopup.textContent = name;
//                 //   });

//                 // gridElement.prepend(newCard);
//                 // // };





