const showInputError = (formElement, inputElement, errorMessage, options) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(options.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(options.errorClass);
};

const hideInputError = (formElement, inputElement, options) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(options.inputErrorClass);
    errorElement.classList.remove(options.errorClass);
    errorElement.textContent = '';
};

const getErrorMessage = (inputElement) => {
    const defaultErrorHandler = (inputElement) => inputElement.validationMessage;
    const urlErrorHandler = (inputElement) => {
        if (inputElement.validity.typeMismatch) {
            return "Пожалуйста, введите верный адрес";
        }
        if (inputElement.validity.valueMissing) {
            return "Пожалуйста, заполните поле";
        }
    }

    const placeErrorHandler = (inputElement) => {
        if (inputElement.validity.patternMismatch) {
            return "Введите название не менее, чем из 2 символов";
        }
        if (inputElement.validity.valueMissing) {
            return "Пожалуйста, заполните название места";
        }
    }

    const nameErrorHandler = (inputElement) => {
        if (inputElement.validity.patternMismatch) {
            return "Введите имя не менее, чем из 2 букв";
        }
        if (inputElement.validity.valueMissing) {
            return "Пожалуйста, заполните имя";
        }
    }

    const occupationErrorHandler = (inputElement) => {
        if (inputElement.validity.patternMismatch) {
            return "Пожалуйста, введите корректные данные";
        }
        if (inputElement.validity.valueMissing) {
            return "Пожалуйста, укажите профессию";
        }
    }

    const errorHandlers = {
        url: urlErrorHandler,
        'place': placeErrorHandler,
        'name': nameErrorHandler,
        'occupation': occupationErrorHandler,
        DEFAULT: defaultErrorHandler,
    };

    const inputName = inputElement.name;
    const errorHandler = errorHandlers[inputName] || errorHandlers.DEFAULT;

    return errorHandler(inputElement);
};

const checkInputValidity = (formElement, inputElement, options) => {

    if (!inputElement.validity.valid) {
        const errorMessage = getErrorMessage(inputElement)

        showInputError(formElement, inputElement, errorMessage, options);
    } else {
        hideInputError(formElement, inputElement, options);
    }
}

const toggleButtonState = (inputList, buttonElement, options) => {
    if (hasNotValidInput(inputList)) {
        buttonElement.classList.add(options.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(options.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};

const setEventListeners = (formElement, options) => {
    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    const buttonElement = formElement.querySelector(options.submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, options);
            toggleButtonState(inputList, buttonElement, options);
        });
    });
};

const hasNotValidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const enableValidation = (options) => {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });

        setEventListeners(formElement, options);

    });
};
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__save_inactive-button',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
});

