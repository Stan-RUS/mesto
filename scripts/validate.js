const formElement = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);


const showInputError = (formElement, inputElement, errorMessage) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.add("form__input_type_error");
	errorElement.textContent = errorMessage;
	errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, formInput) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.remove('form__input_type_error');
	errorElement.classList.remove('form__input-error_active');
	errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
	if(!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage);
	} else {
		hideInputError(formElement, inputElement);
	}
};

formElement.addEventListener('submit', function(evt) {
	evt.preventDefault();
});

formInput.addEventListener('input', function(){
	checkInputValidity(form, formInput);
});

const setEventListeners = (formElement) => {
	const inputList = Array.from(formElement.querySelectorAll('.form__input')); 

	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', function() {
			checkInputValidity(formElement, inputElement);
		});
	});
};
setEventListeners(form);

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
     formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
  const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
  fieldsetList.forEach((fieldSet) => {
  setEventListeners(fieldSet);
    }); 
  });
};

 
	const setEventListeners = (formElement) => {
		const inputList = Array.from(formElement.querySelectorAll('.form__input'));
		const buttonElement = formElement.querySelector('.form__submit');
		toggleButtonState(inputList, buttonElement);
		
		inputList.forEach((inputElement) => {
			inputElement.addEventListener('input', function () {
				checkInputValidity(formElement, inputElement);
				toggleButtonState(inputList, buttonElement);
			});
		});
	};
	

	const hasInvalidInput = (inputList) => {
		return inputList.some((inputElement) => {
			return !inputElement.validity.valid;
		})
	}; 
	
	const toggleButtonState = (inputList, buttonElement) => {
		if (hasInvalidInput(inputList)) {
			buttonElement.classList.add('button_inactive');
		} else {
			buttonElement.classList.remove('button_inactive');
		}
	}; 

enableValidation();



// Line	Col	Errors

// 13	38	'formInput' is defined but never used.
// 68	1	Unreachable 'const' after 'return'.
// 68	7	'toggleButtonState' is defined but never used.
// 14	56	'inputElement' is not defined.
// 15	5	'inputElement' is not defined.
// 33	24	'form' is not defined.
// 45	19	'form' is not defined.
// 3	7	'formError' is defined but never used.