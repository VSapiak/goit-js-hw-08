var throttle = require('lodash.throttle');

const emailForm = document.querySelector('.feedback-form');
const emailFormInput = emailForm.querySelector(`input[name="email"]`);
const messageFormInput = emailForm.querySelector(`textarea[name="message"]`);
const FORM_KEY = "feedback-form-state";

emailForm.addEventListener('submit', clearFormSubmit);
emailForm.addEventListener('input', throttle(addTextInput, 500));
saveSubmitTextrea();

// // очищаємо форму, видаляємо з application
function clearFormSubmit(e) {
	e.preventDefault();
	console.log({
		email: emailFormInput.value,
		message: messageFormInput.value
	});
	e.target.reset();
	localStorage.removeItem(FORM_KEY);
};

// функція в яку получаємо значення, за збеерігаємо до application
 function addTextInput() {
	const formObject = {
		email: emailFormInput.value,
		message: messageFormInput.value
	};
	localStorage.setItem(FORM_KEY, JSON.stringify(formObject));
	console.log(formObject);
};

// function save elements and remove emelents of application
function saveSubmitTextrea() {
	const savesElemsntToApplication = localStorage.getItem(FORM_KEY);
	if (savesElemsntToApplication) {
		const save = JSON.parse(savesElemsntToApplication);
		emailFormInput.value = save.email;
		messageFormInput.value = save.message;
	}
};